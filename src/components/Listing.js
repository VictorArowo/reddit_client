import React from 'react';
import { Post } from './~reusables/molecules/Post';

const Listing = props => {
  return (
    <Post>
      <h4>{props.data.subreddit_name_prefixed}</h4>
      <h2>Title - {props.data.title}</h2>
      {props.data.thumbnail !== 'self' ? (
        <img src={props.data.thumbnail} alt="thumbnail" />
      ) : (
        <p>{props.data.selftext}</p>
      )}
    </Post>
  );
};

export default Listing;
