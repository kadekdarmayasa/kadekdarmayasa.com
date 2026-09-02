import darmaProfile2 from '@assets/images/darma-profile.jpg'

import type { FormEvent } from 'react'
import { Tilt } from 'react-tilt'
import { tilt } from '@config/tilt'

const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const subject = String(formData.get('_subject') ?? '')
    const message = String(formData.get('message') ?? '')
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`

    window.location.href = `mailto:darmayasadiputra@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section
      id='contact'
      className='mt-20 bg-light-gray px-4 py-16 text-black scroll-mt-24 sm:px-8 sm:py-20'>
      <div className='w-full sm:container md:px-20'>
        <div>
          <h3 className='text-xl sm:text-2xl md:text-3xl block font-bold text-slate-500'>
            🤝 Let's Get In Touch
          </h3>
          <h2 className='mt-10 break-words text-3xl font-bold sm:text-4xl md:text-5xl'>
            Do you have any project ideas or just want to say hi?
          </h2>
        </div>

        <div className='mt-12 flex flex-col gap-8 md:mt-20'>
          <div className='flex min-w-0 flex-col gap-6 sm:flex-row sm:items-center sm:gap-8'>
            <Tilt options={{ ...tilt, axis: false }}>
              <img
                src={darmaProfile2}
                alt='Darmayasa at his college'
                className='h-32 w-32 shrink-0 self-center rounded-full object-cover sm:self-auto'
                loading='lazy'
              />
            </Tilt>
            <div className='min-w-0'>
              <p className='mb-2 text-xl font-semibold leading-9'>
                Feel free to contact me
              </p>
              <p className='max-w-xl text-slate-500'>
                {' '}
                Choose your preferred way to reach me.
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12'>
            <div className='w-full lg:w-5/12'>
              <div className='grid min-w-0 gap-4 md:grid-cols-3 lg:grid-cols-1'>
                <a
                  href='mailto:darmayasadiputra@gmail.com'
                  className='group min-w-0 rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-purple hover:shadow-md'
                  rel='noopener noreferrer'>
                  <div className='mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-purple/10'>
                    <i
                      className='bx bxl-gmail text-2xl text-purple'
                      aria-hidden='true'
                    />
                  </div>
                  <p className='font-semibold'>Email</p>
                  <p className='mt-1 break-all text-sm text-slate-500'>
                    darmayasadiputra@gmail.com
                  </p>
                  <span className='mt-4 inline-block text-sm font-semibold text-purple'>
                    Send me a message
                  </span>
                </a>

                <a
                  href='https://www.instagram.com/kadekdarmayasaa'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group min-w-0 rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-purple hover:shadow-md'>
                  <div className='mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-purple/10'>
                    <i
                      className='bx bxl-instagram text-2xl text-purple'
                      aria-hidden='true'
                    />
                  </div>
                  <p className='font-semibold'>Instagram</p>
                  <p className='mt-1 text-sm text-slate-500'>
                    @kadekdarmayasaa
                  </p>
                  <span className='mt-4 inline-block text-sm font-semibold text-purple'>
                    Visit my Instagram
                  </span>
                </a>

                <a
                  href='https://linkedin.com/in/kadekdarmayasa'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group min-w-0 rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-purple hover:shadow-md'>
                  <div className='mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-purple/10'>
                    <i
                      className='bx bxl-linkedin text-2xl text-purple'
                      aria-hidden='true'
                    />
                  </div>
                  <p className='font-semibold'>LinkedIn</p>
                  <p className='mt-1 text-sm text-slate-500'>@kadekdarmayasa</p>
                  <span className='mt-4 inline-block text-sm font-semibold text-purple'>
                    Connect with me
                  </span>
                </a>
              </div>

              <div className='flex items-center gap-4 py-2 text-sm font-semibold text-slate-400'>
                <span className='h-px flex-1 bg-slate-200' />
                <span>Or send a message</span>
                <span className='h-px flex-1 bg-slate-200' />
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className='w-full max-w-3xl rounded-lg border border-slate-200 bg-white p-4 text-black shadow-sm shadow-slate-200/40 sm:p-8 lg:w-7/12'>
              <div className='mb-8'>
                <p className='text-2xl font-bold'>Send a message</p>
                <p className='mt-2 text-slate-500'>
                  I usually reply within one or two business days.
                </p>
              </div>

              <div className='grid gap-6 sm:grid-cols-2'>
                <div>
                  <label
                    htmlFor='contact-name'
                    className='mb-2 block text-sm font-semibold'>
                    Name
                  </label>
                  <input
                    id='contact-name'
                    name='name'
                    type='text'
                    required
                    autoComplete='name'
                    placeholder='Your name'
                    className='w-full rounded-md border border-slate-200 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-purple focus:ring-2 focus:ring-purple/20'
                  />
                </div>

                <div>
                  <label
                    htmlFor='contact-email'
                    className='mb-2 block text-sm font-semibold'>
                    Email
                  </label>
                  <input
                    id='contact-email'
                    name='email'
                    type='email'
                    required
                    autoComplete='email'
                    placeholder='you@example.com'
                    className='w-full rounded-md border border-slate-200 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-purple focus:ring-2 focus:ring-purple/20'
                  />
                </div>

                <div className='sm:col-span-2'>
                  <label
                    htmlFor='contact-subject'
                    className='mb-2 block text-sm font-semibold'>
                    Subject
                  </label>
                  <input
                    id='contact-subject'
                    name='_subject'
                    type='text'
                    required
                    placeholder='What can I help with?'
                    className='w-full rounded-md border border-slate-200 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-purple focus:ring-2 focus:ring-purple/20'
                  />
                </div>

                <div className='sm:col-span-2'>
                  <label
                    htmlFor='contact-message'
                    className='mb-2 block text-sm font-semibold'>
                    Message
                  </label>
                  <textarea
                    id='contact-message'
                    name='message'
                    required
                    rows={6}
                    placeholder='Tell me a little about your idea...'
                    className='w-full resize-none rounded-md border border-slate-200 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-purple focus:ring-2 focus:ring-purple/20'
                  />
                </div>
              </div>

              <button
                type='submit'
                className='mt-6 inline-flex items-center gap-2 rounded-md bg-purple px-6 py-3 font-semibold text-white transition-all hover:shadow-xl hover:shadow-purple/10 focus:outline-none focus:ring-2 focus:ring-purple focus:ring-offset-2'>
                <i className='bx bx-send text-lg' aria-hidden='true' />
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
