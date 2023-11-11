import { HashLoader } from 'react-spinners'

const Loading = () => {
  return (
    <HashLoader
      color={'#6202FF'}
      loading={true}
      cssOverride={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%)',
      }}
      size={100}
      aria-label='Loading Spinner'
      data-testid='loader'
    />
  )
}

export default Loading
