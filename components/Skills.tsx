import React from "react";
import SkillButtons from "./skillButtons";

const javaImg = <img src="/assets/"></img>
const cImg = require("../public/assets/skills/c.png");
// const javaImg = require("../public/assets/skills/java.png");

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="text-2xl font-thin uppercase tracking-widest">
          Skills
        </h2>
        <h1 className="py-4">What I can do</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <SkillButtons imageName="/assets/skills/java.png" skillName="Java" />
          <SkillButtons imageName="/assets/skills/c.png" skillName="C" />
          <SkillButtons imageName="/assets/skills/ts.png" skillName="TypeScript" />
          <SkillButtons imageName="/assets/skills/trueNas.png" skillName="TrueNAS" />
          <SkillButtons imageName="/assets/skills/java.png" skillName="Java" />
          <SkillButtons imageName="/assets/skills/c.png" skillName="C" />
          <SkillButtons imageName="/assets/skills/ts.png" skillName="TypeScript" />
          <SkillButtons imageName="/assets/skills/trueNas.png" skillName="TrueNAS" />

        </div>
      </div>
    </div>
  );
};

export default Skills;
