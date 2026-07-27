import React, { useState } from 'react';
import axios from 'axios';
import { Send, Mail, MapPin, CheckCircle2, AlertCircle, Loader2, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData, ContactApiResponse } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [responseState, setResponseState] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear response status on input modification
    if (responseState.type) {
      setResponseState({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Frontend validation
    if (!formData.name.trim()) {
      setResponseState({
        type: 'error',
        message: 'Please enter your name.',
      });
      return;
    }

    if (!formData.email.trim()) {
      setResponseState({
        type: 'error',
        message: 'Please enter your email address.',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setResponseState({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    if (!formData.message.trim()) {
      setResponseState({
        type: 'error',
        message: 'Please write a message before sending.',
      });
      return;
    }

    setLoading(true);
    setResponseState({ type: null, message: '' });

    try {
      // Send request to Express backend POST /api/contact
      const response = await axios.post<ContactApiResponse>('/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) {
        setResponseState({
          type: 'success',
          message: response.data.message || 'Thank you for reaching out! Your message has been sent.',
        });
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setResponseState({
          type: 'error',
          message: response.data.message || 'Failed to send message. Please try again.',
        });
      }
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      const errorMessage =
        error.response?.data?.message || 'Server error. Please check your internet connection or try again later.';
      setResponseState({
        type: 'error',
        message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white/70 backdrop-blur-sm relative border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-xs font-extrabold text-gray-700 uppercase tracking-widest mb-2">LET'S CONNECT</h3>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Contact <span className="text-black underline decoration-black decoration-2 underline-offset-4">Me</span>
          </h2>
          <p className="text-gray-800 mt-3 text-sm sm:text-base font-semibold">
            Have a question, an internship opportunity, or want to discuss a project? Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-gray-300 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gray-100 text-black border border-gray-300 shrink-0">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xs font-extrabold text-gray-700 uppercase tracking-wider font-mono">
                  Direct Email
                </h3>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-black hover:text-zinc-800 font-extrabold text-base transition-colors mt-1 block break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
                <p className="text-xs text-gray-700 font-medium mt-1">
                  Preferred for official inquiries & internship recruitment.
                </p>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-gray-300 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gray-100 text-black border border-gray-300 shrink-0">
                <Github className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xs font-extrabold text-gray-700 uppercase tracking-wider font-mono">
                  GitHub Profile
                </h3>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-zinc-800 font-extrabold text-base transition-colors mt-1 block"
                >
                  github.com/ttgahty-beep
                </a>
                <p className="text-xs text-gray-700 font-medium mt-1">
                  Explore my latest software repositories and code commits.
                </p>
              </div>
            </div>

            {/* Academic Location Card */}
            <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-gray-300 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gray-100 text-black border border-gray-300 shrink-0">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xs font-extrabold text-gray-700 uppercase tracking-wider font-mono">
                  Academic Location
                </h3>
                <p className="text-black font-extrabold text-base mt-1">
                  Software Engineering Department
                </p>
                <p className="text-xs text-gray-700 font-medium mt-1">
                  Open to remote and on-site internship roles.
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-300 shadow-sm">
            <h3 className="text-xl font-extrabold text-black mb-2">Send a Message</h3>
            <p className="text-sm text-gray-800 font-medium mb-6">
              Fill out the form below. Messages are processed by the Express backend API.
            </p>

            {/* Response Alert Feedback */}
            {responseState.type && (
              <div
                className={`p-4 mb-6 rounded-xl border flex items-start gap-3 text-sm font-bold ${
                  responseState.type === 'success'
                    ? 'bg-emerald-50 text-emerald-950 border-emerald-300'
                    : 'bg-red-50 text-red-950 border-red-300'
                }`}
              >
                {responseState.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-700" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-700" />
                )}
                <span>{responseState.message}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name Input */}
              <div>
                <label htmlFor="name-input" className="block text-xs font-mono text-black uppercase mb-2 font-black">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="name-input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name (e.g., Alex Smith)"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-black font-semibold placeholder-gray-500 focus:outline-none focus:border-black focus:bg-white transition-colors"
                  disabled={loading}
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email-input" className="block text-xs font-mono text-black uppercase mb-2 font-black">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="email-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email (e.g., alex@example.com)"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-black font-semibold placeholder-gray-500 focus:outline-none focus:border-black focus:bg-white transition-colors"
                  disabled={loading}
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message-input" className="block text-xs font-mono text-black uppercase mb-2 font-black">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message-input"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Ahtesham, I would like to discuss a software project..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-black font-semibold placeholder-gray-500 focus:outline-none focus:border-black focus:bg-white transition-colors resize-none"
                  disabled={loading}
                />
              </div>

              {/* Submit Button */}
              <button
                id="contact-send-btn"
                type="submit"
                disabled={loading}
                className="w-full bg-black hover:bg-zinc-800 text-white text-xs font-bold py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed shadow-xs cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>SENDING MESSAGE...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-white" />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
