import { IoPersonCircleOutline } from "react-icons/io5";
import useAuthStore from "../stores/useAuthStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface CommentProps {
  id: string;
  content: string;
  created_at: string;
  feed_id: string;
  user_id: string;
  user: {
    id: string;
    nickname: string;
    email: string;
    img_url: string;  
  };
}
const queryClient = useQueryClient();

const deleteMutation = useMutation({
  mutationFn: deleteComment,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["comments"] });
  },
});

const handleDelete = () => {
  if (window.confirm(`"${comment.content}" 댓글을 삭제하시겠습니까 ?`)) {
    window.alert("삭제했습니다 !");
  } else {
    alert("취소 버튼을 클릭했습니다 !");
  }
};

export default function Comment({ comment }: { comment: CommentProps }) {
  const { user } = useAuthStore();
  return (
    <>
      <div className="flex gap-2.5">
        {comment.user.img_url ? (
          <img
            src={comment.user.img_url}
            alt="profile"
            className="w-12 h-12 rounded-full mr-6"
          />
        ) : (
          <IoPersonCircleOutline className="w-12 h-12 rounded-full mr-6" />
        )}
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex flex-col gap-1">
            <div className="text-slate-900 font-bold text-sm">
              {comment.user.nickname
                ? comment.user.nickname
                : comment.user.email}
            </div>
          </div>
          <div className="text-gray-500">{comment.content}</div>
        </div>
        {/* 내가 로그인할때만 보인다 */}
        {user?.id === comment.user_id ? (
          <div className="flex items-end gap-2">
            <button className="text-white bg-yellow-500 px-4 py-2 rounded-md">
              수정
            </button>
            <button
              className="text-white bg-red-500 px-4 py-2 rounded-md"
              onClick={handleDelete}
            >
              삭제
            </button>
          </div>
        ) : null}
      </div>
      <hr className="m-0 border-t border-gray-200" />
    </>
  );
}
