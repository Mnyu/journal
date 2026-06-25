import Logout from './logout';
import ThemeToggle from './theme-toggle';
import { SidebarTrigger } from './ui/sidebar';

const Header = () => {
  return (
    <header className='w-full flex items-center justify-between'>
      <SidebarTrigger />
      <div className='flex items-center gap-3'>
        <ThemeToggle />
        <Logout />
      </div>
    </header>
  );
};
export default Header;
