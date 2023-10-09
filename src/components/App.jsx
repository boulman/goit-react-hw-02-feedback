import React, { Component } from 'react';
import { Container } from './App.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = statName => {
    this.setState(prev => {
      switch (statName) {
        case 'good':
          return {
            good: prev.good + 1,
          };
        case 'neutral':
          return {
            neutral: prev.neutral + 1,
          };
        case 'bad':
          return {
            bad: prev.bad + 1,
          };
        default:
          return null;
      }
    });
  };

  countTotal = () => {
    return Object.values(this.state).reduce((a, c) => a + c);
  };

  countPositivePercentage = () => {
    return ((this.state.good / this.countTotal()) * 100).toFixed(2);
  };

  render() {
    return (
      <Container>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotal() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotal()}
              positivePercentage={this.countPositivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
