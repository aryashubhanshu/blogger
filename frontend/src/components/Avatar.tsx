const Avatar = ({
  authorName,
  size = 6,
}: {
  authorName: string;
  size: number;
}) => {
  return (
    <div
      className={`rounded-full w-${size} h-${size} ${
        size === 4 ? `text-xs` : `text-sm`
      } flex items-center justify-center bg-zinc-600 text-white`}
    >
      {authorName.split("")[0].toUpperCase()}
    </div>
  );
};

export default Avatar;
