import type { Metadata } from 'next';

export const siteUrl = 'https://appointik.in';
export const socialImage = {
  url: `${siteUrl}/og-image.png?v=20260908`,
  width: 1200,
  height: 630,
  alt: 'Appointik clinic software from ₹249 per clinic per month, with Android apps in 20 languages',
};

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = new URL(path, siteUrl).href;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      siteName: 'Appointik',
      title,
      description,
      url,
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage],
    },
  };
}
