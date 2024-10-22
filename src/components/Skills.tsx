import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import { useEffect, useState, useRef } from "react";

interface SkillItemProps {
  name: string;
  icon: string;
}

const Skills = () => {
  const [navbarHeight, setNavbarHeight] = useState<number>(0);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.clientHeight);
    }
  }, []);

  return (
    <div
      id="skills"
      className="w-full h-screen text-white pt-32"
      style={{ marginTop: navbarHeight }}
    >
      <div className="max-w-[1000px] mx-auto p-4">
        <div className="bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-4xl font-bold mb-8">Skills</h2>
          <p className="mb-8">// These are the technologies I've worked with</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
            <SkillItem name="HTML" icon={HTML} />
            <SkillItem name="CSS" icon={CSS} />
            <SkillItem name="JavaScript" icon={JavaScript} />
            <SkillItem name="React" icon={ReactImg} />
            <SkillItem name="GitHub" icon={GitHub} />
            <SkillItem name="Tailwind" icon={Tailwind} />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ name, icon }: SkillItemProps) => (
  <div className="shadow-md hover:scale-110 duration-500">
    <img className="w-16 mx-auto" src={icon} alt={`${name} icon`} />
    <p className="my-4 text-lg">{name}</p>
  </div>
);

export default Skills;
