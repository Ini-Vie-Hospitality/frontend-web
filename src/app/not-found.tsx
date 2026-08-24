import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/layout/footer/footer';
import { Navbar } from '@/components/layout/navbar/navbar';
import { fallbackHomepageData } from '@/content/homepage/fallback';
import { loadHomepageData } from '@/content/homepage/loader';

export const metadata: Metadata = {
  title: '404 | Ini Vie Hospitality',
  description: 'The page you are looking for could not be found.',
};

export default async function NotFound() {
  const homepage = await loadHomepageData();
  const data = {
    navbar: homepage.navbar ?? fallbackHomepageData.navbar,
    footer: homepage.footer ?? fallbackHomepageData.footer,
  };

  return (
    <>
      <Navbar heroId="not-found-hero" data={data.navbar} />
      <main
        id="not-found-hero"
        className="relative isolate min-h-[100svh] overflow-hidden bg-[#050704] text-[#f8f4ed]"
      >
        <Image
          src="/404.webp"
          alt="Sunlit pathway through a tropical Bali garden"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,4,2,.74)_0%,rgba(3,5,2,.61)_32%,rgba(3,4,2,.24)_64%,rgba(2,3,1,.38)_100%),linear-gradient(180deg,rgba(2,3,1,.35)_0%,rgba(2,3,1,.04)_42%,rgba(2,3,1,.42)_100%)]" />
        <section className="absolute left-[clamp(2rem,8.8vw,11.25rem)] top-[41%] max-w-[760px] max-md:top-auto max-md:right-6 max-md:bottom-14">
          <p className="text-[clamp(1rem,1.2vw,1.35rem)] tracking-[.36em] text-[#d99562]">
            404
          </p>
          <h1 className="mt-6 font-[Georgia,Times_New_Roman,serif] text-[clamp(3.4rem,3.85vw,5.2rem)] font-normal leading-[.94] tracking-[-.045em] text-[#fbf7ef] max-md:mt-4 max-md:text-[clamp(3.2rem,13vw,4.6rem)]">
            A Little Off the Path.
          </h1>
          <p className="mt-6 text-[clamp(1rem,1.15vw,1.3rem)] leading-relaxed text-[#f8f4ed]/92 max-md:mt-5">
            The page you’re looking for couldn’t be found.
          </p>
          <Link
            href="/"
            className="mt-10 inline-flex h-16 w-[265px] items-center justify-center gap-6 bg-[#c77a49] text-[11px] font-medium uppercase tracking-[.3em] text-[#fff8ee] transition-colors hover:bg-[#d58b58] focus-visible:outline-[#f8f4ed] max-md:mt-8 max-md:h-14 max-md:w-[230px]"
          >
            Return Home <span className="text-base leading-none">↗</span>
          </Link>
        </section>
      </main>
      <Footer data={data.footer} />
    </>
  );
}
