import{Link} from 'react-router-dom'
function About({version}) {
  return (
    <>
    <center className='mt-15'>
      <h1 className='text-6xl mb-4'>Book-Store</h1>
      <p className='mb-4 text-2xl font-light'>
       online Book-store.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-gray-400'>{version}</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <span className='text-gray-400'>
          Bansal Patel
        </span>
      </p>
       <Link to='/'>Back to Home-page</Link>
       </center>
    </>
  )
}

export default About;