import React from "react";
import styles from "./TopPicks.module.css";
import TopPicksCard from "./TopPicksCard";
// Import Swiper

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
const TopPicks = ({ data, headTitle }) => {
  return (
    <div className={styles.topPicks}>
      <h3 className={styles.headTitle}>{headTitle}</h3>
      <div className={styles.divSwiper}>
        {data?.map((item, index) => (
          <TopPicksCard key={index} item={item} />
        ))}
      </div>
      {/* <Swiper
        // className={`${styles.projectCards}`}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {topPicksData?.map((item, index) => (
          <SwiperSlide key={index}>
            <TopPicksCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};

export default TopPicks;
