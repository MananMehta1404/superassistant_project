import React from 'react'

const MCQ = () => {
  return (
    <div className='w-[55%] m-2 p-7 rounded-xl bg-white'>
      <p className='text-[16px]'>MCQ <span className='text-red-500'>*</span></p>
      <div className='mt-4 text-[15px]'>
        <form>
            <div className='mb-2'>
                <input type='radio' name='val' className='mr-2'></input>
                <label>Option 1</label>
            </div>
            <div className='mb-2'>
                <input type='radio' name='val' className='mr-2'></input>
                <label>Option 2</label>
            </div>
            <div className='mb-2'>
                <input type='radio' name='val' className='mr-2'></input>
                <label>Option 3</label>
            </div>
        </form>
      </div>
    </div>
  )
}

export default MCQ
