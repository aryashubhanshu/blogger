const BlogSkeleton = () => {
  return (
    <div
      role="status"
      className="animate-pulse py-4 px-1 border-b border-zinc-200 cursor-pointer w-[36rem]"
    >
      <div className="flex gap-2 items-center flex-nowrap">
        <div className="h-4 w-4 rounded-full bg-gray-200 my-4" />
        <div className="text-zinc-600 text-sm">
          <div className="h-2 bg-gray-200 rounded-full max-w-[150px] my-2"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-[250px] my-2"></div>
        </div>
      </div>

      <div className="h-4 bg-gray-200 rounded-full max-w-[360px]"></div>
      <p className="text-zinc-600 mb-2 text-md font-thin my-2">
        <div className="h-2 bg-gray-200 rounded-full max-w-[150px]"></div>
      </p>
      <p className="text-zinc-600 mb-2 text-md font-thin">
        <div className="h-2 bg-gray-200 rounded-full max-w-[150px]"></div>
      </p>
    </div>
  );
};

export default BlogSkeleton;
