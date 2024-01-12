import React from 'react'

const HistoryTimeline = () => {
    return (
        <div>

            {/* Timeline */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Heading */}
                <div className="ps-2 my-2 first:mt-0">
                    <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                        1 Aug, 2023
                    </h3>
                </div>
                {/* End Heading */}
                {/* Item */}
                <div className="flex gap-x-3">
                    {/* Icon */}
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                        <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600" />
                        </div>
                    </div>
                    {/* End Icon */}
                    {/* Right Content */}
                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                            <svg
                                className="flex-shrink-0 w-4 h-4 mt-1"
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
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1={16} x2={8} y1={13} y2={13} />
                                <line x1={16} x2={8} y1={17} y2={17} />
                                <line x1={10} x2={8} y1={9} y2={9} />
                            </svg>
                            Created "Preline in React" task
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Find more detailed insctructions here.
                        </p>
                        <button
                            type="button"
                            className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                            <img
                                className="flex-shrink-0 w-4 h-4 rounded-full"
                                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                                alt="Image Description"
                            />
                            James Collins
                        </button>
                    </div>
                    {/* End Right Content */}
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="flex gap-x-3">
                    {/* Icon */}
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                        <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600" />
                        </div>
                    </div>
                    {/* End Icon */}
                    {/* Right Content */}
                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                            Release v5.2.0 quick bug fix 🐞
                        </h3>
                        <button
                            type="button"
                            className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                            <span className="flex flex-shrink-0 justify-center items-center w-4 h-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                                A
                            </span>
                            Alex Gregarov
                        </button>
                    </div>
                    {/* End Right Content */}
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="flex gap-x-3">
                    {/* Icon */}
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                        <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600" />
                        </div>
                    </div>
                    {/* End Icon */}
                    {/* Right Content */}
                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                            Marked "Install Charts" completed
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Finally! You can check it out here.
                        </p>
                        <button
                            type="button"
                            className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                            <img
                                className="flex-shrink-0 w-4 h-4 rounded-full"
                                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                                alt="Image Description"
                            />
                            James Collins
                        </button>
                    </div>
                    {/* End Right Content */}
                </div>
                {/* End Item */}
                {/* Heading */}
                <div className="ps-2 my-2 first:mt-0">
                    <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                        31 Jul, 2023
                    </h3>
                </div>
                {/* End Heading */}
                {/* Item */}
                <div className="flex gap-x-3">
                    {/* Icon */}
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                        <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600" />
                        </div>
                    </div>
                    {/* End Icon */}
                    {/* Right Content */}
                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                            Take a break ⛳️
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Just chill for now... 😉
                        </p>
                    </div>
                    {/* End Right Content */}
                </div>
                {/* End Item */}
            </div>
            {/* End Timeline */}

        </div>
    )
}

export default HistoryTimeline