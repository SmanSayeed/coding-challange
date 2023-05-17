import ProblemCard from "@/components/Cards/ProblemCard/ProblemCard";
import { ProblemItem } from "@/services/constants/interfaces";
import { problems } from "@/services/constants/problems";
import React from "react";

problems;

type Props = {
  params: {
    challenge_category: string;
  };
};

const Page = ({ params: { challenge_category } }: Props) => {
  return (
    <div>
      <div className="bg-black w-full p-3 flex justify-center items-center text-white text-[20px]">
        <p>{challenge_category} Problems</p>
      </div>

      <div className="card-list flex flex-col gap-3 p-3  ">
        {problems.map((item: ProblemItem, index: number) => (
          <React.Fragment key={index}>
            <ProblemCard problemDetails={item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Page;
