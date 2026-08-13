import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { Tilt } from 'react-tilt'
import { tilt } from '@config/tilt'

import darmaProfile from '@assets/images/photo-profile.png'
import bannerDecoration from '@assets/images/banner-decoration.svg'

const skills = [
  'Laravel',
  'PHP',
  'React',
  'Next.js',
  'TypeScript',
  'MySQL',
  'Docker',
]

const focusAreas = [
  'Web Development',
  'Backend Development',
  'System Architecture',
]

const Banner = () => {
  return (
    <section
      id='home'
      className='bg-light-gray pt-14 sm:pt-16 mt-20 px-8 lg:px-0 scroll-mt-20 h-auto'>
      <div className='md:container md:px-20 flex justify-between items-center flex-col lg:flex-row'>
        <div className='flex-1 text-black relative'>
          <div className='relative z-20'>
            <small className='text-2xl sm:text-3xl block mb-4 font-normal'>
              Hi👋, I'm <b className='font-bold'>Darmayasa</b>
            </small>
            <h1 className='text-4xl sm:text-5xl font-bold mb-10'>
              full-stack <span className='text-purple'>web developer</span>
            </h1>
            <p className='text-lg sm:text-xl leading-9 mb-8 font-medium max-w-[640px]'>
              Software Engineer with hands-on experience building and
              maintaining business applications for the travel and ticketing
              industry.
            </p>
            <div className='flex gap-4 sm:gap-8'>
              <Tilt options={{ ...tilt, axis: false }}>
                <a
                  href='https://drive.google.com/file/d/1qc8iqdHqQiMPZaq3g-Xf44XRJIPoiVEw/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-52 h-12 rounded-md font-medium flex items-center justify-center gap-2 text-center bg-purple text-white hover:shadow-xl hover:shadow-purple/10 transition-all'>
                  <i className='bx bx-download text-xl' />
                  Download CV
                </a>
              </Tilt>
              <Tilt options={{ ...tilt, axis: false }}>
                <a
                  href='https://linkedin.com/in/kadekdarmayasa'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border-purple border-[1px] w-12 h-12 rounded-md flex items-center justify-center group transition-all hover:bg-purple'>
                  <i className='bx bxl-linkedin text-purple text-3xl group-hover:text-white' />
                </a>
              </Tilt>
            </div>
            <div className='mt-12 max-w-[640px]'>
              <h3 className='text-sm uppercase tracking-widest font-semibold mb-3'>
                Skills
              </h3>
              <div className='flex flex-wrap gap-2 mb-6'>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 rounded-full text-purple bg-purple/10 text-sm font-semibold'>
                    {skill}
                  </span>
                ))}
              </div>
              <h3 className='text-sm uppercase tracking-widest font-semibold mb-3'>
                Focus Areas
              </h3>
              <div className='flex flex-wrap gap-2'>
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className='px-3 py-1 rounded-full text-purple bg-purple/10 text-sm font-semibold'>
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className='absolute w-full h-[420px] bg-light-gray/80 -top-5 z-10'></div>
          <img src={bannerDecoration} className='absolute -top-5 h-[420px]' />
        </div>
        <div className='flex-1 relative z-30 flex items-end justify-end'>
          <div className='relative ms-auto w-[300px] h-[500px] mobile-md:w-[400px] mobile-md:h-[600px] lg:h-[700px] lg:w-[500px]'>
            <LazyLoadImage
              src={darmaProfile}
              placeholderSrc={darmaProfile}
              alt="KadekDarmayasa's profile photo"
              className='w-full absolute align-bottom bottom-0'
              effect='blur'
              visibleByDefault={!!darmaProfile}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
