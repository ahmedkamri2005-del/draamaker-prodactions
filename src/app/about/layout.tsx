import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Our Story & Vision',
  description: 'Meet Fouad "Fred" Challa and the team behind Dreamaker Productions. A UCLA-trained, Emmy-winning producer bridging global filmmaking with Moroccan excellence since 1999.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
