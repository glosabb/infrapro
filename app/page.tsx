import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Find specialized infrastructure professionals
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  InfraPro connects qualified HVAC and electrical professionals with the right opportunities. Find your next job or hire skilled experts today.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/jobs"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Find Jobs
                  </Link>
                  <Link href="/post-job" className="text-sm font-semibold leading-6 text-gray-900">
                    Post a Job <span aria-hidden="true">?</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" aria-hidden="true" />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                            Job Dashboard
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">Matches</div>
                        </div>
                      </div>
                      <div className="px-6 pt-6 pb-14 bg-gradient-to-b from-gray-800 to-gray-900">
                        {/* Simulated job interface */}
                        <div className="mb-4 rounded-lg bg-white p-4 shadow-md">
                          <div className="flex justify-between">
                            <div>
                              <div className="font-medium text-gray-900">HVAC Systems Specialist</div>
                              <div className="text-sm text-gray-500">Atlanta Medical Center</div>
                            </div>
                            <div className="flex items-center">
                              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                98% Match
                              </span>
                            </div>
                          </div>
                          <div className="mt-2 flex gap-2">
                            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                              Commercial HVAC
                            </span>
                            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                              -65/hr
                            </span>
                          </div>
                        </div>
                        {/* Add another simulated job item */}
                        <div className="rounded-lg bg-white p-4 shadow-md">
                          <div className="flex justify-between">
                            <div>
                              <div className="font-medium text-gray-900">Electrical Infrastructure Technician</div>
                              <div className="text-sm text-gray-500">Peachtree Office Tower</div>
                            </div>
                            <div className="flex items-center">
                              <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                                92% Match
                              </span>
                            </div>
                          </div>
                          <div className="mt-2 flex gap-2">
                            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                              Electrical
                            </span>
                            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                              -52/hr
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="mt-8 sm:mt-12 xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left xl:col-span-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">How InfraPro Works</span>
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              1
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-900">Create Your Profile</h3>
              <p className="mt-2 text-base text-gray-500">
                Sign up and showcase your specialized skills and experience with a detailed professional profile.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              2
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-900">Get Matched With Jobs</h3>
              <p className="mt-2 text-base text-gray-500">
                Our platform connects you with relevant opportunities based on your skills and preferences.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              3
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-900">Apply With Confidence</h3>
              <p className="mt-2 text-base text-gray-500">
                Apply to jobs knowing the market rates and required skills are a match for your expertise.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-indigo-700 mt-16">
        <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to find your next opportunity?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Join InfraPro today and connect with top employers in HVAC and electrical infrastructure.
          </p>
          
            href="/register"
            className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto"
          >
            Sign up for free
          </a>
        </div>
      </div>
    </div>
  )
}
