import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const REACT_APP_KEY = process.env.REACT_APP_KEY;

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: REACT_APP_KEY,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
