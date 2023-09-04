import React from 'react'
import { news } from '../../assets/data'
const MainLayer = () => {
  return (
    <div className='flex flex-col w-full max-w-[830px] mx-auto border-r-[1px] mt-[30px] border-r-gray-300 pr-[10px]'>
        <div className='flex'>
            <div>
                <div className='w-[250px] h-[210px] border-b-[1px] border-b-gray-300'>
                    <h1 className='font-bold text-[20px]'>Defense Minister’s Ouster Shows Graft Is a Persistent Headache for Ukraine</h1>
                    <p className='text-[14px] my-[5px]'>President Volodymyr Zelensky’s removal of the minister was a reminder of the enduring challenge of corruption in Ukraine’s military.</p>
                    <p className='text-[12px] text-gray-500 mb-[10px]'>5 MIN READ</p>
                </div>

                <div className='w-[250px] h-[85px] border-b-[1px] border-b-gray-300 mt-[20px]'>
                    <h1 className='font-bold text-[14px]'>Who is Rustem Umerov, President Volodymyr Zelensky’s nominee for defense minister of Ukraine?</h1>
                    <p className='text-[12px] text-gray-500'>2 MIN READ</p>
                </div>

                <div className='w-[250px] h-[85px] border-b-[1px] border-b-gray-300 mt-[20px]'>
                    <h1 className='font-bold text-[14px]'>The Russian and Turkish presidents met but made little progress toward reviving the Black Sea grain deal.</h1>
                    <p className='text-[12px]'>See more headlines</p>
                </div>


            </div>
            <div className='flex flex-col'>
                <img className='ml-[40px] h-[400px]' src='https://static01.nyt.com/images/2023/09/04/multimedia/04ukraine-corruption-01-vgcl/04ukraine-corruption-01-vgcl-threeByTwoSmallAt2X.jpg' alt='foto' />
                <p className='text-[12px] ml-[40px] text-gray-600 mt-[15px]'>Ukrainian Army soldiers unloading munitions. Irregularities in procurement of weapons have been a persistent challenge. Tyler Hicks/The New York Times</p>
            </div>
        </div>

        <div className='line'></div>


        <div className='w-full flex'>
            <div className='w-[450px] border-r-[1px] h-[700px] border-r-gray-300 pr-[30px] mt-[20px]'>
                <h1 className='font-bold text-[20px]'>Faced With Evolving Threats, U.S. Navy Struggles to Change</h1>
                <p>Cheaper and more flexible vessels could be vital in a conflict with China, but the Navy is lashed to programs driven by tradition, politics and jobs.</p>
                <p className='text-[12px] text-gray-500 my-[10px]'>12 MIN READ</p>
                <img src='https://static01.nyt.com/images/2023/08/30/us/politics/00dc-navy/00dc-navy-threeByTwoSmallAt2X.jpg' alt='foto' />
            </div>

            <div className='flex flex-col'>

            <div className='mx-[100px] my-[20px] w-[300px] h-[610px] border-[1px] border-gray-400'>
                    <div className='flex items-center'>
                        <img className='relative' src='https://static01.nyt.com/images/2023/09/01/multimedia/00lipton-burst-bmtz/00lipton-burst-bmtz-square640-v3.jpg' alt='foto' />
                        <p className='text-white font-bold absolute mt-[15%] p-[10px] w-[320px] text-[18px]'>From Mississippi to Bahrain to See the Future of the Navy</p>
                    </div>

                    <div className='flex items-center p-[10px]'>

                        <div className='w-[50px] h-[50px] rounded-full '>
                            <img src='https://static01.nyt.com/images/2018/12/06/multimedia/author-eric-lipton/author-eric-lipton-thumbStandard.png' alt='foto' />
                        </div>


                        <div className='ml-[20px]'>
                            <h1 className='text-[12px] font-bold'>Eric Lipton</h1>
                            <p className='text-[12px]'>Reporting on changes in warfare</p>
                        </div>

                    </div>

                    <div className='p-[12px]'>
                            <p className='text-[15px]'>An investigation into the Navy’s efforts to modernize — to better prepare for a potential conflict with China — took me on a long journey from Pascagoula, Miss., to the Middle East.</p>

                            <button className='mt-[10px]'>Here’s what I saw →</button>
                    </div>

                    <div className='w-full p-[12px]'>
                        <p className='text-[11px] text-gray-400 ml-[32%]'>Andrea DiCenzo for The New York Times</p>
                    </div>
            </div>

            <div className='flex w-full items-center justify-center'>
                <div className='flex ml-[70px]'>
                    <button className='w-[10px] h-[10px] mx-[5px] bg-black rounded-full'></button>
                    <button className='w-[10px] h-[10px]  bg-gray-300 rounded-full'></button>
                    <button className='w-[10px] h-[10px] mx-[5px] bg-gray-300 rounded-full'></button>
                    <button className='w-[10px] h-[10px]  bg-gray-300 rounded-full'></button>
                    <button className='w-[10px] h-[10px] mx-[5px] bg-gray-300 rounded-full'></button>
                    <button className='w-[10px] h-[10px]  bg-gray-300 rounded-full'></button>
                </div>

                <div className='flex ml-[70px]'>
                    <button className='flex items-center justify-center w-[40px] h-[40px] bg-gray-300 rounded-full'>&#60;</button>
                    <button className='flex items-center justify-center w-[40px] h-[40px] bg-gray-300 ml-[10px] rounded-full'>&#62;</button>
                </div>
            </div>


        </div>
        </div>

        <div className='line'></div>

        <div className='flex flex-col'>
            {
                news.map((item) => (
                        <div className='flex mt-[40px] border-b-[1px] border-b-black p-[10px]'>
                            <div className='mr-[10px]'>
                                <h1 className='font-bold text-[20px]'>{item.title}</h1>
                                <p className='text-[14px] my-[5px]'>{item.text}</p>
                                <p className='text-[12px] text-gray-500'>{item.read}</p>
                            </div>
                            <img className='w-[500px]' src={item.img} alt='foto' />
                        </div>
                ))
            }
        </div>

    </div>
  )
}

export default MainLayer