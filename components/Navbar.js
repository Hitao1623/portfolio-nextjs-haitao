import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-[#161b22] text-[#c9d1d9] flex justify-between items-center shadow-lg px-8 z-50">
      <div className="flex items-center">
        <img src="/images/logo.png" alt="Logo" className="h-13 w-auto ml-10" />
      </div>
      <ul className="flex space-x-10 mr-10 font-poppins">
        <li>
          <Link href="/about" legacyBehavior>
            <a className="text-2xl font-mediumbold hover:text-orange-400">ABOUT</a>
          </Link>
        </li>
        <li>
          <Link href="/skills" legacyBehavior>
            <a className="text-2xl font-mediumbold hover:text-orange-400">SKILLS</a>
          </Link>
        </li>
        <li>
          <Link href="/projects" legacyBehavior>
            <a className="text-2xl font-mediumbold hover:text-orange-400">PPOJECTS</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior>
            <a className="text-2xl font-mediumbold hover:text-orange-400">CONTACT</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
