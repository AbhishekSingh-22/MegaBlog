import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config.js";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  const [img, setImg] = useState("");

  const getImg = async () => {
    const img = await appwriteService.getFilePreview(featuredImage);
    setImg(img);
  };

  useEffect(() => {
    getImg();
  }, []);

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img src={img.href} alt={title} className="rounded-xl" />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
