import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const ProjectCard = ({ url, img, github, title, text }) => {
  return (
    <article className='bg-white rounder-lg showdow-md hover:shadow-xl duration-300'>
      <img
        src={img}
        alt={title}
        className='w-full object-cover rounded-t-lg h64'
      />
      <div className='capitalize p-8'>
        <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
        <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
        <div className='mt-4 flex gap-x-4'>
          <a href={url}>
            <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
          <a href={url}>
            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
