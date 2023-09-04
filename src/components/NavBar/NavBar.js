import React from 'react'
import { Link } from 'react-router-dom'
import { navCon } from '../../assets/data'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FiSearch } from 'react-icons/fi'
import logo from '../../assets/images/logo.png'
const NavBar = () => {
  return (
    <div className='flex flex-col w-full items-center max-w-[1240px] h-[140px] mx-auto'>


        <div className='flex w-full items-center justify-between h-[60px] mt-[5px]'>
            <div className='flex items-center justify-between w-[60px]'>
                <RxHamburgerMenu />
                <FiSearch className=''/>
            </div>

            <div className='flex items-center justify-between w-[690px]'>
                <button className='up'>U.S.</button>
                <button className='up'>INTERNATIONAL</button>
                <button className='up'>CANADA</button>
                <button className='up'>ESPANOL</button>
                <button className='up'>中文</button>

            <div className='flex items-center justify-between w-[260px]'>
                <button className='btn__nav'>SUBSCRIBE FOR $0.50/WEEK</button>
                <button className='btn__nav'>LOG IN</button>
            </div> 
            </div>
        </div>

        <div className='flex w-full items-center justify-between py-[10px]'>
            <div className='flex flex-col'>
                <h1 className='font-bold text-[14px]'>Monday, September 4, 2023</h1>
                <p>Today’s Paper</p>
            </div>

             <Link to='/'>
                <img className='w-[500px] mr-[40px]' src={logo} alt='nytime' />
             </Link>       
            
            <div className='flex items-center h-[40px] text-[15px] w-[100px] justify-between mt-[30px]'>
                <h1>Nas</h1>
                <span className='text-green-400 flex'>+0.18 <p className='mx-[10px]'>&uarr;</p></span>
            </div>
        </div>

        <div className='flex justify-evenly w-full p-[10px] border-t-[1px] border-b-[1px] border-t-gray-300 border-b-black'>
            {
                navCon.map((item,index) => (
                    <div key={index}>
                        <Link to='/' className='text-[14px] hover:bg-gray-100 p-[5px] rounded-md}'>{item.title}</Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default NavBar