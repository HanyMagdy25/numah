import React from "react";
import styles from "./RecentlyPlayed.module.css";
import TopPicksCard from "./RecentlyPlayedCard";
import Link from "next/link";

const RecentlyPlayed = ({ data, headTitle }) => {
  return (
    <div className={styles.recentlyPlayed}>
      <h3 className={styles.headTitle}>{headTitle}</h3>

      <div className={styles.divSwiper}>
        {data?.map((item, index) => (
          <TopPicksCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyPlayed;
