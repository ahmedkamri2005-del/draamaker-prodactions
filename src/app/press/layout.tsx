import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press | Media Inquiries & Resources',
  description: 'For press inquiries, interview requests, and media assets related to Dreamaker Productions and filming in Morocco, contact our communications team.',
};

export default function PressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
