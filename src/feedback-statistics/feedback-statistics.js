import { number } from "prop-types";

const FeedbackStatistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <>
      <li>good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
      <li>total: {total}</li>
      <li>positive feedback is: {positivePercentage}%</li>
    </>
  );
};

FeedbackStatistics.propTypes = {
    good: number.isRequired,
    neutral: number.isRequired,
    bad: number.isRequired,
    total: number.isRequired,
    positivePercentage: number.isRequired
  }
export default FeedbackStatistics;