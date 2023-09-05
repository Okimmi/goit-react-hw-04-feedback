const { Wrapper, Btn } = require('./FeedbackOptions.styled');

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <li key={option}>
          <Btn name={option} type="button" onClick={onLeaveFeedback}>
            {option}
          </Btn>
        </li>
      ))}
    </Wrapper>
  );
};
