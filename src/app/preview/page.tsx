import { notFound } from 'next/navigation';
import { HomepageView } from '@/app/_components/home/homepage-view';
import { loadHomepageData } from '@/content/homepage/loader';
import { isPreviewTokenValid } from '@/content/homepage/preview-token';

export default async function PreviewPage({ searchParams }: { searchParams: Promise<{ expires?: string; signature?: string }> }) {
  const { expires, signature } = await searchParams;
  const secret = process.env.HOMEPAGE_PREVIEW_SECRET ?? '';
  if (!isPreviewTokenValid(expires, signature, secret)) notFound();

  const data = await loadHomepageData({ mode: 'draft', previewSecret: secret });
  return <HomepageView data={data} />;
}
