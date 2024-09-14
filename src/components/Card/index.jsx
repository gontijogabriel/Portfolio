import Link from "next/link";

const Card = ({ data }) => {

  return (
    <Link 
        href={data.link} 
        className="flex items-start gap-4 p-2 dark:bg-gray-50 bg-gray-200 rounded-lg hover:bg-gray-300 shadow-md"
    >
      <div className="rounded-lg p-2 bg-blue-600 text-white">
        {data.icon}
      </div>
      <div>
        <h3 className="text-lg font-extrabold">{data.name}</h3>
        <p className="text-sm text-gray-900">{data.start_date}  {data.end_date}</p>
        <p className="text-sm text-gray-900">{data.description}</p>

        {data.languages && (
          <span className="flex flex-wrap gap-1 mt-1">
            {data.languages.map((skill) => (
              <span key={skill} className="whitespace-nowrap rounded-full text-gray-700 px-2.5 font-bold py-0.5 text-xs bg-gray-400">
                {skill}
              </span>
            ))}
          </span>
        )}
      </div>
    </Link>
  );
};

export default Card;