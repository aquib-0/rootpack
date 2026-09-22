import Testimonial from "../../components/Testimonial"

const RatingSection = () => {
  return (
    <div id="rating" className="w-full min-h-screen flex flex-wrap justify-center items-center gap-y-4 py-20 sm:gap-x-10 bg-[url(/landing_bg.jpg)] bg-cover bg-no-repeat">
      {/* This is the rating section */}
      <Testimonial
        image={`https://github.com/shadcn.png`}
        stars={5}
        description="Rootpack made our workflow much easier. The entire experience was smooth and intuitive."
        name="Rahul Sharma"
      />

      <Testimonial
        image={`https://github.com/shadcn.png`}
        stars={4}
        description="The product is simple to use and the support team was very helpful."
        name="Altaf Shaik"
      />

      <Testimonial
        image={`https://github.com/shadcn.png`}
        stars={4.5}
        description="Rootpack made our workflow much easier. The entire experience was smooth and intuitive."
        name="Maheen Akhtar"
      />
    </div>
  )
}

export default RatingSection
