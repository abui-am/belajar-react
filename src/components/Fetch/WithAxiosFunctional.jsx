import React, { Component, Fragment } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
  Button,
} from 'reactstrap';
import axios from 'axios';
import CustomNavbar from '../Navbar/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';

const Post = ({ title, id }) => {
  const [comments, setComments] = useState([]);

  // Function untuk ngambil data comment
  async function getComment() {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    setComments(res.data);
  }

  return (
    <Col md={4} className='custom-card mb-4'>
      <Card>
        <CardBody>
          <CardTitle tag='h5'>{title}</CardTitle>
          <Button
            onClick={() => {
              getComment();
            }}
          >
            Button
          </Button>
          <div>
            {comments.map((data) => {
              return (
                <div className='mb-2' key={data.id}>
                  <div>
                    <b>{data.name}</b>
                  </div>
                  <div>{data.body}</div>
                </div>
              );
            })}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

const WithAxiosFunc = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <CustomNavbar />
      <button>Fetch</button>
      <div style={{ margin: 200 }}>
        <Row>
          {posts.map((data) => (
            <Post key={data.id} title={data?.title} id={data?.id} />
          ))}
        </Row>
      </div>
    </Fragment>
  );
};

export default WithAxiosFunc;
