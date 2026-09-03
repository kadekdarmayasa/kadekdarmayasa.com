import { skills } from '@data/skills'

const Skills = () => {
  return (
    <section
      id='skills'
      className='px-8 text-black mt-16 sm:mt-20 bg-white scroll-mt-20'>
      <div className='sm:container md:px-20'>
        <div className='max-w-[700px]'>
          <h2 className='text-3xl sm:text-4xl font-bold mt-3'>
            🛠️ Skills & Toolkit
          </h2>
          <p className='text-lg sm:text-xl font-medium mt-6 leading-9'>
            A practical set of technologies and tools I use to turn ideas into
            dependable digital products.
          </p>
        </div>
        <div className='mt-12 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-10'>
          {skills.map((group) => (
            <div key={group.title}>
              <h3 className='text-2xl font-bold mb-6'>{group.title}</h3>
              <div className='grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5'>
                {group.skills.map((skill) => (
                  <article
                    key={skill.name}
                    tabIndex={0}
                    aria-label={skill.name}
                    className='group relative z-0 flex aspect-square w-full min-w-0 cursor-help flex-col items-center justify-center rounded-lg border border-black/10 p-4 text-center outline-none transition-all hover:z-20 hover:-translate-y-1 hover:border-purple hover:shadow-lg focus:z-20 focus:-translate-y-1 focus:border-purple focus:shadow-lg'>
                    <i className={`${skill.icon} text-4xl sm:text-5xl`} />
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
