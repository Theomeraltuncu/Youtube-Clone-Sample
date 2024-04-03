import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";

const VideoComment = ({ data }) => {
  return (
    <div className="my-6">
      <h2 className="text-xl font-bold">{data.commentsCount} Comment</h2>
      <input
        className="w-full bg-transparent border-b p-2 outline-none"
        placeholder="Add your comment"
        type="text"
      />

      {data.data.map((i) => (
        <div className="flex gap-2 items-start px-1 py-4">
          <img className="rounded-full" src={i.authorThumbnail[0].url} alt="" />
          <div className="flex flex-col gap-2">
            <h5 className="flex gap-2 items-center">
              <span className="text-semibold">{i.authorText}</span>
              <span className="text-sm text-gray-400">
                {i.publishedTimeText}
              </span>
            </h5>

            <p>{i.textDisplay}</p>

            <div className="flex gap-5 items-center">
              <div className="flex gap-1 hover:bg-gray-700 p-1 rounded cursor-pointer">
                <AiFillLike />
                <span className="text-sm text-gray-400">{i.likesCount}</span>
              </div>

              <div className="flex gap-1 hover:bg-gray-700 p-1 rounded cursor-pointer">
                <AiFillDislike />
                <span className="hover:bg-gray-700 p-1 rounded cursor-pointer">
                  Reply
                </span>
              </div>
            </div>

            {i.replyCount > 0 && (
              <div className="flex w-fit items-center p-1 rounded-md gap-2 text-blue-500 hover:bg-[#36639662]">
                <TiArrowSortedDown />
                {i.replyCount} Replies
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoComment;
