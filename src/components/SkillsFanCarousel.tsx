import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import {
  Code2,
  Terminal,
  Cpu,
  FileCode2,
  Layout,
  Server,
  Layers,
  Database,
  GitBranch,
  Github,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SKILLS_DATA } from "../data/portfolioData";
import { Card3D } from "./Card3D";
import { Skill } from "../types";

interface SkillsFanCarouselProps {
  skills?: Skill[];
}

const getSkillIcon = (iconName: string) => {
  const props = { className: "w-7 h-7 text-primary" };
  switch (iconName) {
    case "Code2":
      return <Code2 {...props} />;
    case "Terminal":
      return <Terminal {...props} />;
    case "Cpu":
      return <Cpu {...props} />;
    case "FileCode2":
      return <FileCode2 {...props} />;
    case "Layout":
      return <Layout {...props} />;
    case "Server":
      return <Server {...props} />;
    case "Layers":
      return <Layers {...props} />;
    case "Database":
      return <Database {...props} />;
    case "GitBranch":
      return <GitBranch {...props} />;
    case "Github":
      return <Github {...props} />;
    default:
      return <Code2 {...props} />;
  }
};

const themeColorMap: Record<string, { badge: string; border: string; glow: string; bar: string }> = {
  emerald: {
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    border: "border-emerald-500/40",
    glow: "rgba(16, 185, 129, 0.25)",
    bar: "bg-emerald-500",
  },
  cyan: {
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    border: "border-cyan-500/40",
    glow: "rgba(6, 182, 212, 0.25)",
    bar: "bg-cyan-400",
  },
  amber: {
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    border: "border-amber-500/40",
    glow: "rgba(245, 158, 11, 0.25)",
    bar: "bg-amber-400",
  },
  violet: {
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/30",
    border: "border-violet-500/40",
    glow: "rgba(139, 92, 246, 0.25)",
    bar: "bg-violet-400",
  },
  rose: {
    badge: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    border: "border-rose-500/40",
    glow: "rgba(244, 63, 94, 0.25)",
    bar: "bg-rose-400",
  },
  blue: {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    border: "border-blue-500/40",
    glow: "rgba(59, 130, 246, 0.25)",
    bar: "bg-blue-400",
  },
};

const MAX_VISIBLE = 7;
const HALF = 3;

const FAN_POSITIONS = [
  { rot: -21, scale: 0.7756, x: -30, y: 7.3, zIndex: 1 },
  { rot: -14, scale: 0.8498, x: -22, y: 4.0, zIndex: 2 },
  { rot: -7, scale: 0.9346, x: -11, y: 1.3, zIndex: 3 },
  { rot: 0, scale: 1.0, x: 0, y: 0.0, zIndex: 10 },
  { rot: 7, scale: 0.9346, x: 11, y: 1.3, zIndex: 3 },
  { rot: 14, scale: 0.8498, x: 22, y: 4.0, zIndex: 2 },
  { rot: 21, scale: 0.7756, x: 30, y: 7.3, zIndex: 1 },
];

function getResponsiveMultiplier(width: number) {
  if (width < 480) return 0.28;
  if (width < 640) return 0.38;
  if (width < 768) return 0.5;
  if (width < 1024) return 0.75;
  return 1.0;
}

function getHeightMultiplier(width: number) {
  let idealPx: number;
  if (width < 480) idealPx = 22 * 16;
  else if (width < 640) idealPx = 26 * 16;
  else if (width < 768) idealPx = 28 * 16;
  else if (width < 1024) idealPx = 34 * 16;
  else idealPx = 38 * 16;

  const available = window.innerHeight * 0.7;
  if (available >= idealPx) return 1;
  return available / idealPx;
}

