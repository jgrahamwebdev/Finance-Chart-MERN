import { Link } from "react-router-dom"

const Hero = () => {
    return (
    <div className="bg-white flex items-center justify-center max-w-7xl mt-[3rem]">

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex items-start justify-center flex-col flex-1">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Boost your finances.
          <br />
          Keep track of your spending.
          <br />
          Start saving today.
        </h2>
        <div className="mt-10 flex items-center gap-x-6">
          <Link to={'/login'}><p
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Get started
          </p></Link>
        </div>
      </div>

      <div className="hidden md:flex flex-1">
        <img className="w-full h-auto" src="./imgs/finance.jpg" alt="" />
      </div>
    </div>
    )
}

export default Hero
