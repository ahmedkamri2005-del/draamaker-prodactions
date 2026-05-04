import { Metadata } from 'next';
import CreditsClient from './CreditsClient';

export const metadata: Metadata = {
  title: 'Featured Credits & Portfolio',
  description: 'Explore the worlds we have helped build for global studios. Featuring trailers and stills from our work on major feature films and television series in Morocco.',
};

export default function CreditsPage() {
  return <CreditsClient />;
}
