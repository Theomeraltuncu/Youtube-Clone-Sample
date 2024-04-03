import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import VideoInfo from "./VideoInfo";
import ChannelInfo from "./ChannelInfo";
import VideoCard from "../../Components/VideoCard";
import VideoComment from "./VideoComment";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null);
  
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  useEffect(() => {
    api.get(`/video/info?id=${id}&extend=1`).then((res) => setVideo(res.data));

    api
      .get(`https://yt-api.p.rapidapi.com/comments?id=${id}`)
      .then((res) => setComments(res.data));
  }, [id]);

  return (
    <div className="detail-page h-screen overflow-auto p-5">
      <div>
        <div className="h-[50vh] lg:h-[60vh] rounded-md overflow-hidden">
          <ReactPlayer
            controls
            light
            width={"100%"}
            height={"100%"}
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>

        {!video && <p>Loading</p>}
        {video && comments && (
          <>
            {/* headline*/}
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>
            {/*channel info*/}
            <ChannelInfo video={video} />
            {/*video info*/}
            <VideoInfo video={video} />
            {/*comments*/} 
            <VideoComment data={comments} />
          </>
        )}
      </div>
      {/*related videos*/}
      <div className="flex flex-col gap-5 p-1 ">
        {video?.relatedVideos.data.map(
          (item) =>
            item.type == "video" && (
              <VideoCard key={item.videoId} video={item} isRow={true} />
            )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
