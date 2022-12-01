import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deletePost, setPostsReducer } from "../redux/postsReducer";
import CreatePost from "./CreatePost";

export default function Home() {
  const { arrPost } = useSelector((state) => state.postsReducer);
  const { arrComment } = useSelector((state) => state.commentsReducer);
  const { arrUser } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  console.log({ arrPost, arrComment, arrUser });

  const deletePost = (id) => {
    let indexDel = arrPost.findIndex((item) => item.id === id);
    let arrDel = [...arrPost];
    arrDel.splice(indexDel, 1);
    let action = setPostsReducer(arrDel);
    dispatch(action);
  };
  const editPost = (id) => {
    console.log({ id });
  };
  const renderPost = () => {
    return arrPost.map((item, index) => {
      return (
        <div key={index}>
          <h1 className="text-center py-5">{item.title}</h1>
          <div className="row info">
            <div className="col-6 py-3">
              <h2>Author: {renderName(item.owner)}</h2>
              <p>Created at : {item.created_at}</p>
            </div>
            <div className="col-6 tags">
              {item.tags?.map((item, index) => {
                return (
                  <button className=" btn  mx-3" key={index}>
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="desc">
            <p>
              {item.content.length
                ? item.content.slice(0, 500) + "..."
                : item.content}
            </p>
            <NavLink to={`detail/${item.id}`}>View more</NavLink>
            <button
              className="btn btn-danger mx-3"
              onClick={() => {
                deletePost(item.id);
              }}
            >
              Delete
            </button>
          </div>
          <hr />
          {renderCommment(item.id)}
        </div>
      );
    });
  };
  const renderName = (id) => {
    let index = arrUser.findIndex((item) => item.id === id);
    return arrUser[index]?.name;
  };
  const renderCommment = (id) => {
    let commentsPost = arrComment.filter((item) => item.post === id);
    console.log({ commentsPost });
    return commentsPost.map((item, index) => {
      return (
        <div className="comment" key={index}>
          <div className="row">
            <div className="col-2">
              <img
                className="w-50"
                src={`https://i.pravatar.cc?u=${item.id}`}
                alt="..."
              />
            </div>
            <div className="col-10">
              <div className="d-flex">
                <p className="px-2 name">{renderName(item.owner)}</p>
                <p>{item.created_at}</p>
              </div>
              <p>{item.content}</p>
            </div>
          </div>
          <hr />
        </div>
      );
    });
  };

  const handleSubmit = (e) => {
    const { value } = document.querySelector("#search");
    console.log({ value });
    // e.preventDefault();
    let arrSearch = arrPost.filter((item) => item.title === value);

    let action = setPostsReducer(arrSearch);
    dispatch(action);
  };

  return (
    <div className="container home">
      <CreatePost />
      <div className="search">
        <button
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
        >
          Create Post
        </button>
        <div className="form-group ">
          <input
            type="search"
            name="search"
            id="search"
            className="form-control"
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-success mx-2 "
            onClick={handleSubmit}
          />
        </div>
      </div>
      {renderPost()}
    </div>
  );
}
