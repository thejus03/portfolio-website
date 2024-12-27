'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import { Timeline } from '@/components/ui/timeline'
import Image from 'next/image'
import { IconBrandDocker, IconBrandNextjs, IconBrandPython, IconBrandTailwind, IconBrandUbuntu,IconBrandCpp, IconBrandGithub } from "@tabler/icons-react";
import { BiLogoAws, BiLogoPostgresql } from 'react-icons/bi'
import { SiFastapi, SiTailscale, SiAnydesk } from 'react-icons/si'

function Work() {
    const data = [
        {
            title: "Invigilo AI",
            content: (
              <div>
                <p className="text-white text-lg font-bold">
                    March 2024 - June 2024
                </p>
                <p className='text-white italic text-lg mb-8 md:text-sm'>
                    Software Engineer Intern
                </p>
                <p className='flex flex-row'>
                  <IconBrandUbuntu className="h-6 w-6 mr-1 text-neutral-400 " />
                  <IconBrandPython className="h-6 w-6 mr-1 text-neutral-400 " />
                  <IconBrandDocker className="h-6 w-6 mr-1 text-neutral-400 " />
                  <IconBrandNextjs className="h-6 w-6 mr-1 text-neutral-400 " />
                  <IconBrandTailwind className="h-6 w-6 mr-1 text-neutral-400 " />
                  <IconBrandCpp className="h-6 w-6 mr-1 text-neutral-400 " />
                  <BiLogoAws className="h-7 w-7 mr-1 text-neutral-400 " />
                  <IconBrandGithub className="h-6 w-6 mr-1 text-neutral-400 " />
                  <SiFastapi className="h-6 w-6 mr-1 text-neutral-400 " />
                  <SiTailscale className="h-6 w-6 mr-1 text-neutral-400 " />
                  <BiLogoPostgresql className="h-6 w-6 mr-1 text-neutral-400 " />
                  <SiAnydesk className="h-6 w-6 mr-1 text-neutral-400" />

                </p>
                <p className='text-white text-xl'>
                    An incredible experience working with a team of talented individuals. 
                </p>
                <p className='text-white text-lg italic'>*Please drop an email for details* </p>
                
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <Image
                    src="/download5.webp"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src="/download6.webp"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src="/download7.webp"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
              </div>
            ),
          },
          {
            title: "WorldQuant BRAIN",
            content: (
              <div>
                <p className="text-white text-lg font-bold">
                    January 2024 - March 2024 
                </p>
                <p className='text-white italic text-lg mb-8 md:text-sm'>
                    Research Consultant
                </p>
                <li className='text-white text-lg mb-2'>Developed and improved on existing alphas to maximise the profits of US/China TOP500 stocks by backtesting against historical data.</li>
                <li className='text-white text-lg mb-2'>Gained deeper insights into algorithmic trading and financial modelling.</li>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/download8.webp"
                    alt="hero template"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
              </div>
            ),
          },
          {
            title: "National Service",
            content: (
              <div>
                <p className="text-white text-lg font-bold">
                    January 2022 - November- 2023
                </p>
                <p className='text-white italic text-lg mb-8 md:text-sm'>
                    Commando
                </p>
                <li className='text-white text-lg mb-2'>Completed the Basic Military Training and Commando Training.</li>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/download9.webp"
                    alt="hero template"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src="/download11.webp"
                    alt="hero template"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src="/download10.webp"
                    alt="hero template"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src="/download12.webp"
                    alt="hero template"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
                
              </div>
            ),
          },
    ] 
    return (
        <div className="flex min-h-screen grow font-mono flex-col bg-customGray">
                <Navbar />
                <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">
                    <h2 className="text-2xl font-mono md:text-5xl text-white dark:text-white max-w-4xl decoration-dashed underline">
                    Work Timeline
                    </h2>
                </div>
                <Timeline data={data} />

        </div>
    )
}

export default Work