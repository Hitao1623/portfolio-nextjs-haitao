export default function Contact() {
  return (
    <div className="bg-[#0d1117] text-[#c9d1d9] flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-4xl font-semibold mb-4">Contact</h1>
      <p className="text-xl text-center mb-14">
        Have a project idea or interested in my services? <br />
        Contact me through these communication channels
      </p>

      <div className="bg-[#161b22] rounded-lg p-6 w-full max-w-md space-y-4 shadow-lg border border-[#c9d1d9]/20">
        <a
          href="https://github.com/Hitao1623"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-4 bg-[#0d1117] rounded-lg transition-transform transform hover:scale-105 border border-[#c9d1d9]/20">
          <img src="/images/github2.png" alt="GitHub" className="h-10 w-10 mr-4" />
          <div>
            <p className="font-semibold">GitHub</p>
            <p className="text-sm text-[#c9d1d9]">github.com/Hitao1623</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/haitao-wang-ht88/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-4 bg-[#0d1117] rounded-lg transition-transform transform hover:scale-105 border border-[#c9d1d9]/20">
          <img src="/images/linkedin4.png" alt="LinkedIn" className="h-10 w-10 mr-4" />
          <div>
            <p className="font-semibold">LinkedIn</p>
            <p className="text-sm text-[#c9d1d9]">linkedin.com/in/haitao-wang-ht88</p>
          </div>
        </a>

        <a
          href="mailto:youremail@example.com"
          className="flex items-center p-4 bg-[#0d1117] rounded-lg transition-transform transform hover:scale-105 border border-[#c9d1d9]/20">
          <img src="/images/email2.png" alt="Email" className="h-10 w-10 mr-4" />
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-sm text-[#c9d1d9]">taozi1623@gmail.com</p>
          </div>
        </a>
      </div>
    </div>
  );
}
