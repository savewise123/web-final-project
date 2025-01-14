// react-icons는 용량이 매우 크다 -> 사실 권장 X -> 지금은 쉽게 개발하는 게 목적
import { FaAngleUp, FaCommentDots } from "react-icons/fa6";
import { Link } from "react-router-dom";
import supabase from "../utils/supabase";
import { useQuery } from "@tanstack/react-query";

interface FeedProps {
  id: string;
  title: string;
  content: string;
  created_At: string;
  user_id: string;
}

function Feed({ feed }: { feed: FeedProps }) {
  const getComments = async () => {
    const { data, error } = await supabase.from("comments").select("*");

    if (error) {
      throw new Error(
        `feed 데이터를 조회하는 중 에러가 발생했습니다. ${error.message}`
      );
    }

    console.log("getComments", data);
    return data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["comments"],
    queryFn: getComments,
  });

  if (isLoading) return <div>로딩 중 ...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;

  return (
    <Link
      to="/feeds/1"
      className="flex justify-between bg-white shadow-md p-6 rounded-lg"
    >
      <div>
        <button className="p-3 bg-gray-100 rounded-lg text-sm flex flex-col items-center gap-1 text-blue-950">
          <FaAngleUp className="text-xs text-center font-bold" />
          <div className="font-bold">1</div>
        </button>
      </div>
      <div className="flex-1 px-10 min-w-0 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-blue-950 text-xl font-bold">{feed.title}</h2>
          <p className="text-gray-600 truncate text-md">{feed.content}</p>
        </div>
        <p className="text-right text-xs text-gray-600">
          작성일: {new Date(feed.created_at).toLocaleDateString()}
        </p>
      </div>
      <div className="flex items-center gap-1 p-3 text-gray-600">
        <FaCommentDots className="text-gray-500 font-bold text-xl" />
        <div className="font-bold">1</div>
      </div>
    </Link>
  );
}

export default Feed;
