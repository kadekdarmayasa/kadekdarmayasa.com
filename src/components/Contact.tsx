import myPictureX2 from '../assets/images/darma-profile-2.png'
import emailLogo from '../assets/images/logo-email.svg'
import instagramLogo from '../assets/images/logo-instagram.svg'

const Contact = () => {
  return (
    <section className='px-8 text-black mt-20'>
      <div className='sm:container px-20'>
        <div>
          <h3 className='text-3xl block font-bold'>🤝 Let's Get In Touch</h3>
          <h2 className='text-5xl font-bold mt-10'>
            Do you have any project ideas or just want to say hi?
          </h2>
        </div>

        <div className='flex mt-24 gap-10 items-center'>
          <img
            src={myPictureX2}
            alt='Darmayasa at his college'
            className='h-64'
          />
          <div>
            <p className='text-xl leading-9 mb-8 font-medium'>Contact me via</p>
            <div>
              <a
                href='mailto:darmayasadiputra@gmail.com'
                className='flex items-center group mb-2'
                rel='noopener noreferrer'
                target='_blank'>
                <div className='border-purple border-[1px] border w-10 h-10 rounded-md flex items-center justify-center group-hover:bg-purple/5 transition-all mr-4'>
                  <img src={emailLogo} alt='Darmayasa`s email address' />
                </div>
                <span className='text-xl leading-9 font-regular text-purple'>
                  darmayasadiputra@gmail.com
                </span>
              </a>
              <a
                href='https://www.instagram.com/kadekdarmayasaa'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center group'>
                <div className='border-purple border-[1px] border w-10 h-10 rounded-md flex items-center justify-center group-hover:bg-purple/5 transition-all mr-4'>
                  <img
                    src={instagramLogo}
                    alt='Darmayasa`s instagram account'
                  />
                </div>
                <span className='text-xl leading-9 font-regular text-purple'>
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