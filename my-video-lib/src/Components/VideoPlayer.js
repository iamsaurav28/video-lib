import { useVideo } from "../Context/VideoContext";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useToast } from "../Context/ToastContext";

export const VideoPlayer = () => {
  const { videoId } = useParams();
  const {
    state: { videoList },
    dispatch
  } = useVideo();

  const {
    toastState: { videoPlayerToastVisibility, videoPlayerToastText },
    toastDispatch
  } = useToast();

  const video = videoList.find((item) => item.id === Number(videoId));
  return (
    <div className="video-player">
      <ReactPlayer
        width="52rem"
        height="30rem"
        playing={true}
        controls
        url={video.url}
      />
      <div className="video-player-details">
        <div className="video-player-details-title">{video.title}</div>

        <button
          onClick={() => {
            dispatch({ type: "TOGGLE_LIKE_VIDEO", payload: video });
            toastDispatch({ type: "TOGGLE_VIDEO_PLAYER_TOAST_VISIBILITY" });
            toastDispatch({
              type: "SET_VIDEO_PLAYER_TOAST_TEXT",
              payload: video.isLiked
                ? "Removed from Liked videos"
                : "Added to Liked videos"
            });
            setTimeout(() => {
              toastDispatch({ type: "TOGGLE_VIDEO_PLAYER_TOAST_VISIBILITY" });
            }, 3000);
          }}
          className="video-player-details-button"
        >
          <i
            style={{ color: video.isLiked ? "blue" : "black" }}
            className="fas fa-thumbs-up fa-lg"
          ></i>
        </button>
        <hr style={{ margin: "0.5rem 0", width: "52rem" }} />
      </div>
      <div style={{ visibility: videoPlayerToastVisibility }} className="toast">
        <div className="toast-body">{videoPlayerToastText}</div>
      </div>
    </div>
  );
};
