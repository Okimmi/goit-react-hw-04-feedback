import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  clickBtn = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[`${e.target.name}`] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce(
      (previousValue, item) => previousValue + item,
      0
    );

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    return (
      <div>
        <Feedback
          state={this.state}
          clickBtn={this.clickBtn}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
