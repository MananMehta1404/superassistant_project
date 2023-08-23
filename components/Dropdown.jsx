import React from 'react'

const Dropdown = () => {
  return (
    <div className='w-[55%] m-2 p-7 rounded-xl bg-white'>
          <p className='text-[16px]'>Dropdown <span className='text-red-500'>*</span></p>
          <div className='mt-7 text-[15px]'>
            <form>
                <div className='mb-2'>
                    <select className='border-2 border-slate-300 rounded-sm p-3'>
                        <option value="volvo">Option 1</option>
                        <option value="saab">Option 2</option>
                        <option value="mercedes">Option 3</option>
                    </select>
                </div>
            </form>
          </div>
        </div>
  )
}

export default Dropdown
