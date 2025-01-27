import React from "react";
import Image from "next/image";
import styles from "./RecentlyPlayedCard.module.css";

const RecentlyPlayedCard = ({ item }) => {
  return (
    <div className={styles.recentlyPlayedCard}>
      <Image
        src={item.image}
        alt="img1"
        width={66}
        height={66}
        className={styles.img}
      />
      <div>
        <h3 className={styles.title}>{item.title}</h3>
        <h4 className={styles.artist}>{item.artist}</h4>
      </div>
      <button type="button" className={styles.settings}>
        <svg
          width="5"
          height="18"
          viewBox="0 0 5 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.25501 9.99604C2.81904 9.99604 3.27626 9.5501 3.27626 9.00001C3.27626 8.44992 2.81904 8.00398 2.25501 8.00398C1.69099 8.00398 1.23376 8.44992 1.23376 9.00001C1.23376 9.5501 1.69099 9.99604 2.25501 9.99604Z"
            stroke="#9EACB9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.25501 3.02381C2.81904 3.02381 3.27626 2.57787 3.27626 2.02777C3.27626 1.47768 2.81904 1.03174 2.25501 1.03174C1.69099 1.03174 1.23376 1.47768 1.23376 2.02777C1.23376 2.57787 1.69099 3.02381 2.25501 3.02381Z"
            stroke="#9EACB9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.25501 16.9683C2.81904 16.9683 3.27626 16.5223 3.27626 15.9722C3.27626 15.4222 2.81904 14.9762 2.25501 14.9762C1.69099 14.9762 1.23376 15.4222 1.23376 15.9722C1.23376 16.5223 1.69099 16.9683 2.25501 16.9683Z"
            stroke="#9EACB9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default RecentlyPlayedCard;
