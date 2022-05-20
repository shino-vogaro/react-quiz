import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
  return <p className="question">{props.content}</p>;
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
