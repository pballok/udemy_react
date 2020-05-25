import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail avatarSrc={faker.image.avatar()} author="Sam" timeAgo="Today at 6:29PM" commentText="You wish!"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail avatarSrc={faker.image.avatar()} author="Dean" timeAgo="Today at 4:57PM" commentText="LOL"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail avatarSrc={faker.image.avatar()} author="Castiel" timeAgo="Today at 11:13AM" commentText="shutup dumbass"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail avatarSrc={faker.image.avatar()} author="Lucifer" timeAgo="Yesterday at 6:31PM" commentText="HELL YEAH!"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail avatarSrc={faker.image.avatar()} author="Crowley" timeAgo="Yesterday at 5:19PM" commentText="Hell RULEZZ!!11!"/>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
