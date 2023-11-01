import Image from "next/image";

export default function Login() {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 h-screen">
      <div className=" hidden md:grid bg-violet-700">
        <Image
          src="/images/image.png"
          width={1000}
          height={1000}
          alt="Logo"
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          className="  "
          priority={true}
        />{" "}
      </div>
      <div className="px-0 md:px-20 sm:px-10  mx-20 sm:mx-10 md:mx-20 my-auto">
          <div className="w-full  space-y-8 ">
          <div>
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="mt-2 text-gray-600">
              Please sign up for your account.
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block font-bold text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value="Enter your email"
                className="w-full px-4 py-3 mt-1 border-gray-300 border-2 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-bold text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value="Enter your password"
                className="w-full px-4 py-3 mt-1 border-gray-300  border-2  rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-bold text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="password"
                type="password"
                value="Confirm your password"
                className="w-full px-4 py-3 mt-1 border-gray-300  border-2  rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
