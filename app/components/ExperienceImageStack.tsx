import Image from "next/image";

export default function ExperienceImageStack() {
  return (
    <div className="relative w-full h-[560px]">

      {/* Main Image (Top Left) */}
      <div className="absolute top-100 left-0 w-[420px] h-[320px] z-10">
        <Image
          src="/experience/Quantic_4.jpeg"
          alt="Team collaboration"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlapping Image (Bottom Left-ish) */}
      <div className="absolute top-50 left-50 w-[520px] h-[350px] z-30">
        <Image
          src="/experience/Quantic_1.jpeg"
          alt="Field work"
          fill
          className="object-cove"
        />
      </div>

      {/* Accent Image (Top Right inside image area) */}
      <div className="absolute top-0 left-0 w-[550px] h-[300px] z-20">
        <Image
          src="/experience/Quantic_2.jpeg"
          alt="Office moment"
          fill
          className="object-cover shadow-lg"
        />
      </div>

    </div>
  );
}
