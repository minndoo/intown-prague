import { client } from "@/lib/sanity/client";
import { landingPageQuery, siteSettingsQuery } from "@/lib/sanity/queries";
import { LandingPage } from "@/features/landingPage/LandingPage";
import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";

export default async function Home() {
  const [page, settings] = await Promise.all([
    client.fetch(landingPageQuery),
    client.fetch(siteSettingsQuery),
  ]);

  if (!page) return null;

  return (
    <>
      <Header />
      <main>
        <LandingPage data={page} />
      </main>
      <Footer settings={settings} />
    </>
  );
}
