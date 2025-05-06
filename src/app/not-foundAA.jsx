import Navbar from "@/components/simple";

export default function Error404() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <a href="/" className="inline-flex">
              <span className="sr-only">IEEEAIUBSB</span>
              <img className="h-12 w-auto" src="/Branch logo-01.png" alt="" />
            </a>
          </div>
          <div className="py-16 mt-12">
            <div className="text-center">
              <p className="text-base font-semibold text-cyan-600"></p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                To be Announced Soon
              </h1>

              <div className="mt-28">
                <a
                  href="/"
                  className="text-base font-medium text-cyan-600 hover:text-cyan-500"
                >
                  Go back home
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
