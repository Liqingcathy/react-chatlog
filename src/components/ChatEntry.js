import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
// import { useState } from 'react';
const ChatEntry = (props) => {
  const sender = props.sender;
  const body = props.body;
  const timeStamp = props.timeStamp;
  const likedEvent = props.likedEvent;
  let like = '🤍';
  like = !props.liked ? '🤍' : '❤️';
  let leftRight = (sender === 'Vladimir') ? 'local' : 'remote';
  
  
  return (
    <div className={`chat-entry ${leftRight}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className='msg-by-sender'>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button onClick={() => likedEvent(props.id) }>{like}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  // id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  likedEvent: PropTypes.func.isRequired,
  // countLikesFunc: PropTypes.func.isRequired,

};

export default ChatEntry;
