import darmaProfile2 from '@assets/images/darma-profile-2.png'

import { Tilt } from 'react-tilt'
import { tilt } from '@config/tilt'

const Contact = () => {
  return (
    <section id='contact' className='px-8 text-black mt-20 scroll-mt-24'>
      <div className='sm:container md:px-20'>
        <div>
          <h3 className='text-xl sm:text-2xl md:text-3xl block font-bold text-slate-500'>
            🤝 Let's Get In Touch
          </h3>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mt-10'>
            Do you have any project ideas or just want to say hi?
          </h2>
        </div>

        <div className='flex mt-12 md:mt-24 gap-10 flex-col md:flex-row md:items-center'>
          <Tilt options={{ ...tilt, axis: false }}>
            <img
              src={darmaProfile2}
              alt='Darmayasa at his college'
              className='h-64 w-64'
              loading='lazy'
            />
          </Tilt>
          <div>
            <p className='text-xl leading-9 mb-8 font-medium'>Contact me via</p>
            <div>
              <a
                href='mailto:darmayasadiputra@gmail.com'
                className='flex items-center group mb-2'
                rel='noopener noreferrer'
                target='_blank'>
                <Tilt options={{ ...tilt, axis: false }}>
                  <div className='border-purple border-[1px] w-10 h-10 rounded-md flex items-center justify-center transition-all mr-4 group group-hover:bg-purple'>
                    <i className='bx bxl-gmail text-purple text-2xl group-hover:text-white' />
                  </div>
                </Tilt>
                <span className='text-md sm:text-xl leading-9 font-regular text-purple'>
                  darmayasadiputra@gmail.com
                </span>
              </a>
              <a
                href='https://www.instagram.com/kadekdarmayasaa'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center group'>
                <Tilt options={{ ...tilt, axis: false }}>
                  <div className='border-purple border-[1px] w-10 h-10 rounded-md flex items-center justify-center group-hover:bg-purple transition-all mr-4'>
                    <i className='bx bxl-instagram text-3xl group-hover:text-white text-purple'></i>
                  </div>
                </Tilt>
                <span className='text-md sm:text-xl leading-9 font-regular text-purple'>
                  @kadekdarmayasaa
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
