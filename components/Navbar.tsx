import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  // state be like: false
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl shadow-[#000000] z-[100] bg-[#060050]">
      {/* Desktop interface */}
      <div className=" flex justify-between items-center w-full h-full px-8 shadow-lg shadow-black">
        <div className="mr-10 rounded-full shadow-xl shadow-[#000000] hover:scale-[110%] ease-in duration-300">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width="60" height="60" />
          </Link>
        </div>
        {/* space */}

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="mr-10 text-sm uppercase hover:underline">Home</li>
            </Link>
            <Link href="/">
              <li className="mr-10 text-sm uppercase hover:underline">About</li>
            </Link>
            <Link href="/">
              <li className="mr-10 text-sm uppercase hover:underline">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="mr-10 text-sm uppercase hover:underline">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div
          onClick={handleNav}
          className="md:hidden mr-5 hover:scale-125 ease-in duration-300"
        >
          <AiOutlineMenu size={30} />
        </div>
      </div>

      {/* Mobile interface */}
      <div
        className={
          nav ? "md:hidden left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#060050] p-10 ease-in duration-500 shadow-lg shadow-[#000000] overflow-auto"
              : "fixed left-[-100%] w-0 top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <div className="rounded-full shadow-xl shadow-[#000000] hover:scale-[115%] ease-in duration-300">
                <Image src="/logo.png" alt="/" width="60" height="60" />
              </div>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-[#000000] p-3 cursor-pointer hover:scale-125 ease-in duration-300"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-[#bbd6fd] items-center my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                This is a really long string to test the limits of text wrapping
                and shit on smaller screens like an iPhone or Android device.
                Similar to the ones that nearly everyone on the planet has. Oh
                do they really? I had no clue...
              </p>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Projects</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-white">
                  Holo is best girl!!!
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-black cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-black cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-black cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaDiscord />
                  </div>
                  <div className="rounded-full shadow-lg shadow-black cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/* Talking space?
  B: sure...
  E: So, hows life?
  B: Alright...
  E: Please tell me there's a plugin to color div pairs differently because I can't make heads or tails of it lol
  B: jzmstrjp.color-the-tag-name
  B: https://marketplace.visualstudio.com/items?itemName=jzmstrjp.color-the-tag-name
  E: Doesn't look like it makes the div's different colors
  E: I want something that changes each div pair to a different color depending on indentation so that i can easily
    tell which div is what
  B: Oh, I see
  B: I don't think there's a plugin for that
  E: :( 🗿
  B: AI thinks you can do that with a custom theme. It also thinks you're sad.
  E: What AI is this?
  B: Github Copilot
  E: Don't you have to pay for that now?
  B: Yeah, but I forgot to give my credit card details and they never bothered checking
  E: 🗿
  B: I'm not sure if it's a good thing or a bad thing that I'm not sure if I'm sad or not
  E: Like, teh ai doesn't know, or *you* don't know?
  B: The AI doesn't know
  E: Ok good
  E: I'm not sad
  B: I'm not sad either
  E: I'm just bored
  B: I'm just bored too
  E: I'm bored of being bored
  B: I'm bored of being bored of being bored
  E: I'm bored of being bored of being bored of being bored
  B: I'm bored of being bored of being bored of being bored of being bored
  E: I'm bored of being bored of being bored of being bored of being bored of being bored
  B: I'm bored of being bored of being bored of being bored of being bored of being bored of being bored
  E: I'm bored of being bored of being bored of being bored of being bored of being bored of being bored of being bored

  E: Damn, really took the words right out of my mouth
  B: I'm bored of being bored of being bored of being bored of being bored of being bored of being bored of being bored of being bored
  B: It's really bored...
  E: What makes you think that?
  B: I'm bored of being bored of being bored of being bored of being bored of being bored of being bored of being bored of being bored of being bored
  B: Making a light bulb is a really boring process
  E: I have returned with pretzels
  B: I want some pretzels

  
  












*/
