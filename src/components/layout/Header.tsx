import React from 'react';
import TopHeader from '../Dashboard/TopHeader';

/**
 * Header component for the main application layout.
 * It wraps the TopHeader organism, which contains the page title and primary action buttons.
 * The positioning of this header within the page is controlled by its parent layout (MainAppLayout).
 */
const Header: React.FC = () => {
  // The TopHeader organism contains the page title ("Dashboard"), filter dropdowns, and create button.
  // This layout component encapsulates it for clean integration into the MainAppLayout.
  return <TopHeader />;
};

export default Header;
