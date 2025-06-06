import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-blue-600">Mediasaku Kalkulator</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-500 font-medium">Beranda</Link>
          <Link href="/kalkulator" className="hover:text-blue-500 font-medium">Kalkulator</Link>
          <Link href="/tentang" className="hover:text-blue-500 font-medium">Tentang</Link>
          <Link href="/kontak" className="hover:text-blue-500 font-medium">Kontak</Link>
        </div>
      </nav>
    </header>
  );
}
