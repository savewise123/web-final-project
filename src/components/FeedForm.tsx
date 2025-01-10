function FeedForm() {
  return (
    <div className="flex flex-col gap-3 bg-white shadow-md p-6 rounded-lg">
      <form className="flex flex-col gap-3">
        <h1 className="text-blue-950 text-5xl font-semibold p-5">글추가</h1>
        <h2 className="text-blue-950 font-semibold">제목</h2>
        <textarea className="border border-gray-200 rounded-lg h-[200px] p-3 resize-none" />
        <h2 className="text-blue-950 font-semibold">내용</h2>
        <textarea className="border border-gray-200 rounded-lg h-[500px] p-3 resize-none" />
        <button
          type="submit"
          className=" px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          추가
        </button>
      </form>
    </div>
  );
}

export default FeedForm;
