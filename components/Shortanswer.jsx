const ShortAnswer = () => {
  return (
    <div className='w-[55%] m-2 p-7 rounded-xl bg-white'>
          <p className='text-[16px]'>Short Answer <span className='text-red-500'>*</span></p>
          <div className='mt-7 text-[15px]'>
            <form>
                <div className='mb-2'>
                    <input type="text" placeholder="Your answer" className="border-b-2" />
                </div>
            </form>
          </div>
        </div>
  )
}

export default ShortAnswer
