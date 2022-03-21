import React from "react";
import "./styles.css";
import StatsCard from "../../02-molecules/StatsCard/StatsCard";

const ShowStats = ({ stats = [], loading = false }) => {
  return (
    <div className="show-stats__container">
      {stats.map((stat) => (
        <StatsCard
          key={stat.label}
          iconName={stat.iconName}
          number={stat.number}
          title={stat.label}
        />
      ))}
    </div>
  );
};

export default ShowStats;
