import SEO from "@/components/SEO";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SEO
        title="Mediasaku Kalkulator - Kalkulator Praktis untuk Sehari-hari dan Pendidikan"
        description="Gunakan berbagai kalkulator praktis di Mediasaku Kalkulator, mulai dari BMI, diskon, konversi suhu, hingga kalkulator bunga pinjaman."
      />
      <section className="max-w-2xl mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Selamat datang di Mediasaku Kalkulator</h1>
        <p className="mb-6">
          Website ini menyediakan berbagai kalkulator yang berguna dalam kehidupan sehari-hari dan pendidikan.
        </p>
        <Link
          href="/kalkulator"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Mulai Menghitung
        </Link>
      </section>
    </>
  );
}
