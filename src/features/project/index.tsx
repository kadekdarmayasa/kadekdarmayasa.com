import { v4 as uuidv4 } from 'uuid'
import ProjectItem from './Item'
import { projects } from '@data/projects'

const HighlightedProject = () => {
  return (
    <section
      id='projects'
      className='px-8 text-black mt-16 sm:mt-20 scroll-mt-32 relative z-20 h-auto'>
      <div className='sm:container md:px-20'>
        <div>
          <h2 className='text-3xl sm:text-4xl font-bold'>
            ✨ Highlighted Projects
          </h2>
          <p className='text-lg sm:text-xl font-medium mt-6 max-w-[700px] leading-9'>
            I have work of various type of projects, ranging from a simple
            landing pages to complex digital agency platform.
          </p>
        </div>
        <div className='mt-10'>
          {projects.map((project) => (
            <ProjectItem key={uuidv4()} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HighlightedProject
