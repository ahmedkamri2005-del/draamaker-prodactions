import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Credits | Our Film & TV Portfolio',
  description: 'Explore Dreamaker Productions\' portfolio of international films, TV series, and documentaries shot in Morocco — including The Walk, Dirty Angels, Agent Vinod, and more.',
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
