import { Statistics } from 'components/Statistics/Statistics';
import { Wrapper } from './Feedback.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export const Feedback = ({ state, clickBtn, total, positivePercentage }) => {
  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={clickBtn}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        )}
      </Section>
    </Wrapper>
  );
};
