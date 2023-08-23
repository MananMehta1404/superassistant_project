const Header = () => {
  return (
    <div className="w-[800px] m-7 rounded-xl bg-white">
      <div className="m-7 text-4xl font-semibold">
        Assignment Task
      </div>
      <hr />
      <div className="m-7 text-xl">
        <div className="flex flex-row justify-between mb-5">
            <p className="font-bold">mehtamanan1442003@gmail.com<span className="text-blue-400 font-normal"> Switch account</span></p>
            <p className="text-[17px] text-slate-600">Draft saved</p>
        </div>
        <p>The name and photo associated with your Google account will be recorded when you upload files and submit this form. Your email is not part of your response.</p>
      </div>
      <hr />
      <div className="text-xl ml-7 mt-5 mb-5 text-red-500">
        *Indicates required question
      </div>
    </div>
  )
}

export default Header
