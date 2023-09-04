import React from 'react'
import MainLayer from '../components/FirstLayer/MainLayer'
import Section from '../components/FirstLayer/Section'

const MainPage = () => {
  return (
    <div className='flex w-full  max-w-[1240px] mx-auto mt-[75px] h-screen border-t-[1px] border-black'>
      <div>
        <MainLayer />
      </div>
      <div>
        <Section />
      </div>
    </div>
  )
}

export default MainPage