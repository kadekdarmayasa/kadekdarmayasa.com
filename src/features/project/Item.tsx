import ReactHtmlParser from 'react-html-parser'
import { v4 as uuidv4 } from 'uuid'

import boxDecoration from '@assets/images/box-decoration.svg'
import githubLogo from '@assets/images/github.svg'
import launchAppIcon from '@assets/images/launch-app.svg'

interface Technology {
  logo: string
  name: string
}

export interface ProjectItemProps {
  projectMockup: string
  projectName: string
  projectDescription: string
  projectTheme: string
  isLive: boolean
  projectSourceLink: string
  projectLiveLink?: string
  technologies: Technology[]
}

const orangeGradient =
  'linear-gradient(90deg, rgba(255, 152, 88, 0.50) 0.13%, rgba(255, 152, 88, 0.25) 52.08%, rgba(255, 152, 88, 0.50) 99.86%)'
const purpleGradient =
  'linear-gradient(90deg, rgba(43, 59, 229, 0.50) 0.13%, rgba(43, 59, 229, 0.25) 52.08%, rgba(43, 59, 229, 0.50) 99.86%)'

const ProjectItem = ({
  projectMockup,
  projectName,
  projectDescription,
  projectTheme,
  isLive,
  projectSourceLink,
  projectLiveLink,
  technologies,
}: ProjectItemProps) => {
  return (
    <article
      className='w-full text-black h-[auto] mb-10 rounded-xl relative'
      style={{
        backgroundImage:
          projectTheme === 'orange' ? orangeGradient : purpleGradient,
      }}>
      <div className='relative z-10 px-4 sm:px-10 py-8 sm:py-10 flex flex-col xl:flex-row gap-10 xl:items-center'>
        <div className='w-full xl:h-[560px] xl:w-[560px] border-8 border-white rounded-lg'>
          <img
            src={projectMockup}
            alt={`Project mockup of ${projectName}`}
            className='w-full h-full'
          />
        </div>
        <div className='flex-1'>
          <h3
            className={`text-2xl sm:text-3xl font-bold ${
              projectTheme === 'orange' ? 'text-[#FF9858]' : 'text-[#6202FF]'
            }`}>
            {projectName}
          </h3>
          <p className='max-w-[650px] text-lg  sm:text-xl font-medium text-black leading-9 my-5'>
            {ReactHtmlParser(projectDescription)}
          </p>
          <div className='flex gap-4'>
            {isLive ? (
              <a
                href={projectLiveLink}
                target='_blank'
                rel='noopener noreferrer'
                className='border-[1.8px] group rounded-lg border-black w-10 sm:w-12 h-10 sm:h-12 flex justify-center items-center'>
                <img
                  src={launchAppIcon}
                  alt={`Live demo of ${projectName} platform`}
                  className='group-hover:scale-90'
                />
              </a>
            ) : (
              ''
            )}
            <a
              href={projectSourceLink}
              target='_blank'
              rel='noopener noreferrer'
              className='border-[1.8px] group rounded-lg border-black w-10 sm:w-12 h-10 sm:h-12 flex justify-center items-center'>
              <img
                src={githubLogo}
                alt='Source code saved on github'
                className='group-hover:scale-90'
              />
            </a>
          </div>
          <div>
            <h4 className='text-xl sm:text-2xl font-bold mt-10'>
              Technologies Used
            </h4>
            <div className='flex flex-wrap gap-4 mt-5'>
              {technologies.map((technology) => {
                return (
                  <img
                    src={technology.logo}
                    alt={technology.name}
                    className='h-10 sm:h-12 w-10 sm:w-12'
                    key={uuidv4()}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className='flex justify-between absolute top-0 left-0 right-0 bottom-0 rounded-xl'
        style={{
          backgroundImage:
            projectTheme === 'orange' ? orangeGradient : purpleGradient,
        }}>
        <img src={boxDecoration} alt='' className='absolute top-0' />
        <img src={boxDecoration} alt='' className='absolute bottom-0 right-0' />
      </div>
    </article>
  )
}

export default ProjectItem
