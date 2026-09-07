import { PlaygroundProvider } from '@/context/playground-context';

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <PlaygroundProvider>
      {children}
    </PlaygroundProvider>
  );
}