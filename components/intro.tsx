'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

export default function Intro() {
  return (
    <section className='mb-28 sm:mb-0 max-w-[50rem] text-center'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/Me.jpg"
              width={192}
              height={192}
              alt='Candra Portrait'
              quality={95}
              priority={true}
              className='h-24 w-24 rounded-full object-cover border-[0.35rem]
              border-white shadow-xl'
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              spring: 'spring',
              stiffness: 125,
              delay: 0.2,
              duration: 0.3,
            }}
            className='absolute top-0 -right-2 text-2xl'>🚀</motion.span>
        </div>
      </div>

      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl sm:text-3xl font-medium !leading-[1.5]'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <span className='font-bold'>
          Hello, I'm Candra.
        </span> I'm a {" "}
        <span className='font-bold'>
          Frontend Developer
        </span> with {" "}
        <span className='font-bold'>
          2 years
        </span> of experience. I mainly work in {" "}
        <span className='underline'>React (NextJs)</span>.
      </motion.h1>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center
        gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link href="#contact" className='group bg-gray-900 text-white px-7
          py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110
          hover:scale-110 hover:bg-gray-950 active:scale-105 transition
        '>
          Contact Me here
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a href='/CandraCV.pdf' download={true} className='group bg-white flex items-center px-7 py-3 gap-2
          rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105
          transition cursor-pointer border border-black/10
        '>
          Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>

        <a className='bg-white flex items-center p-4 text-gray-700 gap-2
          rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105
          transition cursor-pointer border border-black/10' href="https://www.linkedin.com/in/candra-nababan-285178140/"
          target='_blank'
        >
          <BsLinkedin />
        </a>

        <a className='bg-white flex items-center p-4 text-gray-700 gap-2
          rounded-full text-[1.30rem] active:scale-105 transition cursor-pointer border border-black/10
          focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950' href="https://github.com/candran054" target='_blank'>
          <FaGithubSquare />
        </a>
      </motion.div>

    </section>
  )
}
