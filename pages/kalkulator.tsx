import React, { useState } from "react";
import SEO from "@/components/SEO";

export default function Kalkulator() {
  const [tab, setTab] = useState("bmi");

  // State & logic kalkulator BMI
  const [bmiWeight, setBmiWeight] = useState("");
  const [bmiHeight, setBmiHeight] = useState("");
  const bmiResult = (() => {
    const w = parseFloat(bmiWeight);
    const h = parseFloat(bmiHeight) / 100;
    if (!w || !h) return null;
    return (w / (h * h)).toFixed(2);
  })();

  // State & logic kalkulator Diskon
  const [diskonHarga, setDiskonHarga] = useState("");
  const [diskonPersen, setDiskonPersen] = useState("");
  const diskonResult = (() => {
    const harga = parseFloat(diskonHarga);
    const persen = parseFloat(diskonPersen);
    if (!harga || !persen) return null;
    return (harga * (1 - persen / 100)).toFixed(2);
  })();

  // State & logic luas persegi
  const [luasSisi, setLuasSisi] = useState("");
  const luasResult = (() => {
    const sisi = parseFloat(luasSisi);
    if (!sisi) return null;
    return (sisi * sisi).toFixed(2);
  })();

  // Konversi suhu
  const [suhuC, setSuhuC] = useState("");
  const suhuResult = (() => {
    const c = parseFloat(suhuC);
    if (!c && c !== 0) return null;
    return {
      fahrenheit: (c * 9) / 5 + 32,
      kelvin: c + 273.15,
    };
  })();

  // Kalkulator umur
  const [birthDate, setBirthDate] = useState("");
  const umurResult = (() => {
    if (!birthDate) return null;
    const birth = new Date(birthDate);
    const now = new Date();
    if (birth > now) return null;
    let age = now.getFullYear() - birth.getFullYear();
    const m = now.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;
    return age;
  })();

  // Kalkulator bunga pinjaman
  const [pinjamanJumlah, setPinjamanJumlah] = useState("");
  const [pinjamanBunga, setPinjamanBunga] = useState("");
  const [pinjamanPeriode, setPinjamanPeriode] = useState("");
  const pinjamanResult = (() => {
    const jumlah = parseFloat(pinjamanJumlah);
    const bunga = parseFloat(pinjamanBunga);
    const periode = parseInt(pinjamanPeriode);
    if (!jumlah || !bunga || !periode) return null;
    const bungaTotal = (jumlah * bunga * periode) / 100;
    const totalBayar = jumlah + bungaTotal;
    return { bungaTotal: bungaTotal.toFixed(2), totalBayar: totalBayar.toFixed(2) };
  })();

  return (
    <>
      <SEO title="Kalkulator Mediasaku" description="Kalkulator praktis untuk berbagai kebutuhan sehari-hari dan pendidikan." />
      <section className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Kalkulator</h1>
        <nav className="flex space-x-2 mb-4">
          {[
            { id: "bmi", label: "BMI" },
            { id: "diskon", label: "Diskon" },
            { id: "luas", label: "Luas Persegi" },
            { id: "suhu", label: "Konversi Suhu" },
            { id: "umur", label: "Kalkulator Umur" },
            { id: "bunga", label: "Bunga Pinjaman" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`px-4 py-2 rounded ${
                tab === id ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {tab === "bmi" && (
          <div>
            <label className="block mb-2">Berat badan (kg):</label>
            <input
              type="number"
              value={bmiWeight}
              onChange={(e) => setBmiWeight(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            <label className="block mb-2">Tinggi badan (cm):</label>
            <input
              type="number"
              value={bmiHeight}
              onChange={(e) => setBmiHeight(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            <p>Hasil BMI: {bmiResult ?? "-"}</p>
          </div>
        )}

        {tab === "diskon" && (
          <div>
            <label className="block mb-2">Harga awal (Rp):</label>
            <input
              type="number"
              value={diskonHarga}
              onChange={(e) => setDiskonHarga(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            <label className="block mb-2">Persen diskon (%):</label>
            <input
              type="number"
              value={diskonPersen}
              onChange={(e) => setDiskonPersen(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            <p>Harga setelah diskon: {diskonResult ?? "-"}</p>
          </div>
        )}

        {tab === "luas" && (
          <div>
            <label className="block mb-2">Panjang sisi (cm):</label>
            <input
              type="number"
              value={luasSisi}
              onChange={(e) => setLuasSisi(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            <p>Luas persegi: {luasResult ?? "-"}</p>
          </div>
        )}

        {tab === "suhu" && (
          <div>
            <label className="block mb-2">Suhu Celsius (°C):</label>
            <input
              type="number"
              value={suhuC}
              onChange={(e) => setSuhuC(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            {suhuResult ? (
              <p>
                Fahrenheit: {suhuResult.fahrenheit.toFixed(2)} °F<br />
                Kelvin: {suhuResult.kelvin.toFixed(2)} K
              </p>
            ) : (
              <p>-</p>
            )}
          </div>
        )}

        {tab === "umur" && (
          <div>
            <label className="block mb-2">Tanggal lahir:</label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            <p>Umur: {umurResult ?? "-"}</p>
          </div>
        )}

        {tab === "bunga" && (
          <div>
            <label className="block mb-2">Jumlah pinjaman (Rp):</label>
            <input
              type="number"
              value={pinjamanJumlah}
              onChange={(e) => setPinjamanJumlah(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            <label className="block mb-2">Bunga per tahun (%):</label>
            <input
              type="number"
              value={pinjamanBunga}
              onChange={(e) => setPinjamanBunga(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            <label className="block mb-2">Periode (tahun):</label>
            <input
              type="number"
              value={pinjamanPeriode}
              onChange={(e) => setPinjamanPeriode(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            {pinjamanResult ? (
              <>
                <p>Bunga total: Rp {pinjamanResult.bungaTotal}</p>
                <p>Total bayar: Rp {pinjamanResult.totalBayar}</p>
              </>
            ) : (
              <p>-</p>
            )}
          </div>
        )}
      </section>
    </>
  );
}
