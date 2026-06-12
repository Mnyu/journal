import ThemeToggle from '@/components/theme/theme-toggle';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <h1>Hello</h1>
      <Button>Click me</Button>
    </>
  );
}
