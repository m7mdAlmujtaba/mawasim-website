import React, { useRef } from 'react';
import SinglePost from 'views/BlogSections/SinglePost';
import { useParams } from 'react-router-dom';
import Footer from 'components/Footers/Footer';
import MainNavbar from 'components/Navbars/MainNavbar';

const Post = () => {
  const { id } = useParams();
  const mainRef = useRef(null); // Create a ref using useRef

  return (
    <>
      <MainNavbar />
      <main ref={mainRef}> {/* Use the ref here */}
        <SinglePost match={{ params: { id } }} />
      </main>
      <Footer />
    </>
  );
};

export default Post;
