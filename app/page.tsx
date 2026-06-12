import ThemeToggle from '@/components/theme/theme-toggle';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='p-4 m-3'>
      <ThemeToggle />
      <h1>Hello</h1>
      <Button>Click me</Button>
    </div>
  );
}
