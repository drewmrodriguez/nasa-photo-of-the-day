import React, { useState, useEffect } from "react";

import NavBar from "./NavBar";
import axios from "axios";

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(()=> {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=7Jgd7Ewd6gZ3UK0bg32Fsu4E2XuefbrUPMv03teN')
    .then(response => {
      setPhotoData(response.data);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  if (!photoData) return <div />;

  return (
    <>
    <NavBar />
    <div className="nasa-photo">
      {photoData.media_type === "image" ? (
        <img
          src={photoData.url}
          alt={photoData.title}
          className="photo"
        />
      ) : (
        <iframe
          title="space-video"
          src={photoData.url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="photo"
        />
      )}
      <div>
        <h1>{photoData.title}</h1>
        <p className="date">{photoData.date}</p>
        <p className="explanation">{photoData.explanation}</p>
      </div>
    </div>
    </>
  );
}

