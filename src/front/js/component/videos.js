import React from "react";
import "../../styles/home.css";

export const Video = () => {
  return (
    <div className="mt-1 bg-transparent">
      <iframe 
        src="https://www.youtube.com/embed/t6wZR2P-ZqA"
        frameborder="10"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        width="400"
        height="315"
           >
      </iframe>
      <iframe
        src="https://www.youtube.com/embed/-dYwGxLulOY"
        frameborder="10"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        width="400"
        height="315">
      </iframe><iframe
        src="https://www.youtube.com/embed/34sxyECkEkw
        "
        frameborder="10"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        width="400"
        height="315">
      </iframe><iframe
        src="https://www.youtube.com/embed/u1lZ9FN2Mxs"
        frameborder="10"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        width="400"
        height="315">
      </iframe><iframe 
        src="https://www.youtube.com/embed/L6_Q9ZkjeEk"
        frameborder="10"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        width="400"
        height="315">
      </iframe>{" "}
    </div>
  );
};
