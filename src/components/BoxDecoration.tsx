interface BoxDecorationProps {
  color: string
  opacity?: number
  className?: string
}

const BoxDecoration = ({
  color,
  opacity = 0.15,
  className,
}: BoxDecorationProps) => {
  return (
    <svg
      width='339'
      height='322'
      viewBox='0 0 339 322'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M44.0048 0V321.577' stroke={color} strokeOpacity={opacity} />
      <path d='M91.2692 0.422546V322' stroke={color} strokeOpacity={opacity} />
      <path d='M137.719 0V321.577' stroke={color} strokeOpacity={opacity} />
      <path d='M185.798 0.422546V322' stroke={color} strokeOpacity={opacity} />
      <path d='M233.062 0V321.577' stroke={color} strokeOpacity={opacity} />
      <path d='M285.216 0.422546V322' stroke={color} strokeOpacity={opacity} />
      <path d='M0 38.454H339' stroke={color} strokeOpacity={opacity} />
      <path d='M0 89.1627H339' stroke={color} strokeOpacity={opacity} />
      <path d='M0 139.871H339' stroke={color} strokeOpacity={opacity} />
      <path d='M0 190.58H339' stroke={color} strokeOpacity={opacity} />
      <path d='M0 241.289H339' stroke={color} strokeOpacity={opacity} />
      <path d='M0 291.997H339' stroke={color} strokeOpacity={opacity} />
    </svg>
  )
}

export default BoxDecoration
