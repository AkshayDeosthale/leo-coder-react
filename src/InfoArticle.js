import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArticleDetails = () => {
  const { id } = useParams();
  const [articleData, getarticleData] = useState();
  const getData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    const articleData = await res.json();
    getarticleData(articleData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-1/2 h-1/3 border rounded-lg p-2 flex flex-col space-y-3">
        <div className="h-1/3 w-full border rounded-lg p-2">
          <span className="font-semibold text-red-500">Title :</span>
          <span>{articleData?.title}</span>
        </div>
        <div className="h-1/3 w-full border rounded-lg p-2 flex-wrap">
          <span className="font-semibold text-blue-500">Description :</span>
          <span>{articleData?.body}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
