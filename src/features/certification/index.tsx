import { v4 as uuidv4 } from 'uuid'
import CertificationItem from './Item'
import { certifications } from '@data/certifications'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Certification = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section
      id='certifications'
      className='px-8 text-black mt-20 bg-light-gray scroll-mt-20'>
      <div className='sm:container md:px-20 py-20'>
        <div>
          <h2 className='text-3xl sm:text-4xl font-bold'>
            🚀 Certifications Earned
          </h2>
          <p className='text-lg sm:text-xl font-medium mt-6 max-w-[700px] leading-9'>
            I've taken a few classes and entered various web design competitions
            to hone my present talents and broaden my knowledge.
          </p>
        </div>
        <div className='mt-10'>
          <Slider {...settings} className='relative'>
            {certifications.map((certification) => {
              return (
                <CertificationItem
                  title={certification.title}
                  imgUrl={certification.imgUrl}
                  key={uuidv4()}
                />
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Certification
