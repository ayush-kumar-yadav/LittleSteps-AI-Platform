import Image from "next/image"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4 loading-animation">
          <Image
            src="/placeholder.svg?height=128&width=128"
            alt="LittleSteps.AI Logo"
            width={128}
            height={128}
            className="rounded-full shadow-lg"
          />
        </div>

        <h1 className="text-4xl font-bold text-purple-600 mb-2 tracking-tight">
          LittleSteps<span className="text-blue-500">.AI</span>
        </h1>

        <p className="text-lg text-gray-600 mb-8">Growing together, one step at a time</p>

        <div className="flex space-x-3">
          <div className="w-4 h-4 rounded-full bg-purple-500 loading-dot"></div>
          <div className="w-4 h-4 rounded-full bg-blue-500 loading-dot"></div>
          <div className="w-4 h-4 rounded-full bg-teal-500 loading-dot"></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <div className="relative h-32 w-full">
          <div className="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path
                fill="#c4b5fd"
                fillOpacity="0.3"
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path
                fill="#93c5fd"
                fillOpacity="0.3"
                d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute top-10 right-10 floating">
        <div className="w-16 h-16 bg-yellow-300 rounded-full opacity-50"></div>
      </div>

      <div className="absolute top-20 left-10 floating" style={{ animationDelay: "0.5s" }}>
        <div className="w-12 h-12 bg-pink-300 rounded-full opacity-50"></div>
      </div>

      <div className="absolute bottom-40 right-20 floating" style={{ animationDelay: "1s" }}>
        <div className="w-10 h-10 bg-teal-300 rounded-full opacity-50"></div>
      </div>
    </div>
  )
}
