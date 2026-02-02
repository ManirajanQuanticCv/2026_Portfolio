import ExperienceImageStack from "../components/ExperienceImageStack";
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <>
      {/* ================= QUANTIC EXPERIENCE ================= */}
      <section className="min-h-screen bg-white flex items-center">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-16 items-center">

            {/* Images – 60% */}
            <div className="md:col-span-6">
              <ExperienceImageStack />
            </div>

            {/* Text – 40% */}
            <div className="md:col-span-4">
              <h1 className="text-5xl font-semibold tracking-tight text-black">
                Computer Vision Engineer
              </h1>

              <p className="mt-6 text-lg text-neutral-700">
                Quantictech Analysis Private Limited
              </p>

              <p className="mt-2 text-sm text-neutral-500">
                Chennai · 2024 – Present
              </p>

              <div className="mt-10 inline-flex items-center group">
                <Link href="/" className="text-sm font-medium text-black hover:opacity-70">
                  Explore Experience
                </Link>
                <span className="ml-3 transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MEW EXPERIENCE ================= */}
      <section className="min-h-screen bg-white flex items-center">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-16 items-center">

            {/* Text – 40% (LEFT) */}
            <div className="md:col-span-4 md:order-1">
              <h1 className="text-5xl font-semibold tracking-tight text-black">
                Application Engineer
              </h1>

              <p className="mt-6 text-lg text-neutral-700">
                Mew Technology
              </p>

              <p className="mt-2 text-sm text-neutral-500">
                Bangalore · March 2023 – May 2024
              </p>

              <div className="mt-10 inline-flex items-center group">
                <Link href="/" className="text-sm font-medium text-black hover:opacity-70">
                  Explore Experience
                </Link>
                <span className="ml-3 transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>

            {/* Images – 60% (RIGHT) */}
            <div className="md:col-span-6 md:order-2">
              <ExperienceImageStack />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
