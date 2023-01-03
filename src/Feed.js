import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      <Post
        displayName="Naly Moslih"
        username="naly_moslih"
        verified={true}
        text="YOOO it is working"
        avatar="https://pbs.twimg.com/media/FADhDRwXoAA8Rbc.jpg"
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--tgHHeoRA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1m9xui8wjmxu85fkckbk.gif"
      />
      <Post
        displayName="Naly Moslih"
        username="naly_moslih"
        verified={true}
        text="YOOO it is working"
        avatar="https://pbs.twimg.com/media/FADhDRwXoAA8Rbc.jpg"
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--tgHHeoRA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1m9xui8wjmxu85fkckbk.gif"
      />
      <Post
        displayName="Naly Moslih"
        username="naly_moslih"
        verified={true}
        text="YOOO it is working"
        avatar="https://pbs.twimg.com/media/FADhDRwXoAA8Rbc.jpg"
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--tgHHeoRA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1m9xui8wjmxu85fkckbk.gif"
      />
      <Post
        displayName="Naly Moslih"
        username="naly_moslih"
        verified={true}
        text="YOOO it is working"
        avatar="https://pbs.twimg.com/media/FADhDRwXoAA8Rbc.jpg"
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--tgHHeoRA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1m9xui8wjmxu85fkckbk.gif"
      />
      <Post
        displayName="Naly Moslih"
        username="naly_moslih"
        verified={true}
        text="YOOO it is working"
        avatar="https://pbs.twimg.com/media/FADhDRwXoAA8Rbc.jpg"
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--tgHHeoRA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1m9xui8wjmxu85fkckbk.gif"
      />
      <Post
        displayName="Naly Moslih"
        username="naly_moslih"
        verified={true}
        text="YOOO it is working"
        avatar="https://pbs.twimg.com/media/FADhDRwXoAA8Rbc.jpg"
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--tgHHeoRA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1m9xui8wjmxu85fkckbk.gif"
      />
      <Post
        displayName="Naly Moslih"
        username="naly_moslih"
        verified={true}
        text="YOOO it is working"
        avatar="https://pbs.twimg.com/media/FADhDRwXoAA8Rbc.jpg"
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--tgHHeoRA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1m9xui8wjmxu85fkckbk.gif"
      />
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default Feed;
