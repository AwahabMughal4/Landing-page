import logoReact from "../assets/logoReact.png";
import logoNext from "../assets/logoNext.png";
import LaravelLogo from "../assets/LaravelLogo.png";
import androidLogo from "../assets/androidLogo.png";
import pythonLogo from "../assets/pythonLogo.png";

export default function Example() {
  return (
    <div className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 sm:py-24">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <h2 className="p-6 text-5xl font-bold leading-8 text-center text-yellow-600 sm:text-3xl mb-[6rem]">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-5 justify-items-center">
          {/* Laravel Logo */}
          <div className="flex flex-col items-center py-4 transition duration-500 transform hover:scale-110 hover:shadow-rose-600 hover:shadow-md hover:border hover:border-rose-600 hover:rounded-lg">
            <img
              alt="LaravelLogo"
              src={LaravelLogo}
              className="object-contain max-h-12 w-28 sm:w-36"
            />
            <span className="mt-2 text-sm text-white transition duration-300 transform sm:text-base hover:translate-y-1 hover:text-rose-400">
              Laravel
            </span>
          </div>

          {/* NextJS Logo */}
          <div className="flex flex-col items-center py-4 transition duration-500 transform hover:scale-110 hover:shadow-rose-600 hover:shadow-md hover:border hover:border-rose-600 hover:rounded-lg">
            <img
              alt="NextJS"
              src={logoNext}
              className="object-contain rounded max-h-12 w-28 sm:w-36"
            />
            <span className="mt-2 text-sm text-white transition duration-300 transform sm:text-base hover:translate-y-1 hover:text-rose-400">
              NextJS
            </span>
          </div>

          {/* React Logo (Default shadow) */}
          <div className="flex flex-col items-center py-4 transition duration-500 transform shadow-md shadow-rose-600 hover:scale-110 hover:shadow-lg hover:shadow-rose-700 hover:border hover:border-rose-600 hover:rounded-lg">
            <img
              alt="ReactLogo"
              src={logoReact}
              className="object-contain rounded max-h-12 w-28 sm:w-36"
            />
            <span className="mt-2 text-sm text-white transition duration-300 transform sm:text-base hover:translate-y-1 hover:text-rose-400">
              React
            </span>
          </div>

          {/* Python Logo */}
          <div className="flex flex-col items-center py-4 transition duration-500 transform hover:scale-110 hover:shadow-rose-600 hover:shadow-md hover:border hover:border-rose-600 hover:rounded-lg">
            <img
              alt="Python"
              src={pythonLogo}
              className="object-contain rounded max-h-12 w-28 sm:w-36"
            />
            <span className="mt-2 text-sm text-white transition duration-300 transform sm:text-base hover:translate-y-1 hover:text-rose-400">
              Python
            </span>
          </div>

          {/* Android Logo */}
          <div className="flex flex-col items-center py-4 transition duration-500 transform hover:scale-110 hover:shadow-rose-600 hover:shadow-md hover:border hover:border-rose-600 hover:rounded-lg">
            <img
              alt="Android"
              src={androidLogo}
              className="object-contain rounded max-h-12 w-28 sm:w-36"
            />
            <span className="mt-2 text-sm text-white transition duration-300 transform sm:text-base hover:translate-y-1 hover:text-rose-400">
              Android
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
