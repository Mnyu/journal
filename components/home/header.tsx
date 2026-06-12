import ThemeToggle from '../theme/theme-toggle';
import { SidebarTrigger } from '../ui/sidebar';

const Header = () => {
  return (
    <header className='w-full flex items-center justify-between p-3'>
      <SidebarTrigger />
      <ThemeToggle />
    </header>
  );
};
export default Header;
