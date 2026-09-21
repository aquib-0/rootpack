import LandingSection from "./LandingSection";
import RatingSection from "./RatingSection";

const HomePage = () => {
  return (
    <div className='w-full h-auto flex flex-col overflow-y-scroll'>
      <LandingSection />
      <RatingSection />
    </div>
  )
}

export default HomePage
