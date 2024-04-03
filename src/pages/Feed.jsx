import { useContext } from "react";
import SideBar from "../Components/SideBar";
import { VideoContext } from "../Context/VideoContext";
import Loader from "../Components/Loader";
import VideoCard from "../Components/VideoCard";
import ErrorDisplay from "../Components/ErrorDisplay";

const Feed = () => {
  const { videos, error, isLoading } = useContext(VideoContext);
  return (
    <div className="flex gap-10">
      <SideBar />

      <div className="videos">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorDisplay error={error} />
        ) : (
          videos?.map(
            (item) =>
              item.type === "video" && (
                <VideoCard video={item} key={item.videoId} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
