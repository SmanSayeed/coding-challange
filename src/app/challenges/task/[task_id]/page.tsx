import ProblemCard from "@/components/Cards/ProblemCard/ProblemCard";
import { problems } from "@/services/constants/problems";

problems;

type Props = {
  params: {
    task_id: string;
  };
};

const Page = ({ params: { task_id } }: Props) => {
  const item: any = problems.find((p) => p.problemId === task_id);
  return (
    <div>
      <div className="bg-black w-full p-3 flex justify-center items-center text-white text-[20px]">
        <p>Task no: {task_id}</p>
      </div>

      <div className="card-list flex flex-col gap-3 p-3  ">
        <ProblemCard problemDetails={item} />
      </div>
    </div>
  );
};

export default Page;
