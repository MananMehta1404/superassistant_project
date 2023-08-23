import React from 'react'

const Multichoicegrid = () => {
  return (
    <div className='w-[55%] m-2 p-7 rounded-xl bg-white'>
      <p className='text-[16px]'>Multi Choice Grid <span className='text-red-500'>*</span></p>
      <div className='mt-4 text-[15px]'>
        <div className='mb-2 p-3'>
          <ul className='flex flex-row'>
            <li className='w-[30%]'></li>
            <li className='w-[23%]'>Column 1</li>
            <li className='w-[23%]'>Column 2</li>
            <li className='w-[23%]'>Column 3</li>
          </ul>
        </div>
        <div className='mb-1 bg-slate-200 rounded-sm h-12 p-3'>
          <ul className='flex flex-row justify-center items-center'>
            <li className='w-[30%]'>Row 1</li>
            <li className='w-[23%] pl-5'><input type='radio' name='val1' /></li>
            <li className='w-[23%] pl-5'><input type='radio' name='val1' /></li>
            <li className='w-[23%] pl-5'><input type='radio' name='val1' /></li>
          </ul>
        </div>
        <div className='mb-1 bg-slate-200 rounded-sm h-12 p-3'>
          <ul className='flex flex-row justify-center items-center'>
            <li className='w-[30%]'>Row 2</li>
            <li className='w-[23%] pl-5'><input type='radio' name='val2' /></li>
            <li className='w-[23%] pl-5'><input type='radio' name='val2' /></li>
            <li className='w-[23%] pl-5'><input type='radio' name='val2' /></li>
          </ul>
        </div>
        <div className='mb-1 bg-slate-200 rounded-sm h-12 p-3'>
          <ul className='flex flex-row justify-center items-center'>
            <li className='w-[30%]'>Row 3</li>
            <li className='w-[23%] pl-5'><input type='radio' name='val3' /></li>
            <li className='w-[23%] pl-5'><input type='radio' name='val3' /></li>
            <li className='w-[23%] pl-5'><input type='radio' name='val3' /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Multichoicegrid
