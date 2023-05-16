type Props = {
  title: string;
  details: string;
  count: number;
  bg?:string;
  bgImg?:string;
  titleColor?:string;
};

const ChallengeCategoryCard = ({ titleColor,bg,title, details, count }: Props) => {
  return (
    <>
      <div className={`min-h-[30vh] w-[30%] bg-blue-200 ${bg} shadow-lg rounded-md flex flex-col justify-between items-center`}>
        <div className={`card-header w-full text-center bg-black text-green-500  font-bold rounded-t-md py-3 ${titleColor}`}>
          {title}
        </div>
        <div className="card-body">
          <div className="details">{details}</div>
          <div className="count ">Total = {count}</div>
        </div>
        <div className="card-footer text-gray-800 rounded-b bg-gray-300 w-full hover:bg-gray-800 hover:text-green-200">
          <button className="w-full text-center  font-bold p-2 rounded-b-sm">Choose this category</button>
        </div>
      </div>
    </>
  );
};

export default ChallengeCategoryCard;
