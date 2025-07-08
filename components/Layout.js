import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />

      <main className="flex-grow w-full bg-[#0d1117] px-4 py-10 pt-24 pb-20 shadow-lg">{children}</main>

      <Footer />
    </div>
  );
}
