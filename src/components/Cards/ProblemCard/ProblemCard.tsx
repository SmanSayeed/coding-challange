import { ProblemItem } from "@/services/constants/interfaces";
import ReactHtmlParser from "html-react-parser";
import Link from "next/link";

type Props = {
  problemDetails: ProblemItem;
};

const ProblemCard = ({ problemDetails }: Props) => {
  const { categoryId, problemId, title, tags, level, target, description } =
    problemDetails;
  return (
    <div className="w-full min-h-[200px] border-md bg-white border-2 border-green-500 shadow-lg flex flex-col justify-between rounded-md mt-10">
      <Link
        href={`/challenges/task/${problemId}`}
        className=" w-30 bg-gray-900 flex flex-col justify-center items-center text-green-500 p-1"
      >
        <p className="">Task id # {problemId}</p>
        <p className="text-[30px] font-bold">{title}</p>
        <p className="">{level} level</p>
      </Link>
      <div className=" flex-grow flex flex-col md:flex-row w-full">
        <div className="target bg-orange-400 lg:w-[50%] sm:w-full p-2">
          <p className="font-bold">Task goal</p>
          <ul className="my-5">
            {target.map((item: string, index: number) => (
              <li className="my-5" key={index}>
                {item}
              </li>
            ))}
          </ul>

          <div className="tags">
            <p className="font-bold">Required skills:</p>
            {tags.map((item: string, index: number) => (
              <span
                className="mx-2 my-2 bg-green-800 text-white rounded-md p-1"
                key={index}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="details bg-orange-300  lg:w-[50%] sm:w-full p-2 flex flex-col justify-start items-start overflow-auto">
          {ReactHtmlParser(description)}
        </div>
      </div>
      {/* <div className="button bg-gray-500 w-30">
        <Link className="w-full py-3 flex justify-center items-center hover:bg-gray-800 text-white" href={`/challenges/challenge_task/${problemId}`}>
          <button className="">Details</button>
        </Link>
      </div> */}
    </div>
  );
};

export default ProblemCard;
