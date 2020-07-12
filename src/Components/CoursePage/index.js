import React, { useState } from "react";
import Player from "@vimeo/player";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Video(props) {
  const player = new Player("video-div", {
    id: props.id,
    width: 640,
  });
  player.on("play", function () {
    console.log("played the video!");
  });

  return <div></div>;
}

function CoursePage() {
  const { id } = useParams();
  const course = useSelector((state) => state.courses.courses[id]);
  const [video, setVideo] = useState(course.videos[0]);

  const renderVideos = () =>
    course.videos.map((video) => (
      <Nav.Link onClick={() => setVideo(video)}>{video.title}</Nav.Link>
    ));

  return (
    <div>
      <Nav defaultActiveKey="/home" className="flex-column">
        {renderVideos()}
      </Nav>
      <Video id={video.id} />
    </div>
  );
}

export default CoursePage;
