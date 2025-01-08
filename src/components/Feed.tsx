import { useState } from "react";

const Feed = () => {
  const [iscomment, setIsComment] = useState();

  return (
    <div className="cursor-pointer">    
      <div className="flex flex-col w-[70rem] mb-3">
        <div className="bg-white border-2 border-black rounded-md flex flex-col justify-start p-8">
          <h3 className="font-bold text-2xl mb-2">첫 번째 게시물</h3>
          <p> 메시지 </p>
          <p className="mt-5 text-sm text-black text-end">
            작성일 : <span>2025.01.20</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Feed;
