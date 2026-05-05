import { Metadata } from 'next';
import TaxRebateClient from './TaxRebateClient';

export const metadata: Metadata = {
  title: '30% Film Tax Rebate in Morocco',
  description: 'Maximize your production value. The Kingdom of Morocco offers a highly competitive 30% cash rebate on eligible local spend. We handle the entire CCM application process.',
};

export default function TaxRebatePage() {
  return <TaxRebateClient />;
}
