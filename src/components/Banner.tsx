import linkedinIcon from '../assets/images/linkedin.svg'
import darmaProfile from '../assets/images/darma-profile.png'
import bannerDecoration from '../assets/images/banner-decoration.svg'

const Banner = () => {
  return (
    <section
      id='home'
      className='bg-light-gray pt-14 sm:pt-16 mt-20 px-8 lg:px-0 scroll-mt-20'>
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
              I have more than 1.5 years experience in building and maintaining
              web applications.{' '}
            </p>
            <div className='flex gap-4 sm:gap-8'>
              <a
                href='https://drive.google.com/file/d/1DiSVlg5RyRGtcs0AFn1-GLl3f59Ockam/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
                className='w-52 h-12 rounded-md font-medium flex items-center justify-center text-center bg-purple text-white hover:shadow-xl hover:shadow-purple/10 transition-all'>
                Download Resume
              </a>
              <a
                href='https://linkedin.com/in/kadekdarmayasa'
                target='_blank'
                rel='noopener noreferrer'
                className='border-purple border-[1px] w-12 h-12 rounded-md flex items-center justify-center hover:bg-purple/5 transition-all'>
                <img src={linkedinIcon} alt="KadekDarmayasa's linkedin" />
              </a>
            </div>
          </div>
          <div className='absolute w-full h-[420px] bg-light-gray/80 -top-5 z-10'></div>
          <img
            src={bannerDecoration}
            alt=''
            className='absolute -top-5 h-[420px]'
          />
        </div>
        <div className='flex-1 relative z-30'>
          <img
            src={darmaProfile}
            alt="KadekDarmayasa's profile photo"
            className='w-[495px] ms-auto'
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
