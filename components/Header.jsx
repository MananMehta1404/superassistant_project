const Header = () => {
  return (
    <div className="w-[55%] mt-3 mb-2 rounded-xl bg-white">
      <div className="bg-purple-600 h-2 rounded-tr-xl rounded-tl-xl object-contain" />
      <div className="m-5 text-3xl font-semibold">
        Assignment Task
      </div>
      <hr />
      <div className="m-5 text-[14px]">
        <div className="flex flex-row justify-between mb-5">
            <p className="font-bold text-slate-600">mehtamanan1442003@gmail.com<span className="text-blue-400 font-normal cursor-pointer"> Switch account</span></p>
            <p className="text-slate-600">Draft saved</p>
        </div>
        <p className="text-slate-600">The name and photo associated with your Google account will be recorded when you upload files and submit this form. Your email is not part of your response.</p>
      </div>
      <hr />
      <div className="text-[14px] ml-5 mb-4 mt-3 text-red-500">
        <span className="mr-1">*</span>Indicates required question
      </div>
    </div>
  )
}

export default Header
