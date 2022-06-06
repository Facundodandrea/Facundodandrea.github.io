import React from 'react'
import { About } from '../About/About'
import './landing.css'

export const Landing = () => {
  return (
    <>
        <div className='container'>

            <section id='home'>
            <h1>
              <div className='hide-text'>
                <a href='#about'>
                  <div className='animate text-color-white label-hello'></div>
                </a>
                <a href='#works'>
                  <div className='animate text-color-white label-iam'></div>
                </a>
                <a href='#contact'>
                  <div className='animate text-color-gradient label-name'></div>
                </a>
            </div>
          </h1>
            <div className='bg-photo'>
              <img src='Stock.png' alt='bgphoto'/>
            </div>
          </section>
          
          <section id='about'>
            <About/>
          </section>

        </div>
    </>
  )
}
