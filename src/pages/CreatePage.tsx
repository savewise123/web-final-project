import { useState } from "react";
import FeedForm from "../components/FeedForm";
import { useMutation } from "@tanstack/react-query";
import supabase from "../utils/supabase";
import useAuthStore from "../stores/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function CreatePage() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const addFeedMutation = useMutation({
    mutationFn: async () => {
      if (!user) {
        alert("로그인후 이용해주세요");
      }
      await supabase.from("feeds").insert({
        title,
        content,
        user_id: user?.id,
      });
    },
    onSuccess: () => {
      navigate("/");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addFeedMutation.mutate();
  };

  return (
    <FeedForm
      pageTitle="글 추가"
      title={title}
      content={content}
      handleTitleChange={handleTitleChange}
      handleContentChange={handleContentChange}
      handleSubmit={handleSubmit}
    >
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        추가
      </button>
    </FeedForm>
  );
}
