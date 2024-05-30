import React, { useRef } from 'react';
import SinglePost from 'views/IndexSections/SinglePost';
import { useParams } from 'react-router-dom';
import SimpleFooter from 'components/Footers/SimpleFooter';
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
      <SimpleFooter />
    </>
  );
};

export default Post;
