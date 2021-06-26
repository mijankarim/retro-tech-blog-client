import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button, Spinner } from "react-bootstrap";

import { FaTrashAlt } from "react-icons/fa";
import Sidebar from "../Admin/Sidebar";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    fetch("https://mighty-anchorage-93647.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      });
  }, [blogs]);

  const handleDelete = (id) => {
    fetch(`https://mighty-anchorage-93647.herokuapp.com/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setDeleted(true);
        }
      });
  };

  return (
    <Container className="dashboard mt-5">
      <Row>
        <Col sm={4}>
          <Sidebar />
        </Col>
        <Col sm={8} className="py-5">
          {isLoading ? (
            <div className="d-flex align-items-center justify-content-center loader">
              <Spinner animation="border" variant="danger" />
            </div>
          ) : (
            <>
              <h3 className="mb-4">Manage Blogs</h3>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th> Title</th>
                    <th>Content</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr key={blog._id}>
                      <td>{blog.title}</td>
                      <td><div className="limit-text">{blog.content}</div></td>
                      
                      <td className="text-center">
                        <Button
                          className="ml-2"
                          onClick={() => handleDelete(`${blog._id}`)}
                        >
                          <FaTrashAlt />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              {deleted && (
                <p className="text-success w-100 text-center my-3">
                  Blog deleted Successfully
                </p>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ManageBlogs;
