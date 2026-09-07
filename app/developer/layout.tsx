import { DeveloperProvider } from '@/context/developer-context';

export default function DeveloperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DeveloperProvider>
      <div className="dark min-h-screen" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
        {children}
      </div>
    </DeveloperProvider>
  );
}
