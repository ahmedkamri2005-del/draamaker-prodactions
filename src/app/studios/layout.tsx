import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Studios & Backlots | Soundstages & Standing Sets',
  description: 'World-class soundstages, legendary desert studios, and established backlots in Morocco — Roman, Egyptian, and medieval standing sets ready for your next epic production.',
};

export default function StudiosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
