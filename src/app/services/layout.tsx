import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Production Services | Full-Service Film Support',
  description: 'Comprehensive film production services in Morocco — permits, locations, equipment, crew, catering, transport, and post-production. From first recce to final wrap.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
