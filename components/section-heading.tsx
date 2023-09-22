import React from 'react'

type SectionheadingProps = {
  children: React.ReactNode
}

export default function SectionHeading({
  children }: SectionheadingProps) {
  return (
    <h2 className='text-3xl capitalize mb-8 '>{children}</h2>
  )

}
