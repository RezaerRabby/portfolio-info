import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-5 bg-gray-800 text-white">
      <div >
        <h1 className="text-2xl font-bold">Rezae Rabby</h1>
      </div>

      <div>

    <nav className="flex gap-6 p-5 bg-gray-800 text-white">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/contact">Contact</Link>
    </nav>

      </div>
    </div>
  );
}