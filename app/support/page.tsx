import { pageMetadata } from '@/lib/seo';
import { SupportSection } from '@/components/support/support-section';

export const metadata = pageMetadata(
  'Support - Get Help with Appointik',
  'Get help with Appointik clinic software, plans and apps. Contact our team by email or WhatsApp, or use the support form to start your enquiry.',
  '/support/'
);

export default function SupportPage() {
  return (
    <div className="pt-16">
      <SupportSection />
    </div>
  );
}
