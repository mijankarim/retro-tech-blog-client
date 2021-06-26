import React from "react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Button } from "react-bootstrap";
import Sidebar from "../Admin/Sidebar";

const AddBlog = () => {
  const { register, handleSubmit, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const [success, setSuccess] = useState(false);
  const [uploading, setUploading] = useState("");

  const handleImageUpload = (e) => {
    const imageData = new FormData();
    setUploading("Image is uploading. Please wait...");
    imageData.set("key", "f1b234c6634087691b128af5c97f102f");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        setImageURL(response.data.data.display_url);
        setUploading("Image uploaded Successfully!");
      })
      .catch((error) => {});
  };

  const onSubmit = (data, e) => {
    e.target.reset();
    const blogData = {
      title: data.blogTitle,
      content: data.blogContent,
      image: imageURL,
    };

    const url = `https://mighty-anchorage-93647.herokuapp.com/addBlog`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    }).then((res) => {
      if (res.ok) {
        setSuccess(true);
        setUploading("");
        console.log(blogData);
      }
    });
  };

  const handleOnfocus = () => {
    setSuccess(false);
  };

  return (
    <Container className="mt-5 dashboard">
      <Row>
        <Col sm={3}>
          <Sidebar />
        </Col>
        <Col sm={9} className="py-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Container>
              <Row>
                <h3 className="mb-3 ml-3">Add Blog</h3>
              </Row>

              <Row className="mb-3">
                <Col>
                  <label className="mb-2">Blog Title</label>
                  <br />
                  <input
                    className="form-control"
                    onFocus={handleOnfocus}
                    name="blogTitle"
                    placeholder="Enter Title"
                    ref={register({ required: true })}
                  />
                  {errors.blogTitle && <span>This field is required</span>}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <label className="mb-2">Content</label>
                  <br />
                  <textarea
                    className="form-control"
                    name="blogContent"
                    placeholder="Enter Description"
                    ref={register({ required: true })}
                  />
                  {errors.blogContent && <span>This field is required</span>}
                </Col>
              </Row>

              <Row>
                <Col>
                  <label className="mb-2">Upload Image</label>
                  <br />
                  <input
                    className="form-control file-upload"
                    name="blogImage"
                    type="file"
                    onChange={handleImageUpload}
                    ref={register({ required: true })}
                  />
                  <span className="text-success">{uploading}</span>
                  {errors.blogImage && <span>This field is required</span>}
                </Col>
              </Row>

              <Button className="my-3" type="submit">
                Submit
              </Button>
              {success && (
                <h4 className="text-success w-100 text-center mt-5">
                  Blog saved Successfully.
                </h4>
              )}
            </Container>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddBlog;
