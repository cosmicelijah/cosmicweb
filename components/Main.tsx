import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillMail, AiOutlineMail, AiTwotoneMail } from "react-icons/ai";
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-screen mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest py-2 text-gray-400">
            More text filler to test
          </p>
          <h1 className="py-4">
            Hi, I'm <span className="text-[#8a8af0]">Elijah</span>
          </h1>
          <h1 className="py-4">A developer of sorts</h1>
          <p className="pt-4 text-gray-400 max-w-[100%] m-auto">
            I do things like make websites and random programs. I also know
            (probably too much) java.
          </p>
          <p className="pb-4 text-gray-400 max-w-[100%] m-auto">
            This website is like a repository for my projects both personal and
            professional.
          </p>
          <p className="pt-12 pb-4 text-gray-400">
            Contact info (Discord is preferred)
          </p>
          <div className="flex items-center justify-between max-w-[350px] m-auto py-4">
            <div className="rounded-full p-5 shadow-lg shadow-black cursor-pointer scale-110 hover:scale-125 ease-in duration-300">
              <Link
                href="https://www.linkedin.com/in/cosmicelijah"
                target={"_blank"}
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full p-5 shadow-lg shadow-black cursor-pointer scale-110 hover:scale-125 ease-in duration-300">
              <Link href="https://github.com/cosmicelijah" target={"_blank"}>
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full p-5 shadow-lg shadow-black cursor-pointer scale-110 hover:scale-125 ease-in duration-300">
              <Link
                href="https://discordapp.com/users/CosmicElijah#1337"
                target={"_blank"}
              >
                <FaDiscord />
              </Link>
            </div>
            <div className="rounded-full p-5 shadow-lg shadow-black cursor-pointer scale-110 hover:scale-125 ease-in duration-300">
              <Link href="mailto:cosmicelijah@gmail.com" target={"_blank"}>
                <AiOutlineMail />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
