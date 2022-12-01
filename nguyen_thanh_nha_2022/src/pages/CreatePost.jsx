import React from "react";
import { useFormik } from "formik";
import { pushNewPost } from "../redux/postsReducer";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

export default function CreatePost() {
  const dispatch = useDispatch();
  let day = new Date();
  const formik = useFormik({
    initialValues: {
      title: "",
      tags: "",
      content: "",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required(" Không bỏ trống !"),
      content: Yup.string().required("Không bỏ trống !"),
    }),
    onSubmit: (value) => {
      console.log(value);
      let newPost = {
        id: value.title,
        title: value.title,
        content: value.content,
        tags: [value.tags],
        created_at: `${day.getDate()} / ${day.getMonth()} / ${day.getFullYear()}`,
      };
      let action = pushNewPost(newPost);
      dispatch(action);
    },
  });
  return (
    <div>
      {/* Modal trigger button */}
      {/* <button
        type="button"
        className="btn btn-primary btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
      >
        Launch
      </button> */}
      {/* Modal Body */}
      {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
      <div
        className="modal fade"
        id="modalId"
        tabIndex={-1}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                Creata Post
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <p className="my-2">Title</p>
                  <input
                    type="text"
                    name="title"
                    onChange={formik.handleChange}
                    id="title"
                    className="form-control"
                  />
                  {formik.errors.title ? (
                    <p className="text-danger">{formik.errors.title}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group">
                  <p className="my-2">Tags</p>
                  <input
                    type="text"
                    name="tags"
                    onChange={formik.handleChange}
                    id="tags"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <p className="my-2">Content</p>
                  <input
                    type="texttarea"
                    name="content"
                    id="content"
                    onChange={formik.handleChange}
                    className="form-control"
                  />
                  {formik.errors.content ? (
                    <p className="text-danger">{formik.errors.content}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <button type="submit" className="btn btn-success my-2">
                    Create
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Optional: Place to the bottom of scripts */}
    </div>
  );
}
