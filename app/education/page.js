'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import { Timeline } from '@/components/ui/timeline'
import Image from 'next/image'

function Education() {
    const data = [
        {
            title: "NUS",
            content: (
              <div>
                <p className="text-white text-lg font-bold">
                    August 2024 - Present
                </p>
                <p className='text-white italic text-lg mb-8 md:text-sm'>
                    Bachelor of Computing in Computer Science
                </p>
                <p className='text-white text-xl'>
                    Hackathons
                </p>
                <li className='text-white text-xl'>HackOMania'24</li>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <Image
                    src="/us.webp"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src="/download.webp"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src="/download2.webp"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src="/download3.webp"
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
            title: "ASRJC",
            content: (
              <div>
                <p className="text-white text-lg font-bold">
                    January 2020 - December 2021 
                </p>
                <p className='text-white italic text-lg mb-8 md:text-sm'>
                    Physics, Chemistry, Mathematics, Economics
                </p>
                <p className='text-white mb-2 font-bold text-xl'>
                    A Level Score - AAA/A
                </p>
                <p className='text-white text-xl italic'>
                    Awards & Achievements
                </p>
                <li className='text-white text-xl mb-2'>SINDA Excellence Award - Highest honour awarded to Indian students who perform exceptionally well in academics</li>
                <li className='text-white text-xl mb-2'>Consistently in the top 10 percentile throughout the 2 years.</li>
                <li className='text-white text-xl mb-2 '>Top in cohort for Economics in Prelims.</li>
                <li className='text-white text-xl mb-2'>CCC-WEST COAST COMMUNITY AWARD - Awarded for performing well in academics</li>
                <p className='text-white text-xl italic'>Co Curricular Activites</p>    
                <li className='text-white text-xl mb-2'>Hockey</li>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/download4.webp"
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
            title: "Clementi Town Sec School",
            content: (
              <div>
                <p className="text-white text-lg font-bold">
                    January 2016 - December 2019
                </p>
                <p className='text-white italic text-lg mb-8 md:text-sm'>
                    Physics, Chemistry, Geography, Social Studies, E-Maths, Advanced Maths, Computing
                </p> 
                <p className='text-white text-xl italic'>Co Curricular Activites</p>
                <li className='text-white text-xl mb-2'>Badminton - Vice Captain</li>
                <li className='text-white text-xl mb-2'>Sports Leader</li>
              </div>
            ),
          },
    ] 
    return (
        <div className="flex min-h-screen grow font-mono flex-col bg-customGray">
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-2xl font-mono md:text-5xl text-white dark:text-white max-w-4xl decoration-dashed underline">
                Education Timeline
                </h2>
            </div>
            <Timeline data={data} />

        </div>
    )
}

export default Education