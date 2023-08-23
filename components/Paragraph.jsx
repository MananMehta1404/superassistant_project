const Paragraph = () => {
  return (
    <div className='w-[55%] m-2 p-7 rounded-xl bg-white'>
          <p className='text-[16px]'>Paragraph <span className='text-red-500'>*</span></p>
          <div className='mt-7 text-[15px]'>
            <form>
                <div className='mb-2'>
                    <textarea placeholder='Your answer' name="" id="" cols="80" rows="1" className='border-b-2' />
                </div>
            </form>
          </div>
        </div>
  )
}

export default Paragraph
