'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import {
    IconBrandNextjs,
    IconBrandTailwind,
    IconBrandMongodb,
    IconBrandAws,
    IconBrandUbuntu,
    IconBrandOpenai,
    IconBrandPython,
    IconBrandJavascript,
    IconBrandDjango,
    IconBrandCss3,
  } from "@tabler/icons-react";
import { SiFlask,SiKeras,SiNumpy, SiTensorflow } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import Image from 'next/image';
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

function Project() {
    const Skeleton = () => (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
      );
    const items = [
      {
      title: <h1 className='text-xl'>ChessAI</h1>,
      description: <div className='text-lg'>
      <li>Created a visually appealing chess engine using pygame</li>
      <li>Created an AI that thinks 5 moves ahead at a reasonable time (usually 5 seconds)</li>
      <li>Implemented minimax algorithm optimised with alpha beta pruning</li>
      <li>Implemented zobrist hashing to cache board state for accurate lookups</li>
      <li>Other optimisations: Move heuristics, positional advantage, etc.</li>

      </div>,
      header: <Image className="rounded-xl border border-gray w-full mx-auto" src="/download15.webp" alt="pic" width={300} height={300} />,
      className: "row-span-2  col-span-1 hover:-translate-y-2",
      icon: [<IconBrandPython key="python" className="h-6 w-6 mr-2 text-neutral-500 mt-3" />,
      ],
      link:"https://github.com/thejus03/ChessAI"
      },
      {
        title: <h1 className='text-xl'>TrackTern</h1>,
        description: <div className='text-lg'>
        <li>NextJS app to streamline tracking and management of internship application, enhancing the functionality beyond traditional Excel Sheets</li>
        <li>Implemented analytical features to provide users with clear insights into their
        application progress.</li>
        <li>Serving more than 200 active users</li>
        </div>,
        header: <Image className="rounded-xl border border-gray w-full mx-auto" src="/download13.webp" alt="pic" width={300} height={300} />,
        className: "row-span-2  col-span-1 hover:-translate-y-2",
        icon: [<IconBrandNextjs key="nextjs" className="h-6 w-6 mr-1 text-neutral-500 mt-3" />, <IconBrandTailwind key="tailwind" className="h-6 w-6 mr-1 text-neutral-500 mt-3" />, <IconBrandMongodb key="Mongodb" className="h-6 w-6 mr-1 text-neutral-500 mt-3" />, 
        <IconBrandAws key="aws" className="h-6 w-6 mr-1 text-neutral-500 mt-3" />, <IconBrandUbuntu key="ubuntu" className="h-6 w-6 text-neutral-500 mt-3" />,
        ],
        link:"https://tracktern.com"
      },
      {
        title: <h1 className='text-xl'>HackOMania</h1>,
        description: <div className='text-lg'>
        <li>Within 24 hours, with a team of 4, built a Single Source of Truth web page for Government Schemes, Grants and Loans to help SMEs expand and grow their businesses</li>
        <li>Implemented several key features like Universal Search, Services page and a personalised chatbot</li>
        <li>Click me for more details</li>
         </div>,
        header: <Image className='rounded-xl border border-gray w-full  mx-auto' src="/hacko2.webp" alt="pic" width={300} height={300} />,
        icon: [<IconBrandNextjs key="c" className="h-6 w-6 mr-1 text-neutral-500 mt-3" />, <IconBrandTailwind key="d" className="h-6 w-6 mr-1 text-neutral-500 mt-3" />, <SiFlask key="e" className="h-6 w-6 mr-1 text-neutral-500 mt-3" />,<BiLogoPostgresql key="f" className="h-6 w-6 mr-1 text-neutral-500 mt-3" />, <IconBrandOpenai key="g" className="h-6 w-6 mr-1 text-neutral-500 mt-3" />],
        className: "row-span-2 col-span-1  hover:-translate-y-2",
        link:"https://github.com/thejus03/onepercent",
      },
      {
        title: <h1 className='text-xl'>Text Emotion Recognition</h1>,
        description: <div className='text-lg'>
        <li>Developed a neural network model to detect six emotions in text.</li>
        <li>Enhanced the model with BiLSTM layers for improved contextual understanding and accuracy.</li>
        <li>Integrated a pre-trained Word2vec model trained on 100 billion words </li>
        <li>Processed a training dataset of 30,000 tweets and sentences</li>
        <li>Achieved 88.3% accuracy on test data.</li>
         </div>,
        header: <Image className="rounded-xl border border-gray w-full mx-auto" src="/download14.webp" alt="pic" width={300} height={300} />,
        icon:[<IconBrandPython key="python" className="h-6 w-6 mr-2 text-neutral-500 mt-3" />, <SiKeras key="keras" className='h-6 w-6 mr-2 text-neutral-500 mt-3'></SiKeras>, <SiNumpy key="numpy" className='h-6 w-6 mr-2 text-neutral-500 mt-3'></SiNumpy>, <SiTensorflow key="tensorflow" className='h-6 w-6 mr-2 text-neutral-500 mt-3'></SiTensorflow>],
        className: "row-span-2 hover:-translate-y-2",
        link:"https://github.com/thejus03/Text-Emotion-Neural",
      },
      {
        title: <h1 className='text-xl'>Uniplanner</h1>,
        description: <div className='text-lg'>
        <li>Designed a webapp to assist students plan university life</li>
        <li>Wrote more than 3000 lines of complex vanilla javascript, html and css to create a single page app</li>
        <li>Submitted for CS50W project</li>
         </div>,
        icon: [<IconBrandJavascript key="sign" className="h-6 w-6 mr-1 text-neutral-500" />,<IconBrandDjango key="sign2" className="h-6 w-6 mr-1 text-neutral-500" />, <IconBrandPython key="sign3" className="h-6 w-6 mr-1 text-neutral-500" />,<IconBrandCss3 key="sign4" className="h-6 w-6 mr-1 text-neutral-500" />, ],
        link:"https://github.com/thejus03/uniplanner",
        className: "row-span-1 hover:-translate-y-2",
      },
      {
        title: <h1 className='text-xl'>FoodCritic</h1>,
        description: <div className='text-lg'>
        <li>Developed a flask app for logging in, adding restaurants reviews and searching for restaurant info</li>
         <li>Integrated ChatGPT API into search function for recommendations</li>
         <li>Submitted for CS50 project</li>
         </div>,
        icon: [<SiFlask key="sign" className="h-6 w-6 mr-1 text-neutral-500" />, <IconBrandPython key="sign2" className="h-6 w-6 mr-1 text-neutral-500" />, <IconBrandJavascript key="sign3" className="h-6 w-6 mr-1 text-neutral-500" />, <IconBrandCss3 key="sign4" className="h-6 w-6 mr-1 text-neutral-500" />, ],
        link:"https://github.com/thejus03/foodcritic",
        className: "row-span-1 hover:-translate-y-2",
      },
      ];
  return (
    <div className="flex min-h-screen grow font-mono flex-col bg-customGray">
        <Navbar />
        <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10  w-full">
        <TextHoverEffect text="stuff i built" />
            <BentoGrid className="max-w-6xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={item.className}
                    link = {item.link}
                    />
                ))}
            </BentoGrid>
        </div>
        
    </div>
  )
}

export default Project