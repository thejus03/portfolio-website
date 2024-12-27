'use client'
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Typewriter } from "nextjs-simple-typewriter";
import { FloatingDock } from "@/components/ui/floating-dock";
import Tilt from 'react-parallax-tilt';

import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconBrandTelegram,
} from "@tabler/icons-react"; 


export default function Home() {
  const words = ["Hello, I am Thejus", "CS student @ NUS", "Open for work"];
  const links = [
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full  w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/thejus03/",
      target:"_blank",
      rel:"noopener noreferrer"
    },
 
    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/thejus03",
    },
    {
      title: "Mail",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:thejusunni@hotmail.com",
    },
    {
      title: "Telegram",
      icon: (
        <IconBrandTelegram className="h-full  w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://t.me/thejus03",
    },
    
  ];

  return (
    <div className="flex h-[100dvh] font-mono flex-col bg-customGray">
      <Navbar />
     <div className="w-full flex h-[85dvh] justify-center">
       <div className="w-full max-w-[82vw] min-w-[70vw] h-full">
            <div className="w-full flex justify-center">
              <Tilt>
                <Image  className=" mx-auto border border-white border-4 rounded-full object-cover mt-20 lg:mt-28 w-60 md:w-72 lg:w-80 " src="/pic1.webp" alt="pic" width={300} height={300} /> 
              </Tilt>
            </div>
            
           <div className="text-white text-3xl font-mono font-extrabold flex justify-center mt-20 whitespace-nowrap">
              <Typewriter  words={words} loop={0} cursor={true} cursorStyle={"_"} cursorBlinking={true} typeSpeed={60} deleteSpeed={60}/>
            </div> 
       </div>
     </div>
     <div className="flex justify-center w-full absolute bottom-4">
              <FloatingDock 
                desktopClassName="bg-white bg-opacity-15"
                items={links}
              />

      </div>
    </div>
  );
}
