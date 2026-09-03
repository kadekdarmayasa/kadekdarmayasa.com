export interface AchievementItemProps {
  imgUrl: string
  title: string
  provider: string
  issuedDate: string
  detailsUrl: string
}

const AchievementItem = (props: AchievementItemProps) => {
  const { imgUrl, title, provider, issuedDate, detailsUrl } = props
  return (
    <article className='h-full overflow-hidden rounded-xl border border-black/10 bg-white'>
      <a
        href={detailsUrl}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={`View details for ${title}`}
        className='group block overflow-hidden'>
        <img
          src={imgUrl}
          alt={`Certificate thumbnail for ${title}`}
          className='aspect-[1.65] w-full object-cover object-center transition duration-500 group-hover:scale-[1.12]'
          loading='lazy'
        />
      </a>
      <div className='flex min-h-[180px] flex-col p-5 sm:p-6'>
        <p className='text-sm font-bold uppercase tracking-[0.14em] text-[#6202FF]'>
          {provider}
        </p>
        <h3 className='mt-3 text-xl font-bold leading-tight sm:text-2xl'>
          {title}
        </h3>
        <div className='mt-auto flex items-end justify-between gap-4 pt-6'>
          <p className='text-sm font-medium text-black/60'>
            <span className='block text-xs uppercase tracking-[0.12em]'>
              Issued
            </span>
            <span className='mt-1 block text-base text-black'>
              {issuedDate}
            </span>
          </p>
          <a
            href={detailsUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='shrink-0 border-b-2 border-[#FF9858] pb-1 text-sm font-bold transition hover:text-[#6202FF]'>
            View credential <span aria-hidden='true'>↗</span>
          </a>
        </div>
      </div>
    </article>
  )
}

export default AchievementItem
