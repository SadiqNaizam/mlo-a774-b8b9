import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MainAppLayout defines the primary structure of the application interface.
 * It follows a common "HLSB" (Header, Left Sidebar, Body) pattern where the sidebar is fixed
 * and the main content area (including the header) is scrollable.
 *
 * This structure is based on the provided context where SidebarNav is a fixed element.
 * A left padding on the main content area prevents it from being obscured by the sidebar.
 *
 * @param {React.ReactNode} children - The main page content to be rendered.
 * @param {string} [className] - Optional additional class names for the main content area.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="pl-64"> {/* Offset for the w-64 fixed sidebar */}
        <Header />
        <main className={cn("p-6", className)}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
