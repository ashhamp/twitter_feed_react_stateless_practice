import React from 'react';

const Tweet = props => {

  let date = new Date(+props.date).toDateString().split(' ');

  let retweetClassName;

  if (props.retweeted) {
    retweetClassName = "small-3 columns tweet-no-padding green-text";
  } else {
    retweetClassName = "small-3 columns tweet-no-padding";
  }

  let favoriteClassName;

  if (props.favorited) {
    favoriteClassName = "small-3 columns tweet-no-padding red-text";
  } else {
    favoriteClassName = "small-3 columns tweet-no-padding";
  }

  let imgDiv;

  if (props.tweetImgUrl) {
    imgDiv = <div className="small-12 columns tweet-no-padding img-div">
      <img src={props.tweetImgUrl}></img>
    </div>
  }

  return (
    <div className="small-12 columns tweet-border">
      <div className="small-1 columns img-margin">
        <img src={props.imgUrl}></img>
      </div>
      <div className="small-11 columns">
        <div className="small-12 columns tweet-no-padding">
          <div className="inline margin-name">{props.userName}</div>
          <div className="greytext inline">
            @{props.screenName} &#8226; {date[1]} {date[2]}
          </div>
        </div>
        <div className="small-12 columns tweet-no-padding">
          {props.text}
        </div>

      {imgDiv}
      <div className="small-12 columns tweet-icons tweet-no-padding">
        <div className="small-3 columns tweet-no-padding">
          <i className="fa fa-reply" aria-hidden="true" onClick={props.handleReply}></i>
        </div>
        <div className={retweetClassName}>
          <i className="fa fa-retweet inline icon-margin" aria-hidden="true"  onClick={props.handleRetweet}></i>
          <div className="inline">
            {props.retweetCount}
          </div>
        </div>
        <div className={favoriteClassName}>
          <i className="fa fa-heart inline icon-margin" aria-hidden="true" onClick={props.handleFavorite}></i>
          <div className="inline">
            {props.favoriteCount}
          </div>
        </div>
        <div className="small-3 columns tweet-no-padding">
          <i className="fa fa-ellipsis-h" aria-hidden="true" onClick={props.handleMore}></i>
        </div>
      </div>
          </div>
    </div>
  );
};

export default Tweet;
