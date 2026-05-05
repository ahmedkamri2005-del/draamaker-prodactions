import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Art & Wardrobe Assets | Armor, Costumes & Props',
  description: 'Thousands of hand-crafted armor sets, cinematic costumes, Egyptian jewelry, and military props available for your production. Dreamaker Productions\' wardrobe archive in Morocco.',
};

export default function ArtWardrobeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
