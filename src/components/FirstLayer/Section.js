import React from 'react'
import { Link } from 'react-router-dom'

const Section = () => {
  return (
    <div className='w-full h-screen mt-[30px] px-[20px] flex flex-col'>

        <div className='flex flex-col justify-center'>
            <div className='h-[85px] border-b-[1px] border-b-gray-300'> 
                <img src='https://static01.nyt.com/images/2023/09/03/multimedia/13workfriend-btcw/13workfriend-btcw-threeByTwoSmallAt2X.jpg' alt='foto' />
                <Link className='font-bold text-[14px]' to='/'>Time to Expose the Liar at Work?</Link>
                <p className='text-[14px] my-[5px]'>When you discover a co-worker is fabricating her performance numbers, think carefully before confronting her, our columnist writes.</p>
                <p className='text-[12px] text-gray-500'>6 MIN READ</p>
            </div>

            <div className='flex mt-[300px] border-t-[1px] border-t-gray-300'>
                <div className='w-[160px] mt-[20px]'>
                    <img src='https://static01.nyt.com/images/2023/08/30/multimedia/30narcan-tpjf/30narcan-tpjf-threeByTwoSmallAt2X.jpg' alt='foto'/>
                    <p className='text-[14px] font-bold my-[5px]'>The overdose-reversal drug Narcan is headed to stores, no prescription required.</p>
                    <p className='text-[12px] text-gray-500'>3 MIN READ</p>
                </div>

                <div className='w-[1px] h-[250px] mx-[20px] mt-[10px] bg-gray-300'>

                </div>

                <div className='w-[160px] mt-[20px]'>
                    <img src='https://static01.nyt.com/images/2022/08/31/dining/31laborday-roundup-1/merlin_189026652_59db76fa-fb1d-4e60-9aff-80858dedef57-threeByTwoSmallAt2X.jpg' alt='foto'/>
                    <p className='text-[14px] font-bold my-[5px]'>Send summer off with a bang with these Labor Day recipes.</p>
                    <p className='text-[12px] text-gray-500'>7 MIN READ</p>
                </div>
            </div>
        </div>


        <div className='flex flex-col justify-center border-t-[1px] border-t-black mt-[40px]'>
            <Link to='/' className='font-bold mt-[10px]'>Opinion</Link>

            <div className='flex items-center justify-between border-b-[1px] border-b-gray-300 py-[10px]'>
                <div>
                    <h1 className='text-[14px] text-gray-400'>ZEYNEP TUFEKCI</h1>
                    <h1 className='text-[17px] font-bold my-[5px]'>One Thing Not to Fear at Burning Man</h1>
                    <p className='text-[12px] text-gray-500'>4 MIN READ</p>
                </div>
                <img className='w-[50px] h-[50px] rounded-full' src='https://static01.nyt.com/images/2015/03/16/opinion/Tufekci-Zeynep-circular/Tufekci-Zeynep-circular-thumbLarge-v3.png' alt='foto' />
            </div>


            <div className='flex items-center justify-between border-b-[1px] border-b-gray-300 py-[10px]'>
                <div>
                    <h1 className='text-[14px] text-gray-400'>JOHN RAPLEY</h1>
                    <h1 className='text-[17px] font-bold my-[5px]'>Ancient Rome Has a Warning for America</h1>
                    <p className='text-[12px] text-gray-500'>6 MIN READ</p>
                </div>
                <img className='w-[150px] h-[150px]' src='https://static01.nyt.com/images/2023/09/04/multimedia/04rapley-1-wzfh/04rapley-1-wzfh-square320.jpg' alt='foto' />
            </div>

            <div className='flex items-center justify-between border-b-[1px] border-b-gray-300 py-[10px]'>
                <div>
                    <h1 className='text-[14px] text-gray-400'>MARGARET RENKL</h1>
                    <h1 className='text-[17px] font-bold my-[5px]'>I Put My Money on the Weeping Mothers at the Tennessee State Capitol</h1>
                    <p className='text-[12px] text-gray-500'>5 MIN READ</p>
                </div>
                <img className='w-[50px] h-[50px] rounded-full' src='https://static01.nyt.com/images/2023/04/12/opinion/margaret-renkl-new/margaret-renkl-new-thumbLarge.png' alt='foto' />
            </div>



            <div className='flex items-center justify-between border-b-[1px] border-b-gray-300 py-[10px]'>
                <div>
                    <h1 className='text-[14px] text-gray-400'>JANE COASTON</h1>
                    <h1 className='text-[17px] font-bold my-[5px]'>How a Gay Republican Sees the Rise in Anti-L.G.B.T.Q. Rhetoric on the Right</h1>
                    <p className='text-[12px] text-gray-500'>9 MIN READ</p>
                </div>
                <img className='w-[50px] h-[50px] rounded-full' src='https://static01.nyt.com/images/2021/02/23/admin/janecoastonauthorpic/janecoastonauthorpic-thumbLarge.png' alt='foto' />
            </div>


            <div className='flex items-center border-b-[1px] border-b-gray-300 py-[10px]'>
                <div>
                    <h1 className='text-[14px] text-gray-400'>CAMILO ORTIZ AND LENORE SKENAZY</h1>
                    <h1 className='text-[17px] font-bold my-[5px]'>This Cheap, Fast and Easy Fix Could Help Kids Feel Less Anxious</h1>
                    <p className='text-[12px] text-gray-500'>5 MIN READ</p>
                </div>
    
            </div>


            <div className='flex justify-between border-b-[1px] border-b-gray-300 py-[10px]'>
                <div>
                    <h1 className='text-[14px] text-gray-400'>JONATHAN MALESIC</h1>
                    <h1 className='text-[17px] font-bold my-[5px]'>College Students: School Is Not Your Job</h1>
                    <p className='text-[12px] text-gray-500'>5 MIN READ</p>
                </div>
                <img className='w-[160px] h-[150px]' src='https://static01.nyt.com/images/2023/09/05/opinion/04malesic-image/04malesic-image-square320.jpg' alt='foto' />
            </div>

            <div className='flex items-center border-b-[1px] border-b-gray-300 py-[10px]'>
                <div>
                    <h1 className='text-[14px] text-gray-400'>CAMILO ORTIZ AND LENORE SKENAZY</h1>
                    <h1 className='text-[17px] font-bold my-[5px]'>This Cheap, Fast and Easy Fix Could Help Kids Feel Less Anxious</h1>
                    <p className='text-[12px] text-gray-500'>5 MIN READ</p>
                </div>
    
            </div>

            <div className='flex items-center border-b-[1px] border-b-gray-300 py-[10px]'>
                <div>
                    <h1 className='text-[14px] text-gray-400'>CAMILO ORTIZ AND LENORE SKENAZY</h1>
                    <h1 className='text-[17px] font-bold my-[5px]'>This Cheap, Fast and Easy Fix Could Help Kids Feel Less Anxious</h1>
                    <p className='text-[12px] text-gray-500'>5 MIN READ</p>
                </div>
    
            </div>


            
        </div>
        

    </div>
  )
}

export default Section