import Image from "next/image";
import React, { FunctionComponent } from "react";

type Skill = {
  imageName: string;
  skillName: string;
};

const SkillButtons: FunctionComponent<Skill> = ({ imageName, skillName }) => {
  return (
    <div className="p-8 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-between place-items-center my-auto">
        <div className="m-auto">
          <Image src={imageName} alt={skillName} height="64" width="64" />
        </div>
        <h1 className="text-2xl">{skillName}</h1>
      </div>
    </div>
  );
};

export default SkillButtons;
