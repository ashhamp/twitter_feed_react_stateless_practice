import React from 'react';
import Tweet from './Tweet';

const TwitterFeed = props => {
  let tweets = props.data.map(tweet => {

    let handleRetweet = (event) => {
      let div = event.target.parentElement;

      if (tweet.retweeted) {
        alert('already retweeted');
      } else {
        let message = confirm('retweet?');
        if (message) {
          div.className += ' green-text';
        }
      }
    }

    let handleFavorite = (event) => {
      let div = event.target.parentElement;

      if (tweet.favorited) {
        alert('already liked');
      } else {
        let message = confirm('like?');
        if (message) {
          div.className += ' red-text';
        }
      }
    }

    let handleReply = () => {
      alert('reply');
    }

    let handleMore = () => {
      alert('favorite');
    }

    let tweetImage;
    let tweetImageDisplay;
    let tweetText = tweet.text;

    if (Object.getOwnPropertyNames(tweet.entities).length > 0) {
      tweetImage = tweet.entities.media[0].media_url;
      tweetImageDisplay = tweet.entities.media[0].display_url;
      tweetText = tweetText.replace(` ${tweetImageDisplay}`, '');
    }

    return (
      <Tweet
        key={tweet.id_str}
        text={tweetText}
        userName={tweet.user.name}
        screenName={tweet.user.screen_name}
        imgUrl={tweet.user.profile_image_url}
        retweetCount={tweet.retweet_count}
        favoriteCount={tweet.favorite_count}
        favorited={tweet.favorited}
        retweeted={tweet.retweeted}
        date={tweet.timestamp_ms}
        tweetImgUrl={tweetImage}
        tweetImgText={tweetImageDisplay}
        handleRetweet={handleRetweet}
        handleFavorite={handleFavorite}
        handleReply={handleReply}
        handleMore={handleMore}
      />
    )
  });

  return (
    <div className="small-10 small-centered columns tweet-margin">
      {tweets}
    </div>
  );
}


export default TwitterFeed;
