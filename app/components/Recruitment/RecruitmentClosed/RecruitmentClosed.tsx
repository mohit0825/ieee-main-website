import React from 'react'

const RecruitmentClosed = () => {
    return (
        <div>

            <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full  mt-12">
                <header className="mb-auto flex justify-center z-50 w-full py-4">
                    <nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
                        <a
                            className="flex-none text-xl font-semibold sm:text-3xl dark:text-white text-red-700"
                            href="#"
                            aria-label="Brand"
                        >
                            CLOSED
                        </a>
                    </nav>
                </header>
                <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                    <h1 className="block text-5xl sm:text-7xl font-bold text-gray-800 dark:text-white">
                        Recruitments
                    </h1>
                    <h1 className="block text-2xl font-bold text-white" />
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                        Thank you for your interest in joining our team! Our recruitment process is currently closed. We appreciate your enthusiasm. Stay tuned for updates, as we'll be opening recruitment soon.</p>
                    <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                        <a
                            className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            href="../examples.html"
                        >
                            <svg
                                className="flex-shrink-0 w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                            Back to About IEEE SRM
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RecruitmentClosed