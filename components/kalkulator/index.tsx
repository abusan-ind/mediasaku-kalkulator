import Layout from "@/components/Layout";
import Link from "next/link";

export default function KalkulatorPage() {
  return (
    <Layout>
      <h2 className="text-3xl font-semibold mb-6 text-center">Kalkulator</h2>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {["BMI", "Diskon", "Luas Persegi", "Konversi Suhu", "Kalkulator Umur", "Bunga Pinjaman"].map((item) => (
          <Link
            key={item}
            href={`/kalkulator/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Contoh konten kalkulator umur */}
      <div className="bg-white rounded-xl shadow p-6 max-w-md mx-auto">
        <label htmlFor="birthDate" className="block mb-2 font-medium">
          Tanggal lahir:
        </label>
        <input
          id="birthDate"
          type="date"
          className="w-full border rounded p-2 mb-4"
        />
        <p>Umur: <span className="font-bold">29</span></p>
      </div>
    </Layout>
  );
}
