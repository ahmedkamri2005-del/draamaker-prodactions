import { Metadata } from 'next';
import TaxRebateClient from './TaxRebateClient';

export const metadata: Metadata = {
  title: '20% Film Tax Rebate in Morocco',
  description: 'Maximize your production value. The Kingdom of Morocco offers a highly competitive 20% cash rebate on eligible local spend. We handle the entire CCM application process.',
};

export default function TaxRebatePage() {
  return <TaxRebateClient />;
}
