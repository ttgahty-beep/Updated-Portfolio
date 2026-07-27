import React from 'react';
import { HomeSection } from '../components/HomeSection';

interface HomeProps {
  onOpenCVModal?: () => void;
  onNavigateToContact?: () => void;
}

export const Home: React.FC<HomeProps> = ({
  onOpenCVModal = () => {},
  onNavigateToContact = () => {},
}) => {
  return (
    <HomeSection
      onOpenCVModal={onOpenCVModal}
      onNavigateToContact={onNavigateToContact}
    />
  );
};

export default Home;
