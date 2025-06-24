import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';

/**
 * Sidebar component for the main application layout.
 * This component acts as a wrapper around the more complex SidebarNav organism.
 * It ensures a clean separation of concerns, where layout components manage structure
 * and organism components manage feature-rich content.
 */
const Sidebar: React.FC = () => {
  // The SidebarNav component from context already contains all the necessary styling and structure,
  // including being fixed, its width (w-64), and its internal flex layout.
  // This component simply renders it as part of the overall application layout.
  return <SidebarNav />;
};

export default Sidebar;
