import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { LuBadge } from "react-icons/lu";

export default function AboutContent() {
  const [showCertificates, setShowCertificates] = useState(false);

  const handleCertificatesClick = () => {
    setShowCertificates(!showCertificates);
  };

  return (
    <div className="bg-[#0d1117] text-[#abafb3] min-h-screen flex flex-col items-center py-12 px-6">
      <div className="flex flex-col md:flex-row items-center md:items-center justify-between w-full max-w-6xl">
        {/* Left Side */}
        <div className="flex-1 max-w-xl">
          <p className="text-4xl mb-8 mt-8 text-[#d48806]">Hello!</p>
          <h1 className="text-7xl font-semibold mb-8">
            I'm{" "}
            <span className="text-[#d48806]">
              Haitao <br />
              Wang
            </span>
          </h1>
          <h2 className="text-5xl font-normal mb-5">A Full Stack Developer</h2>
          <p className="text-2xl leading-relaxed">
            I'm a full-stack designer and freelancer based in Montreal. I specialize in creating clean, functional, and user-friendly designs.
          </p>
        </div>

        {/* Right Side Buttons & Certificates */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="files/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border border-[#c9d1d9] px-6 py-3 w-60 rounded-lg text-[#c9d1d9] hover:scale-105 transition-transform">
            <FaDownload className="mr-2" />
            Resume
          </a>
          <button
            onClick={handleCertificatesClick}
            className="flex items-center justify-center border border-[#c9d1d9] px-6 py-3 w-60 rounded-lg text-[#c9d1d9] hover:scale-105 transition-transform">
            <LuBadge className="mr-2" />
            Certificates
          </button>

          {showCertificates && (
            <div className="mt-6 flex flex-row gap-4">
              <img src="files/aws.png" alt="Certificate 1" className="w-56 rounded-lg shadow-lg" />
              <img src="files/aws1.png" alt="Certificate 2" className="w-56 rounded-lg shadow-lg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
