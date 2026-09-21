import { FaStar } from "react-icons/fa";

const Testimonial = ({
    image,
    stars,
    description,
    name,
}) => {
    return (
        <div className="w-[350px] min-h-[280px] bg-orange-100 rounded-2xl p-6 shadow-lg flex flex-col gap-y-6">

            {/* Customer */}
            <div className="flex items-center gap-x-4">
                <img
                    src={image}
                    alt={name}
                    className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                    <h3 className="text-lg font-semibold text-black">
                        {name}
                    </h3>

                    {/* Stars */}
                    <div className="flex gap-x-1 mt-1">
                        {Array.from({ length: stars }).map((_, index) => (
                            <FaStar
                                key={index}
                                className="text-yellow-400"
                                size={16}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonial */}
            <p className="text-gray-600 text-xl leading-relaxed">
                "{description}"
            </p>

        </div>
    );
};

export default Testimonial;

