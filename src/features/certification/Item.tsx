export interface CertificationItemProps {
  imgUrl: string
  title: string
}

const CertificationItem = (props: CertificationItemProps) => {
  const { imgUrl, title } = props
  return (
    <img
      src={imgUrl}
      alt={title}
      className='w-full rounded-xl'
      loading='lazy'
    />
  )
}

export default CertificationItem
