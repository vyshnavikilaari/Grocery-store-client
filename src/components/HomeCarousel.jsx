import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HomeCarousel = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div className="relative">
          <img
            className="h-[90vh] w-full object-cover"
            src="https://img.freepik.com/free-photo/supermarket-banner-concept-with-ingredients_23-2149421141.jpg"
            alt="Vegetables"
          />
          {/* Centered Grocery Spot */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-7xl font-bold text-white opacity-75">
              The solution to all your essential needs!
            </h1>
            {/* <h3>The solution to all your essential needs!</h3> */}
          </div>
          {/* Offer Box Bottom Left */}
          <div className="absolute left-4 bottom-4 bg-white p-4 rounded-md">
            <h2 className="text-left font-medium tracking-tighter text-gray-600 lg:text-2xl">
              Vegetables
            </h2>
            <p className="mt-2">
              <span className="text-5xl font-semibold tracking-tight text-red-950">
                40%
              </span>
              <span className="text-base font-medium text-gray-500"> offer</span>
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            className="h-[90vh] w-full object-cover"
            src="https://t4.ftcdn.net/jpg/02/89/44/67/360_F_289446727_vRX6ctHc8dkaeT0zcKnHSu2w5TWOVtJH.jpg"
            alt="Spices"
          />
          {/* Centered Grocery Spot */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-7xl font-bold text-white opacity-75">
              The solution to all your essential needs!
            </h1>
            {/* <h3>The solution to all your essential needs!</h3> */}
          </div>
          {/* Offer Box Bottom Left */}
          <div className="absolute left-4 bottom-4 bg-white p-4 rounded-md">
            <h2 className="text-left font-medium tracking-tighter text-gray-600 lg:text-2xl">
              Spices
            </h2>
            <p className="mt-2">
              <span className="text-5xl font-semibold tracking-tight text-red-950">
                50%
              </span>
              <span className="text-base font-medium text-gray-500"> offer</span>
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            className="h-[90vh] w-full object-cover"
            src="https://img.freepik.com/premium-photo/fresh-produce-shelves-grocery-store-with-intentional-blurred-background-enhanced-effect_409333-6616.jpg"
            alt="Snacks"
          />
          {/* Centered Grocery Spot */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-7xl font-bold text-white opacity-75">
              The solution to all your essential needs!
            </h1>
            {/* <h3>The solution to all your essential needs!</h3> */}
          </div>
          {/* Offer Box Bottom Left */}
          <div className="absolute left-4 bottom-4 bg-white p-4 rounded-md">
            <h2 className="text-left font-medium tracking-tighter text-gray-600 lg:text-2xl ">
              Fruits
            </h2>
            <p className="mt-2">
              <span className="text-5xl font-semibold tracking-tight text-red-950">
                30%
              </span>
              <span className="text-base font-medium text-gray-500"> offer</span>
            </p>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
