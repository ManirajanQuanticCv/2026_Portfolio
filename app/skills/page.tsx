
  
import SkillsMarquee from "../components/SkillsMarquee";

export default function Skills() {
  return (
    <section className="pt-32">
      <h1 className="text-center text-4xl font-bold mb-10">
        My Skills
      </h1>

      {/* Moving skills animation */}
      <SkillsMarquee />
    </section>
  );
}
