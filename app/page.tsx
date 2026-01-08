import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start pt-32 bg-[#f5f5f7] text-[#1d1d1f] px-6">
      <section className="text-center max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Hi, I’m Manirajan 👋
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          AI & Computer Vision Engineer — turning live video streams into analytics, insights & action.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition"
          >
            Get In Touch
          </Link>

          <Link
            href="/projects"
            className="px-6 py-3 rounded-full border border-gray-400 hover:border-black text-gray-700 hover:text-black transition"
          >
            View My Work
          </Link>


          {/* ✅ Use <a> for PDF files */}
          <a
            href="/Manirajan_Resume_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-gray-400 hover:border-black text-gray-700 hover:text-black transition"
          >
            View My Resume
          </a>

        </div>

        <div className="text-gray-400">↓ Scroll to explore</div>
      </section>
    </main>
  );
}
