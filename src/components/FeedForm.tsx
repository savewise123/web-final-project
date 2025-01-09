import { Link } from "react-router-dom";
import { FaAngleUp, FaCommentDots } from "react-icons/fa6";

function FeedForm() {
  return (   
    <Link  
      to="/feeds/1"
      className="flex justify-between bg-white shadow-md p-6 rounded-lg"
    >
      <div>
        <button className="p-3 bg-gray-100 rounded-lg text-sm flex flex-col items-center gap-1 text-blue-950">
          <img
            src="/arrp.svg"
            alt="arrp"
            className="text-xs text-center font-b"
          />
          <div className="font-bold">1</div>
        </button>
      </div>
      <div className="flex-1 px-10 min-w-0 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-blue-950 text-xl font-bold">제목</h2>
          <h1 className="text-gray-600 truncate text-md">내용</h1>
        </div>
        <p className="text-right text-xs text-gray-600">작성일: 2024.11.12</p>
      </div>
      <div className="flex items-center gap-1 p-3 text-gray-600">
        <FaCommentDots className="text-gray-500 font-bold text-xl" />
        <div className="font-bold">1</div>
      </div>
    </Link>
  );
}

export default FeedForm;
