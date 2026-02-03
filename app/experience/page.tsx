import ExperienceImageStack from "../components/ExperienceImageStack";
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <>
      {/* ================= QUANTIC EXPERIENCE ================= */}
      {/* <section className=" bg-white flex items-center"> */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-16 items-center">

            {/* Images – 70% */}
            <div className="md:col-span-7 md:order-1">
              <ExperienceImageStack
                images={[
                  { src: "/experience/Quantic_4.jpeg", alt: "Quantic site" },
                  { src: "/experience/Quantic_1.jpeg", alt: "Quantic monitoring" },
                  { src: "/experience/Quantic_2.jpeg", alt: "Quantic dashboard" },
                ]}
              />
            </div>

            {/* Text – 30% */}
            <div className="md:col-span-3 md:order-2">
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
      <section className="bg-black pt-24 pb-16">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-12 items-center">

            {/* Text – 30% */}
            <div className="md:col-span-4">
              <h1 className="text-5xl font-semibold tracking-tight text-white">
                Application Engineer
              </h1>

              <p className="mt-6 text-lg text-neutral-300">
                Mew Technology
              </p>

              <p className="mt-2 text-sm text-neutral-400">
                Bangalore · March 2023 – May 2024
              </p>
            </div>

            {/* Images – 70% */}
            <div className="md:col-span-6">
              <ExperienceImageStack
                images={[
                  { src: "/experience/mew_4.jpeg", alt: "Automation lab" },
                  { src: "/experience/mew_2.jpeg", alt: "PLC training" },
                  { src: "/experience/mew_5.jpeg", alt: "Student workshop" },
                ]}
              />
            </div>

          </div>
        </div>
      </section>


      {/* ================= Least Squares EXPERIENCE ================= */}
      {/* <section className=" bg-white flex items-center"> */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-16 items-center">

            {/* Images – 70% */}
            <div className="md:col-span-7 md:order-1">
              <ExperienceImageStack
                images={[
                  { src: "/experience/Quantic_4.jpeg", alt: "Quantic site" },
                  { src: "/experience/Quantic_1.jpeg", alt: "Quantic monitoring" },
                  { src: "/experience/Quantic_2.jpeg", alt: "Quantic dashboard" },
                ]}
              />
            </div>

            {/* Text – 30% */}
            <div className="md:col-span-3 md:order-2">
              <h1 className="text-5xl font-semibold tracking-tight text-black">
              Content Creator
              </h1>

              <p className="mt-6 text-lg text-neutral-700">
              Least Squares
              </p>

              <p className="mt-2 text-sm text-neutral-500">
              Community · 2023 – Present
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

    </>
  );
}
