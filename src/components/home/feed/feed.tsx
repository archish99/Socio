import React from 'react';
import Post from './post';

const Feed: React.FC = () => {
  return (
    <>
      <Post
        username="Archish"
        designation="Developer"
        postImg="https://www.gravatar.com/avatar/1b8fabaa8d66250a7049bdb9ecf44397?s=250&d=mm&r=x"
        commentCount={0}
        likeCount={0}
        isLiked={false}
        isSaved={false}
        profileImg="https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg"
        postDesc="This is a test post"
      />
      <Post
        username="Archish"
        designation="Developer"
        postImg="https://www.gravatar.com/avatar/1b8fabaa8d66250a7049bdb9ecf44397?s=250&d=mm&r=x"
        commentCount={0}
        likeCount={0}
        isLiked={false}
        isSaved={false}
        profileImg="https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg"
        postDesc="This is another test post"
      />
    </>
  );
};

export default Feed;
