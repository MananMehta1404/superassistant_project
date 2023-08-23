import React from 'react'

const Fileupload = () => {
  return (
    <div className='w-[55%] m-2 p-7 rounded-xl bg-white'>
          <p className='text-[16px]'>File Upload <span className='text-red-500'>*</span></p>
          <div className='mt-7 text-[15px]'>
            <form>
                <div className='mb-2'>
                    <input type='file' name='val' className='mr-2'></input>
                </div>
            </form>
          </div>
        </div>
  )
}

export default Fileupload
