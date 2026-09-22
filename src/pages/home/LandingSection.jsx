
const LandingSection = () => {
  return (
    <div id="landing" className='w-full h-screen flex flex-col justify-center items-center md:items-start px-8 pt-12 sm:pt-12 border-b border-white'>

      <div className="w-full h-full bg-[url(/landing_bg.jpg)] bg-cover bg-no-repeat absolute top-0 left-0 z-0" />

      <div className="w-[95%] md:w-[30%] flex flex-col gap-y-2 sm:gap-y-4 text-white mb-8">
        <h1 className="text-lg md:text-3xl text-center md:text-left font-bold fade-in">Rootpack</h1>
        <p className="fade-in text-sm md:text-lg text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias commodi voluptatem eveniet eum eligendi fugit perferendis voluptate doloribus porro?</p>
        <a href="/auth/login" className="hidden md:block bg-white text-black w-fit px-6 py-2 rounded-xl fade-in [animation-delay:400ms] text-xs md:text-sm">Get your Rootpack</a>
      </div>

      <div className="w-full flex justify-center md:justify-end">
        <div className="w-82.5 h-67.5 flex flex-col rounded-2xl bg-white overflow-hidden fade-in [animation-delay:1000ms] shadow-xl shadow-black/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl hover:shadow-black/40">  {/*w-[330px] h-[270px]*/}
          <div className="w-full h-[70%] border-b bg-[url(/bag_img.jpg)] bg-cover bg-no-repeat"></div>

          <div className="w-full h-[30%] flex items-center px-2">
            <div className="w-[65%] flex flex-col text-xs">
              <h1>Rootpack Backpack</h1>
              <p className="text-gray-400">A smart solution to your unnoticed problem.</p>
            </div>
            
            <div className="">
              <a href="/auth/login" className="bg-black text-white px-4 py-2 rounded-2xl text-xs md:text-sm">Order now</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingSection
