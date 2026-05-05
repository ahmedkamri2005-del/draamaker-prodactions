import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Filming Locations | Deserts, Mountains, Medinas & More',
  description: 'Explore Morocco\'s extraordinary filming locations — from the Sahara Desert and Atlas Mountains to ancient kasbahs, coastal cities, and Roman ruins. A world of landscapes in one destination.',
};

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
