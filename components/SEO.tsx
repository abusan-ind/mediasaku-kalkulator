import Head from "next/head";

export default function SEO({ title, description }: { title: string; description: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Mediasaku" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mediasaku.web.id" />
      <meta property="og:site_name" content="Mediasaku Kalkulator" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Mediasaku Kalkulator",
            url: "https://mediasaku.web.id",
            description,
          }),
        }}
      />
    </Head>
  );
}
