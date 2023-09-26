"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView("About")

  return (
    <motion.section
      ref={ref}
      id="about"
      className='mb-28 max-w-[45rem] leading-8 sm:mb-40 text-center scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className='mb-3'>Graduated from Institut Teknologi & Bisnis Stikom Bali with{" "}
        <span className='font-medium'>Software Engineer</span>{" "}
        degree. I learned the basic programming with{" "}
        <span className='font-medium'>Borland C++</span>{" "}there and was taught{" "}
        <span className='font-medium'>Object Oriented Programming (OOP)</span>.
        If im being honest i did not enjoy it at all to the point that i feel
        like im not cut out to be a Programmer. However, when i learned{" "}
        <span className='font-medium'>Html & CSS</span> - creating layout,
        adding image, navbar and changing the color of an element when you hover
        at the element - i found that i really enjoyed it. Then i start learning{" "}
        <span className='font-medium'>Javascript</span> to add even more complexity
        to web development. After graduating from college i decided i wanted to become a{" "}
        <span className='font-medium'>Frontend Developer</span> and began improving
        my skill with{" "}
        <span className='font-medium'>React</span>. I Struggle a lot with React,
        but i managed to become good at it, although i wouldn't necessarily sat
        i'm a master at{" "}
        <span className='font-medium'>React</span> but i improveded significantly.
        Then i found{" "}
        <span className='font-medium'>NextJS</span> and in my opinion made my job as{" "}
        <span className='font-medium'>Frontend Developer</span> much easier,
        i found it to be better than vannila React.
      </p>
    </motion.section>
  )
}
