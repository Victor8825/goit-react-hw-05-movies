import React from 'react';
import PropTypes from 'prop-types';
import Section from 'components/SectionTitle/SectionTitle';
import Notification from 'components/Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Section title="Statistics">
        {total <= 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral} </p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage} % </p>
          </>
        )}
      </Section>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
