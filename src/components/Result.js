import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import twitterImage from "../images/pages/index/return_btn_tw.png"; 


function Result(props) {
  return (
    <CSSTransitionGroup
    className="container result"
    component="div"
    transitionName="fade"
    transitionEnterTimeout={800}
    transitionLeaveTimeout={500}
    transitionAppear
    transitionAppearTimeout={500}
  >
    <div className="result__heading">
      <p>Winning <br/><span className="animateion--neon">The</span> Game
        <span className="text-logo--racket">π</span>
        <br/>
      </p>
    </div>
    <div className="result__body">
      <p className="text">
        <p className='text'>γγγγγΌγγγγγΌγγγγγΌγγγγγΌγγγγγΌγγγγγΌγγγγγΌγγγγγΌγγγγγΌ</p>
      </p>
      <div className="appeal" data-appeal>
          <div className="appeal__link" data-appeal-last>
            <a href="https://twitter.com/Lobbing_?ref_src=twsrc%5Etfw">
              <img src={twitterImage} alt="Twitterγ«ζ»γ"></img>
            </a>
          </div>
          <div className="appeal__text">γγͺγγ€γΌγγ¨γγ©γ­γΌγγγ¦γγγγε¬γγγ§γ!!γ</div>
          
          <div className="appeal__link appeal__link--return">
            <a href="http://localhost:3000/">γγ1εΊ¦γγ£γ¬γ³γΈγγ</a>
          </div>
        </div>
    </div>
  </CSSTransitionGroup>
  );
  
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
