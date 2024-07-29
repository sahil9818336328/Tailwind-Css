import React from 'react'
import aboutImg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className='bh-white py-10' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutImg} alt='code and coffee' className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            in dolor illum vel id adipisci? Enim dolor asperiores quaerat sit
            iste. Nam doloribus adipisci nihil, quas nisi, accusamus pariatur
            ducimus.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
