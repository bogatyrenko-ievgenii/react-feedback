import React, { Component } from "react";

import styles from "./App.module.css";

import FeedbackStatistics from "../feedback-statistics/feedback-statistics";
import Buttons from "../buttons/buttons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  countTotalFeedback = () => {
    let { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };

  onHandleBtnClick = (event) => {
    switch (event.target.value) {
      case "bad":
        this.setState(({ bad }) => ({ bad: bad + 1 }));
        break;
      case "good":
        this.setState(({ good }) => ({ good: good + 1 }));
        break;
      case "neutral":
        this.setState(({ neutral }) => ({ neutral: neutral + 1 }));
        break;
      default:
        console.log("Nothing");
        break;
    }
  };

  render() {
    let { good, neutral, bad } = this.state;
    return (
      <div className={styles.main}>
        <h1 className={styles.title}>Please leave feedback</h1>
        <Buttons options={this.state} onHandleBtnClick={this.onHandleBtnClick} />
        <h2>Statistics</h2>
        <ul className={styles.list}>
          {this.countTotalFeedback() === 0 ? (
            <li>No feedback given</li>
          ) : (
            <FeedbackStatistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default App;
