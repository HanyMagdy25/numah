import React from "react";
import styles from "./Genres.module.css";
import TopPicksCard from "./GenresCard";
import Link from "next/link";

const Genres = ({ data, headTitle }) => {
  return (
    <div className={styles.topPicks}>
      <div className={styles.head}>
        <h3 className={styles.headTitle}>{headTitle}</h3>
        <Link href="/" className={styles.viewAll}>View All</Link>
      </div>
      <div className={styles.divSwiper}>
        {data?.map((item, index) => (
          <TopPicksCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Genres;
