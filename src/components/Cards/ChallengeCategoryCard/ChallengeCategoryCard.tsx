import Link from "next/link";

type Props = {
  title: string;
  details: string;
  count: number;
  bg?: string;
  bgImg?: string;
  titleColor?: string;
  categoryId: string;
};

const ChallengeCategoryCard = ({
  titleColor,
  bg,
  title,
  details,
  count,
  categoryId,
}: Props) => {
  return (
    <>
      <div
        className={`min-h-[30vh] w-[80%] lg:w-[30%] bg-blue-200 ${bg} shadow-lg rounded-md flex flex-col justify-between items-center`}
      >
        <div
          className={`card-header w-full text-center bg-black text-green-500  font-bold rounded-t-md py-3 ${titleColor}`}
        >
          {title}
        </div>
        <div className="card-body flex flex-col justify-between items-start gap-2 p-2 w-full">
          <div className="details">{details}</div>

          <div className="count  text-white 00 p-1 rounded flex justify-center items-center">
            Total {count} tasks
          </div>
        </div>
        <div className="card-footer text-gray-800 rounded-b bg-gray-300 w-full hover:bg-green-800 hover:text-green-200">
          <Link prefetch={false} href={`/challenges/category/${categoryId}`}>
            <button className="w-full text-center  font-bold p-2 rounded-b-sm">
              Choose this category
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChallengeCategoryCard;
