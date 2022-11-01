import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p>Peepee</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="">
            <Image src="/win93.jpg" alt="/" width="128" height="128" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
