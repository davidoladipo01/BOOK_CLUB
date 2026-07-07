import React from 'react'
import Logo from '../components/Logo'
import Features from '../components/Features'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import Pg1 from '../components/Pg1'
import Infinitslider from './Infinitslider'

function Home() {
  return (
    <div>
      <Pg1 />
      <Infinitslider />
    </div>
  )
}

export default Home
