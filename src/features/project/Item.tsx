import { useState } from 'react'
import 'react-lazy-load-image-component/src/effects/blur.css'
import parse from 'html-react-parser'
import { v4 as uuidv4 } from 'uuid'
import { Blurhash } from 'react-blurhash'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Tilt } from 'react-tilt'
import { tilt } from '@config/tilt'
import BoxDecoration from 'components/BoxDecoration'

import githubLogo from '@assets/images/github.svg'
import launchAppIcon from '@assets/images/launch-app.svg'

interface Technology {
  logo: string
  name: string
}

export interface ProjectItemProps {
  id: string
  projectMockup: string
  projectName: string
  projectDescription: string
  projectTheme: string
  isLive: boolean
  projectSourceLink: string
  projectLiveLink?: string
  technologies: Technology[]
}

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
  const [isLoadEnd, setLoadEnd] = useState(false)
  const [isLoadBegin, setLoadBegin] = useState(false)

  const themeColor = projectTheme === 'orange' ? '#FF9858' : '#6202FF'
  const themeBackground =
    projectTheme === 'orange'
      ? 'linear-gradient(90deg, rgba(255, 152, 88, 0.50) 0.13%, rgba(255, 152, 88, 0.25) 52.08%, rgba(255, 152, 88, 0.50) 99.86%)'
      : 'linear-gradient(90deg, rgba(43, 59, 229, 0.50) 0.13%, rgba(43, 59, 229, 0.25) 52.08%, rgba(43, 59, 229, 0.50) 99.86%)'

  return (
    <Tilt
      options={{ ...tilt, max: 25 }}
      className='w-full text-black h-[auto] mb-10 rounded-xl relative overflow-hidden'
      style={{ backgroundImage: themeBackground }}>
      <div className='relative z-10 px-4 sm:px-10 py-8 sm:py-10 flex flex-col xl:flex-row gap-10 xl:items-center'>
        <div className='w-full mobile-xs:h-[240px] mobile-md:h-[350px] mobile-lg:h-[450px] sm:h-[500px] lg:h-[600px] xl:h-[560px] xl:w-[560px] border-8 border-white rounded-lg relative'>
          <LazyLoadImage
            src={projectMockup}
            alt={`Project mockup of ${projectName}`}
            className='absolute h-full w-full'
            onLoad={() => setLoadEnd(true)}
            beforeLoad={() => setLoadBegin(true)}
          />

          {!isLoadEnd && isLoadBegin && (
            <Blurhash
              hash='UBRp5,-;9FM__3?bM{~q00j]ITD%?cxuoe-q'
              className='absolute align-middle'
              height={'100%'}
              width={'100%'}
              punch={1}
            />
          )}
        </div>
        <div className='flex-1'>
          <h3
            className='text-2xl sm:text-3xl font-bold'
            style={{ color: themeColor }}>
            {projectName}
          </h3>
          <p className='max-w-[650px] text-lg  sm:text-xl font-medium text-black leading-9 my-5'>
            {parse(projectDescription)}
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
                loading='lazy'
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
                    loading='lazy'
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className='flex justify-between absolute top-0 left-0 right-0 bottom-0 rounded-xl'
        style={{ backgroundImage: themeBackground }}>
        <BoxDecoration
          color={themeColor}
          opacity={projectTheme === 'orange' ? 0.3 : 0.15}
          className='absolute top-0'
        />
        <BoxDecoration
          color={themeColor}
          opacity={projectTheme === 'orange' ? 0.3 : 0.15}
          className='absolute bottom-0 right-0'
        />
      </div>
    </Tilt>
  )
}

export default ProjectItem
