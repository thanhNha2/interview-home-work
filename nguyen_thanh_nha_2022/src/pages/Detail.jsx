import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setPostDetail } from "../redux/postsReducer";

export default function Detail() {
  const prams = useParams();
  const { arrPost } = useSelector((state) => state.postsReducer);
  console.log({ arrPost });

  const dispatch = useDispatch();
  console.log("prams: ", prams.id);
  useEffect(() => {
    //   let action = setPostDetail(prams.id);
    //   dispatch(action);
    let post = arrPost?.find((item) => item.id === prams.id);
    console.log({ post });
    console.log("useEffect chay");
  });
  return <div>Detail</div>;
}
