import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <nav className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">Mediasaku Kalkulator</Link>
          <div className="space-x-4">
            <Link href="/kalkulator" className="hover:underline">Kalkulator</Link>
            <Link href="/tentang" className="hover:underline">Tentang</Link>
            <Link href="/kontak" className="hover:underline">Kontak</Link>
          </div>
        </nav>
      </header>
      <main className="flex-1 max-w-4xl mx-auto p-4">{children}</main>
      <footer className="bg-gray-100 text-center text-sm py-4">
        <p>© {new Date().getFullYear()} Mediasaku. Semua hak dilindungi.</p>
        <p>
          <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privasi</Link> |{" "}
          <Link href="/terms" className="text-blue-600 hover:underline">Syarat</Link>
        </p>
      </footer>
    </div>
  );
}
