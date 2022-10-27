import Image from "next/image";
import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest py-2 text-gray-400">
            More text filler to test
          </p>
          <h1 className="py-4">
            Hi, I'm <span className="text-[#8a8af0]">CosmicElijah</span>.
          </h1>
          <h1 className="py-4">I like cock.</h1>
          <p className="py-4 text-gray-400 max-w-[70%] m-auto">
            I'm a cock developer that develops cock. I also like to do things
            like play with cock, lick cock, and suck cock. If it has to do with
            cock, I like it (with some exceptions, obviously).
          </p>
          <p className="pt-12 text-gray-400">Some of my favorite hentais (notice how none have cock 🤔)</p>
          <div className="flex items-center justify-between max-w-[600px] m-auto py-4">
                <div>
                    <Image src="/asuka.png" alt="asuka" width="80" height="80" />
                </div>
                <div>
                    <Image src="/chise.png" alt="chise" width="80" height="80" />
                </div>
                <div>
                    <Image src="/coconut.png" alt="coconut" width="80" height="80" />
                </div>
                <div>
                    <Image src="/holo.png" alt="holo" width="80" height="80" />
                </div>
                <div>
                    <Image src="/zelda.png" alt="zelda" width="80" height="80" />
                </div>
                <div>
                    <Image src="/jenna.png" alt="jenna" width="80" height="80" />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
