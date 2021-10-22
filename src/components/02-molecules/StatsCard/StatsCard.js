import React from "react";
import "./styles.css";
import Heading from "../../01-atoms/Heading/Heading";
import IconElement from "../../01-atoms/IconElement/IconElement";
import PropTypes from "prop-types";
import Loader from "../../01-atoms/Loader/Loader";

const StatsCard = ({
  number = "0",
  title = "Stats",
  iconName = "bar-chart-square",
  iconColor = "green",
}) => {
  return (
    <div className="stats-card">
      <div className="stats-card__info">
        {number === 0 ? <Loader style={{"padding-top": "0"}} size="xs" /> : <Heading>{number}</Heading>}

        <Heading size="xs" color="light">
          {title}
        </Heading>
      </div>

      <div>
        <IconElement name={iconName} color={iconColor} />
      </div>
    </div>
  );
};

export default StatsCard;

StatsCard.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  nameIcon: PropTypes.string.isRequired,
};
