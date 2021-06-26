import React from "react";
import Blogs from "../Blogs/Blogs";
import PageLayout from '../PageLayout/PageLayout';

const Home = () => {
  return (
    <div>
      <PageLayout>   
        <Blogs />
      </PageLayout>
    </div>
  );
};

export default Home;
