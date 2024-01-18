import { ComponentChildren } from "preact";

interface SectionProps {
  title: string;
  value: string;
  children: ComponentChildren;
}

const Section = ({ title, value, children }: SectionProps) => {
  return (
    <div className="border border-gray-700 rounded-lg shadow p-4 relative my-4">
      <p className="absolute -top-3 left-3 font-medium text-sm bg-gray-900 px-2">
        {title}
      </p>

      <div className="flex items-center mb-2">
        <input
          type="text"
          class="border text-sm rounded-lg block w-full p-2.5 cursor-pointer bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500 mr-2"
          value={value}
          disabled
        />
        <div>
          <button type="button" class="border hover:text-white focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center border-blue-500 text-blue-500 hover:white focus:ring-blue-800 hover:bg-blue-500">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </button>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Section;