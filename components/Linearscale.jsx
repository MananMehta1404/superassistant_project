import React from 'react'

const Linearscale = () => {
  return (
    <div className='w-[55%] m-2 p-7 rounded-xl bg-white'>
          <p className='text-[16px]'>Linear Scale <span className='text-red-500'>*</span></p>
          <div className='mt-4 text-[15px] flex flex-row'>
            <div className='w-[20%] flex justify-center items-center'>Worst</div>
            <div className='w-[60%]'>
                <ul className='flex flex-row justify-between'>
                    <li></li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li></li>
                </ul>
                <ul className='flex flex-row justify-between m-2'>
                    <li></li>
                    <li><input type='radio' name='val' /></li>
                    <li><input type='radio' name='val' /></li>
                    <li><input type='radio' name='val' /></li>
                    <li><input type='radio' name='val' /></li>
                    <li><input type='radio' name='val' /></li>
                    <li></li>
                </ul>
            </div>
            <div className='w-[20%] flex justify-center items-center'>Best</div>
          </div>
        </div>
  )
}

export default Linearscale
