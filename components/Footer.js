import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-accents_9 py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='flex items-center justify-center'>
              <p className='text-sm text-accents_6'>
                EStorrent © 2020 - {new Date().getFullYear()}. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
