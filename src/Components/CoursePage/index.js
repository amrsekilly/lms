import React, { useEffect } from "react";
import Player from "@vimeo/player";
import { Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setCurrentVideo } from "../../store/action-creators/user";

function Video(props) {
  const videoContainer = document.getElementById("video-div");
  if (videoContainer) {
    videoContainer.parentNode.removeChild(videoContainer);
  }
  const newContainer = document.createElement("div");
  newContainer.setAttribute("id", "video-div");
  document.getElementsByTagName("body")[0].appendChild(newContainer);

  const player = new Player("video-div", {
    id: props.id,
    width: 640,
  });
  console.log("Video -> player", player);
  player.on("play", function () {
    console.log("played the video!");
  });

  return <div></div>;
}

function CoursePage() {
  const { id } = useParams();
  const course = useSelector((state) => state.courses.courses[id]);
  const video = useSelector((state) => state.user.currentVideo);
  // const [video, setVideo] = useState(course.videos[0]);
  const dispatch = useDispatch();
  // dispatch(setCurrentVideo(course.videos[0]));

  useEffect(() => {
    return () => {
      const videoContainer = document.getElementById("video-div");
      videoContainer.parentNode.removeChild(videoContainer);
    };
  }, []);

  const renderVideos = () =>
    course.videos.map((video) => (
      <Nav.Link onClick={() => dispatch(setCurrentVideo(video))}>
        {video.title}
      </Nav.Link>
    ));

  return (
    <div>
      <Nav defaultActiveKey="/home" className="flex-column">
        {renderVideos()}
      </Nav>
      <h2>{video.title}</h2>

      <Video id={video.id} />
    </div>
  );
}

export default CoursePage;
