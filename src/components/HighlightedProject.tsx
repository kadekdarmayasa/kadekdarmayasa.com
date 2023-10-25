import restoUpMockup from '../assets/images/mockup-restoup.png'
import hivemindMockup from '../assets/images/mockup-hivemind.png'
import JavaScriptLogo from '../assets/images/javascript.svg'
import WebpackLogo from '../assets/images/webpack.svg'
import JasmineLogo from '../assets/images/jasmine.svg'
import CodeceptJsLogo from '../assets/images/codeceptjs.svg'
import NextJsLogo from '../assets/images/nextjs.svg'
import TailwindCSSLogo from '../assets/images/tailwindcss.svg'
import JestLogo from '../assets/images/jest.svg'
import ExpressJsLogo from '../assets/images/expressjs.svg'
import TypescriptLogo from '../assets/images/typescript.svg'
import PrismaLogo from '../assets/images/prisma.svg'

import ProjectItem, { ProjectItemProps } from './ProjectItem'

import { v4 as uuidv4 } from 'uuid'

const projects: ProjectItemProps[] = [
  {
    projectMockup: restoUpMockup,
    projectName: 'RestoUp',
    projectDescription:
      '<b>RestoUp</b> is a website that lists numerous types of restaurants. The user can search for a certain restaurant, add it to their favorites list, and leave a review.  The data came from the <a href="https://restaurant-api.dicoding.dev/#/"  target="_blank" rel="noopener noreferrer" class="font-bold underline text-[#FF9858]">Dicoding Restaurant API.</a>',
    projectTheme: 'orange',
    isLive: true,
    projectSourceLink: 'https://github.com/kadekdarmayasa/restaurant-catalogue',
    projectLiveLink: 'https://resto-up.netlify.app/',
    technologies: [
      {
        logo: JavaScriptLogo,
        name: 'JavaScript',
      },
      {
        logo: WebpackLogo,
        name: 'Webpack',
      },
      {
        logo: JasmineLogo,
        name: 'Jasmine',
      },
      {
        logo: CodeceptJsLogo,
        name: 'CodeceptJs',
      },
    ],
  },
  {
    projectMockup: hivemindMockup,
    projectName: 'Hivemind',
    projectDescription:
      '<b>Hivemind</b> is a <b>full-service digital agency</b> platform that aids companies in growing their online presence by offering services tailored to their needs.',
    projectTheme: 'purple',
    isLive: false,
    projectSourceLink: 'https://github.com/kadekdarmayasa/hivemind',
    technologies: [
      {
        logo: NextJsLogo,
        name: 'NextJs',
      },
      {
        logo: TailwindCSSLogo,
        name: 'TailwindCSS',
      },
      {
        logo: JestLogo,
        name: 'Jest',
      },
      {
        logo: ExpressJsLogo,
        name: 'ExpressJs',
      },
      {
        logo: TypescriptLogo,
        name: 'Typescript',
      },
      {
        logo: PrismaLogo,
        name: 'Prisma',
      },
    ],
  },
]

const HighlightedProject = () => {
  return (
    <section
      id='projects'
      className='px-8 text-black mt-16 sm:mt-20 scroll-mt-32'>
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
