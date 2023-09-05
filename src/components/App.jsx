import { useState } from 'react';
import { Feedback } from './Feedback/Feedback';

const RATING = {
  GOOD: 'good',
  NEUTRAL: 'neutral',
  BAD: 'bad',
};

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickBtn = e => {
    switch (e.target.name) {
      case RATING.GOOD:
        setGood(prev => prev + 1);
        break;
      case RATING.NEUTRAL:
        setNeutral(prev => prev + 1);
        break;
      case RATING.BAD:
        setBad(prev => prev + 1);
        break;
      default:
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  return (
    <div>
      <Feedback
        state={{ good, neutral, bad }}
        clickBtn={clickBtn}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </div>
  );
};
