import AchievementItem from './Item'
import { achievements } from '@data/certifications'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Achievements = () => {
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
      id='achievements'
      className='sm:mt-20 bg-white px-8 py-16 text-black scroll-mt-20'>
      <div className='sm:container md:px-20'>
        <div>
          <h2 className='text-3xl sm:text-4xl font-bold'>🏆 Achievements</h2>
          <p className='text-lg sm:text-xl font-medium mt-6 max-w-[700px] leading-9'>
            Highlights of my professional certifications and recognitions
          </p>
        </div>
        <div className='mt-10'>
          <Slider {...settings} className='relative'>
            {achievements.map((achievement) => {
              return (
                <AchievementItem
                  {...achievement}
                  key={achievement.detailsUrl}
                />
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Achievements