function getSlotConfig(totalCards: number, slot: number) {
  if (totalCards >= MAX_VISIBLE) return FAN_POSITIONS[slot];
  const center = totalCards >> 1;
  const distance = totalCards > 1 ? (slot - center) / center : 0;
  const absDistance = Math.abs(distance);
  return {
    rot: distance * 21,
    scale: 1.0 - 0.2244 * absDistance * absDistance,
    x: distance * 30,
    y: absDistance * absDistance * 7.3,
    zIndex: 10 - Math.abs(slot - center),
  };
}

const ARROW_CLASSES =
  "relative flex items-center justify-center rounded-full border-[1.5px] border-border bg-card/90 backdrop-blur-[16px] text-foreground cursor-pointer shrink-0 z-30 outline-none shadow-lg hover:border-primary/50 hover:text-primary active:scale-95 transition-all duration-300";

export const SkillsFanCarousel: React.FC<SkillsFanCarouselProps> = ({ skills = SKILLS_DATA }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const hasEntered = useRef(false);
  const directionRef = useRef<"left" | "right" | null>(null);
  const prevVisible = useRef<Set<number>>(new Set());

  const totalCards = skills.length;
  const needsPagination = totalCards > MAX_VISIBLE;
  const [centerIndex, setCenterIndex] = useState(needsPagination ? HALF : totalCards >> 1);

  const getVisibleMap = useCallback(
    (center: number) => {
      const map = new Map<number, number>();
      if (!needsPagination) {
        skills.forEach((_, i) => map.set(i, i));
        return map;
      }
      for (let slot = 0; slot < MAX_VISIBLE; slot++) {
        map.set(((center + slot - HALF) % totalCards + totalCards) % totalCards, slot);
      }
      return map;
    },
    [totalCards, needsPagination, skills]
  );

  const cycle = useCallback(
    (direction: "left" | "right") => {
      if (isAnimating.current || !needsPagination) return;
      isAnimating.current = true;
      directionRef.current = direction;
      setCenterIndex((prev) =>
        direction === "right" ? (prev + 1) % totalCards : (prev - 1 + totalCards) % totalCards
      );
    },
    [totalCards, needsPagination]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !totalCards) return;

    const cardElements = Array.from(container.querySelectorAll<HTMLElement>(".fan-card"));
    if (!cardElements.length) return;

    const visibleMap = getVisibleMap(centerIndex);
    const previouslyVisible = prevVisible.current;
    const direction = directionRef.current;
    const isFirstMount = !hasEntered.current;
    const multiplier = getResponsiveMultiplier(window.innerWidth);
    const hMult = getHeightMultiplier(window.innerWidth);
    const slotCount = needsPagination ? MAX_VISIBLE : totalCards;
    const config = (slot: number) => getSlotConfig(slotCount, slot);

    if (isFirstMount) isAnimating.current = true;

    let completedCount = 0;
    const visibleCount = visibleMap.size;
    const onCardDone = () => {
      if (++completedCount >= visibleCount) {
        isAnimating.current = false;
        if (isFirstMount) hasEntered.current = true;
      }
    };

    cardElements.forEach((card, cardIndex) => {
      const slot = visibleMap.get(cardIndex);
      const wasVisible = previouslyVisible.has(cardIndex);
      const targetEl = card as HTMLElement;

      if (slot !== undefined) {
        const { x, y, rot, scale, zIndex } = config(slot);
        const target = {
          x: `${x * multiplier}rem`,
          y: `${y * hMult}rem`,
          rotation: rot,
          scale,
          opacity: 1,
          zIndex,
        };

        if (isFirstMount) {
          gsap.set(targetEl, { x: 0, y: `${12 * hMult}rem`, rotation: 0, scale: 0.5, opacity: 0 });
          gsap.to(targetEl, {
            ...target,
            duration: 0.65,
            ease: "power3.out",
            delay: 0.1 + slot * 0.04,
            onComplete: onCardDone,
          });
        } else if (!wasVisible) {
          const enterX = direction === "right" ? 40 : -40;
          gsap.set(targetEl, {
            x: `${enterX}rem`,
            y: `${y * hMult}rem`,
            rotation: direction === "right" ? 30 : -30,
            scale: 0.5,
            opacity: 0,
          });
          gsap.to(targetEl, { ...target, duration: 0.35, ease: "power2.out", onComplete: onCardDone });
        } else {
          gsap.to(targetEl, { ...target, duration: 0.35, ease: "power2.out", onComplete: onCardDone });
        }
      } else if (wasVisible) {
        const exitX = direction === "right" ? -40 : 40;
        gsap.to(targetEl, {
          x: `${exitX}rem`,
          opacity: 0,
          scale: 0.5,
          rotation: direction === "right" ? -30 : 30,
          duration: 0.3,
          ease: "power2.in",
          zIndex: 0,
        });
      } else if (isFirstMount) {
        gsap.set(targetEl, { opacity: 0, scale: 0.3, x: 0, y: 0, zIndex: 0 });
      }
    });

    prevVisible.current = new Set(visibleMap.keys());

    // Hover interactions
    const visibleEntries: { el: HTMLElement; slot: number }[] = [];
    cardElements.forEach((el, i) => {
      const slot = visibleMap.get(i);
      if (slot !== undefined) visibleEntries.push({ el: el as HTMLElement, slot });
    });
    visibleEntries.sort((a, b) => a.slot - b.slot);

    let activeSlot: number | null = null;
    let leaveTimer: NodeJS.Timeout | null = null;
    const centerSlot = visibleEntries.length >> 1;

    const updateHoverLayout = (hoveredSlot: number | null) => {
      const mult = getResponsiveMultiplier(window.innerWidth);
      const hM = getHeightMultiplier(window.innerWidth);

      visibleEntries.forEach(({ el, slot }) => {
        const base = config(slot);
        let targetX = base.x * mult;
        let targetY = base.y * hM;
        let targetRot = base.rot;
        let targetScale = base.scale;
        let delay = 0;

        if (hoveredSlot !== null) {
          const distance = Math.abs(slot - hoveredSlot);
          delay = distance * 0.01;

          if (slot === hoveredSlot) {
            targetY -= 2.5 * hM;
            targetScale *= 1.08;
          } else {
            const normalized = centerSlot > 0 ? (slot - centerSlot) / centerSlot : 0;
            const pushStrength =
              8 * (1 - Math.abs(normalized)) * (1 + 0.2 * Math.max(0, 3 - distance));

            if (slot < hoveredSlot) {
              targetX -= pushStrength * mult;
              targetRot -= 3 / (distance + 1);
            } else {
              targetX += pushStrength * mult;
              targetRot += 3 / (distance + 1);
            }

            if (slot === visibleEntries.length - 1 && hoveredSlot < centerSlot) targetY -= 1 * hM;
            if (slot === 0 && hoveredSlot > centerSlot) targetY -= 1 * hM;
          }
        } else {
          delay = Math.abs(slot - centerSlot) * 0.01;
        }

        gsap.to(el, {
          x: `${targetX}rem`,
          y: `${targetY}rem`,
          rotation: targetRot,
          scale: targetScale,
          duration: 0.28,
          delay,
          ease: "power2.out",
          overwrite: "auto",
        });
        gsap.set(el, { zIndex: base.zIndex });
      });
    };

    const enterHandlers = visibleEntries.map(({ el, slot }) => {
      const handler = () => {
        if (isAnimating.current) return;
        if (leaveTimer) {
          clearTimeout(leaveTimer);
          leaveTimer = null;
        }
        if (activeSlot !== slot) {
          activeSlot = slot;
          updateHoverLayout(slot);
        }
      };
      el.addEventListener("mouseenter", handler);
      return { el, handler };
    });

    const onMouseLeave = () => {
      if (isAnimating.current) return;
      if (leaveTimer) clearTimeout(leaveTimer);
      leaveTimer = setTimeout(() => {
        activeSlot = null;
        updateHoverLayout(null);
      }, 50);
    };
    container.addEventListener("mouseleave", onMouseLeave);

    const onResize = () => {
      if (!isAnimating.current) updateHoverLayout(activeSlot);
    };
    window.addEventListener("resize", onResize);

    return () => {
      enterHandlers.forEach(({ el, handler }) => el.removeEventListener("mouseenter", handler));
      container.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      if (leaveTimer) clearTimeout(leaveTimer);
    };
  }, [centerIndex, totalCards, getVisibleMap, needsPagination]);

  if (!totalCards) return null;

  const chevron = (direction: "left" | "right") => (
    <svg
      className="relative z-[2] w-4 h-4 md:w-5 md:h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points={direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
    </svg>
  );

  return (
    <section className="flex flex-col items-center w-full py-4 lg:py-8 px-2 md:px-8 relative z-20">
      <div className="flex items-center justify-center w-full max-w-[90rem]">
        <div
          ref={containerRef}
          className="fan-layout flex relative justify-center items-center w-full max-w-[80rem] h-[360px] sm:h-[420px]"
        >
          {skills.map((skill, index) => {
            const themeKey =
              skill.colorTheme ||
              (index % 6 === 0
                ? "amber"
                : index % 6 === 1
                ? "cyan"
                : index % 6 === 2
                ? "blue"
                : index % 6 === 3
                ? "emerald"
                : index % 6 === 4
                ? "violet"
                : "rose");

            const style = themeColorMap[themeKey] || themeColorMap.emerald;

            return (
              <div
                key={skill.id}
                className="fan-card absolute w-60 sm:w-68 h-[340px] sm:h-[390px] rounded-2xl cursor-pointer select-none origin-bottom shadow-2xl transition-shadow"
              >
                <Card3D depth={8} glowColor={style.glow} className="w-full h-full">
                  <div
                    className={`w-full h-full bg-card/95 backdrop-blur-md rounded-2xl border ${style.border} p-5 sm:p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group`}
                  >
                    {/* Top ambient glow gradient */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                    {/* Card Top: Icon & Category */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-secondary border border-border/80 shadow-xs group-hover:scale-105 transition-transform">
                          {getSkillIcon(skill.iconName)}
                        </div>
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-bold border ${style.badge}`}>
                          {skill.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors tracking-tight mb-2">
                        {skill.name}
                      </h3>

                      <p className="text-muted-foreground text-xs sm:text-sm font-medium leading-relaxed line-clamp-4">
                        {skill.description}
                      </p>
                    </div>

                    {/* Card Bottom: Proficiency & Status */}
                    <div className="pt-4 border-t border-border/60 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono font-bold">
                        <span className="text-muted-foreground uppercase flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                          Proficiency
                        </span>
                        <span className="text-foreground">{skill.proficiency || 90}%</span>
                      </div>

                      {/* Progress Track */}
                      <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                        <div
                          className={`h-full rounded-full ${style.bar}`}
                          style={{ width: `${skill.proficiency || 90}%` }}
                        />
                      </div>

                      <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-muted-foreground font-semibold">
                        <span>Core Engineering</span>
                        <span className="text-primary font-bold">Verified</span>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </div>
            );
          })}
        </div>
      </div>

      {needsPagination && (
        <div className="flex items-center justify-center gap-4 mt-6 md:mt-8 z-30">
          <button
            className={`${ARROW_CLASSES} w-10 h-10 md:w-12 md:h-12`}
            onClick={() => cycle("left")}
            aria-label="Previous Skill"
          >
            {chevron("left")}
          </button>
          <div className="flex items-center gap-2">
            {skills.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === centerIndex ? "bg-primary scale-[1.4] shadow-[0_0_8px_rgba(66,146,103,0.8)]" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          <button
            className={`${ARROW_CLASSES} w-10 h-10 md:w-12 md:h-12`}
            onClick={() => cycle("right")}
            aria-label="Next Skill"
          >
            {chevron("right")}
          </button>
        </div>
      )}
    </section>
  );
};
