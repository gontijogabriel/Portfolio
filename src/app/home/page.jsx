

const Home = () => {
    const Skills = {
        frontend: ['React', 'Tailwind', 'HTML', 'CSS', 'JavaScript'],
        backend: ['Python', 'Django', 'Django REST Framework', 'Flask'],
        database: ['Postgres', 'MySQL', 'SQLServer'],
        devops: ['Linux', 'Git'],
    }

    return (
        <section className="container mx-auto">
            <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 sm:mt-28 mt-10">
                <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                    <div class="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">

                        <div className="flex flex-col items-center justify-center">
                            <img
                                alt="Gabriel Gontijo"
                                src="https://media.licdn.com/dms/image/v2/D4D03AQGta27cWiG5PA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683504701308?e=1730937600&v=beta&t=2x5uu65w-HTKNdwiYELu1GyJmApEC2Cx0vqm4X_rmdU"
                                className="w-40 h-40 sm:w-56 sm:h-56 object-cover rounded-full bg-gradient-to-r p-1"
                            />

                            <h2 class="text-3xl mt-2 font-bold sm:text-4xl">Gabriel Gontijo</h2>

                            <p class="mt-2 text-gray-700 font-bold">
                                Full Stack
                            </p>

                            <div>
                                <span className="flex flex-wrap gap-1 mt-2 justify-center">
                                    {Skills.frontend.map((skill) => (
                                        <span className="whitespace-nowrap rounded-full text-gray-700 px-2.5 font-bold py-0.5 text-xs bg-gray-400">
                                            {skill}
                                        </span>
                                    ))}
                                </span>

                                <span className="flex flex-wrap gap-1 mt-2 justify-center">
                                    {Skills.backend.map((skill) => (
                                        <span className="whitespace-nowrap rounded-full text-gray-700 px-2.5 font-bold py-0.5 text-xs bg-gray-400">
                                            {skill}
                                        </span>
                                    ))}
                                </span>

                                <span className="flex flex-wrap gap-1 mt-2 justify-center">
                                    {Skills.database.map((skill) => (
                                        <span className="whitespace-nowrap rounded-full text-gray-700 px-2.5 font-bold py-0.5 text-xs bg-gray-400">
                                            {skill}
                                        </span>
                                    ))}
                                </span>

                                <span className="flex flex-wrap gap-1 mt-2 justify-center">
                                    {Skills.devops.map((skill) => (
                                        <span className="whitespace-nowrap rounded-full text-gray-700 px-2.5 font-bold py-0.5 text-xs bg-gray-400">
                                            {skill}
                                        </span>
                                    ))}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        <a
                            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <span class="inline-block rounded-lg bg-gray-50 p-3">
                                <svg
                                    class="size-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    ></path>
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    ></path>
                                </svg>
                            </span>

                            <h2 class="mt-2 font-bold">Accountant</h2>

                            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </a>

                        <a
                            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <span class="inline-block rounded-lg bg-gray-50 p-3">
                                <svg
                                    class="size-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    ></path>
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    ></path>
                                </svg>
                            </span>

                            <h2 class="mt-2 font-bold">Accountant</h2>

                            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </a>

                        <a
                            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <span class="inline-block rounded-lg bg-gray-50 p-3">
                                <svg
                                    class="size-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    ></path>
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    ></path>
                                </svg>
                            </span>

                            <h2 class="mt-2 font-bold">Accountant</h2>

                            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </a>

                        <a
                            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <span class="inline-block rounded-lg bg-gray-50 p-3">
                                <svg
                                    class="size-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    ></path>
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    ></path>
                                </svg>
                            </span>

                            <h2 class="mt-2 font-bold">Accountant</h2>

                            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </a>

                        <a
                            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <span class="inline-block rounded-lg bg-gray-50 p-3">
                                <svg
                                    class="size-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    ></path>
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    ></path>
                                </svg>
                            </span>

                            <h2 class="mt-2 font-bold">Accountant</h2>

                            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </a>

                        <a
                            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <span class="inline-block rounded-lg bg-gray-50 p-3">
                                <svg
                                    class="size-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    ></path>
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    ></path>
                                </svg>
                            </span>

                            <h2 class="mt-2 font-bold">Accountant</h2>

                            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;