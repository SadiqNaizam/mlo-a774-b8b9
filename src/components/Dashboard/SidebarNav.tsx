import React from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutGrid, 
  UsersRound, 
  User, 
  FileText, 
  Receipt, 
  ShoppingBasket, 
  Mail, 
  Archive, 
  Calendar, 
  HelpCircle, 
  Settings 
} from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  href?: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, isActive = false, href = '#' }) => (
  <a
    href={href}
    className={cn(
      'flex items-center px-4 py-2 text-sm font-medium rounded-md',
      isActive
        ? 'bg-blue-100 text-primary-text'
        : 'text-secondary-text hover:bg-gray-100'
    )}
  >
    <Icon className="w-5 h-5 mr-3" />
    <span>{label}</span>
  </a>
);

const SidebarNav: React.FC = () => {
  const mainNavItems: NavItemProps[] = [
    { icon: LayoutGrid, label: 'Dashboard', isActive: true },
    { icon: UsersRound, label: 'Leads' },
    { icon: User, label: 'Customers' },
    { icon: FileText, label: 'Proposals' },
    { icon: Receipt, label: 'Invoices' },
    { icon: ShoppingBasket, label: 'Items' },
    { icon: Mail, label: 'Mail' },
    { icon: Archive, label: 'Shoebox' },
    { icon: Calendar, label: 'Calendar' },
  ];

  const secondaryNavItems: NavItemProps[] = [
    { icon: HelpCircle, label: 'Help' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-card border-r h-screen flex flex-col p-4 fixed top-0 left-0">
      <div className="flex items-center gap-2 mb-8 px-2">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full font-bold text-lg">
            B
          </div>
          <div className="w-8 h-8 border-2 border-black rounded-full"></div>
      </div>
      
      <div className="flex flex-col justify-between flex-grow">
        <nav className="space-y-2">
          {mainNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>

        <nav className="space-y-2">
          {secondaryNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default SidebarNav;
