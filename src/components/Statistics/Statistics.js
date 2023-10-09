import React, { Component } from 'react';
import { Stat } from './Statistics.styled';

export default class Statistics extends Component {
  render() {
    return (
      <div>
        <Stat>Good: {this.props.good}</Stat>
        <Stat>Neutral: {this.props.neutral}</Stat>
        <Stat>Bad: {this.props.bad}</Stat>
        <Stat>Total: {this.props.total}</Stat>
        <Stat>Positive feedback: {this.props.positivePercentage}%</Stat>
      </div>
    );
  }
}
