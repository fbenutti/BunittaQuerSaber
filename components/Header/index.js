import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className={styles.contenedor}>
          <a href='/'>
            <img className='lg:w-1/5 md:w-1/3 w-1/2 mx-auto' src="/logo_bqs.png" alt="PalpiteBox" />
          </a>
        </div>
      </div>
      <div className='font-header text-4xl bg-pastel-default p-4 drop-shadow-md text-center'>
        <Link href='/'>
          <a className='px-2 hover:underline'>Home</a>
        </Link>
        |
        {/* <Link href='/sobre'>
          <a className='px-2 hover:underline'>Sobre</a>
        </Link>
        | */}
        <Link href='/pesquisa'>
          <a className='px-2 hover:underline'>Pesquisa</a>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Header