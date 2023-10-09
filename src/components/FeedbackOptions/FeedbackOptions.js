import React, { Component } from 'react';
import { Btn, BtnContainer } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    return (
      <BtnContainer>
        {this.props.options.map(opt => (
          <Btn
            key={opt}
            type="button"
            onClick={() => this.props.onFeedback(opt)}
          >
            {opt[0].toUpperCase() + opt.slice(1)}
          </Btn>
        ))}
      </BtnContainer>
    );
  }
}
