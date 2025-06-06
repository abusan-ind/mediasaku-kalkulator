import SEO from "@/components/SEO";

export default function Kontak() {
  return (
    <>
      <SEO title="Kontak Mediasaku Kalkulator" description="Hubungi kami untuk pertanyaan dan masukan." />
      <section className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Kontak Kami</h1>
        <p>Anda bisa menghubungi kami melalui email: <a href="mailto:abusantoso95@gmail.com" className="text-blue-600 underline">abusantoso95@gmail.com</a></p>
      </section>
    </>
  );
}
