import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch',
  description: 'Bring your vision to Morocco. Contact Dreamaker Productions to discuss your budget, location scouting, and line production needs.',
};

export default function ContactPage() {
  return <ContactClient />;
}
