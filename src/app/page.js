import { GiStarsStack } from "react-icons/gi";
import { IoLogoGithub } from "react-icons/io";
import { LuUserPlus2 } from "react-icons/lu";
import Card from "@/components/Card";


export default function Home() {


  const Skills = {
    frontend: ['React', 'Tailwind', 'HTML', 'CSS', 'JavaScript'],
    backend: ['Python', 'Django', 'Django REST Framework', 'Flask'],
    database: ['Postgres', 'MySQL', 'SQLServer'],
    devops: ['Linux', 'Git'],
  }


  const Projects = [
    {
      id: 1,
      name: 'DevHub',
      description: 'Plataforma para conectar desenvolvedores',
      icon: <IoLogoGithub size={40} />,
      link: 'https://www.devhub.app.br',
      languages: ['React', 'Django REST Framework'],
    }
  ]

  const Experience = [
    {
      id: 1,
      name: 'Defensoria Publica do Distrito Federal',
      description: 'Estágiario de desenvolvimento full stack',
      start_date: '08/2023',
      end_date: '07/2024',
      icon: <GiStarsStack size={40} />,
      link: 'https://www.defensoria.df.gov.br/',
      languages: ['Django', 'Django REST Framework', 'React', 'HTML', 'CSS', 'JavaSript', 'Swagger', 'Linux', 'Git'],
    }
  ]

  return (
    <main className="container mx-auto p-4 w-full flex flex-col items-center bg-transparent">

      <img
        alt="Gabriel Gontijo"
        src="https://media.licdn.com/dms/image/v2/D4D03AQGta27cWiG5PA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683504701308?e=1730937600&v=beta&t=2x5uu65w-HTKNdwiYELu1GyJmApEC2Cx0vqm4X_rmdU"
        className="w-40 h-40 sm:w-56 sm:h-56 object-cover rounded-full bg-gradient-to-r dark:bg-gray-200 bg-gray-900 p-1"
      />

      <h1 className="mt-4 text-2xl font-bold">
        Gabriel Gontijo
      </h1>

      <p>Full Stack</p>

      <ul className="flex gap-4 py-4 pb-2">
        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="transition hover:text-gray-700/75 dark:hover:text-gray-500"
          >
            <span className="sr-only">Instagram</span>
            <svg className="size-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/gontijogabriel"
            rel="noreferrer"
            target="_blank"
            className="transition hover:text-gray-700/75 dark:hover:text-gray-500"
          >
            <span className="sr-only">GitHub</span>
            <svg className="size-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/gontijogabriel/"
            rel="noreferrer"
            target="_blank"
            className="transition hover:text-gray-700/75 dark:hover:text-gray-500"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="size-8" fill="currentColor" viewBox="0 0 50 50" aria-hidden="true">
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://wa.me/61982073938"
            rel="noreferrer"
            target="_blank"
            className="transition hover:text-gray-700/75 dark:hover:text-gray-500"
          >
            <span className="sr-only">WhatsApp</span>

            <svg className="size-8" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" fill="#000000" />
            </svg>
          </a>
        </li>

      </ul>

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

      <section className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2 max-w-5xl w-full">

        <div className="flex flex-col rounded-lg p-2 gap-2">
          <h2 className="font-bold text-2xl">Projetos</h2>
          {Projects.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </div>

        <div className="flex flex-col rounded-lg p-2 gap-2">
          <h2 className="font-bold text-2xl">Experiência</h2>

          {Experience.map((card) => (
            <Card key={card.id} data={card} />
          ))}

        </div>
      </section>
    </main>
  );
}
