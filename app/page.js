import styles from "./page.module.css";
import Header from "./components/Layout/Header/Header";
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import Footer from "./components/Layout/Footer/Footer";
import TopPicks from "./components/TopPicks/TopPicks";
import RecentlyPlayed from "./components/RecentlyPlayed/RecentlyPlayed";
import Genres from "./components/Genres/Genres";
import img1 from "./assets/image 1.png";
import img2 from "./assets/image 2.png";
import img3 from "./assets/image 3.png";
import img4 from "./assets/image 5.png";
import imgGenre1 from "./assets/genres/image (1).png";
import imgGenre2 from "./assets/genres/image (2).png";
import imgGenre3 from "./assets/genres/image (3).png";
import imgGenre4 from "./assets/genres/image 3.png";
import imgGenre5 from "./assets/genres/image.png";
import imgRecently1 from "./assets/recently/image (4).png";
import imgRecently2 from "./assets/recently/image 1 (1).png";
import imgRecently3 from "./assets/recently/image 1 (2).png";

export default function Home() {
  const topPicksData = [
    {
      id: 1,
      image: img1,
      artist: "ΔKTR",
      title: "Summer List 2",
    },
    {
      id: 2,
      image: img2,
      artist: "ΔKTR",
      title: "Summer List 2",
    },
    {
      id: 3,
      image: img3,
      artist: "ΔKTR",
      title: "Summer List 2",
    },
    {
      id: 4,
      image: img4,
      artist: "ΔKTR",
      title: "Summer List 2",
    },
    {
      id: 5,
      image: img1,
      artist: "Boj",
      title: "Gbagada Express",
    },
    {
      id: 6,
      image: img2,
      artist: "New Jazz Underground",
      title: "the MF DOOM SUiTE",
    },
  ];
  const freshReleaseData = [
    {
      id: 3,
      image: img3,
      artist: "ΔKTR",
      title: "Summer List 2",
    },

    {
      id: 6,
      image: img2,
      artist: "New Jazz Underground",
      title: "the MF DOOM SUiTE",
    },
    {
      id: 4,
      image: img4,
      artist: "ΔKTR",
      title: "Summer List 2",
    },
    {
      id: 1,
      image: img1,
      artist: "ΔKTR",
      title: "Summer List 2",
    },
    {
      id: 2,
      image: img2,
      artist: "ΔKTR",
      title: "Summer List 2",
    },
    {
      id: 5,
      image: img1,
      artist: "Boj",
      title: "Gbagada Express",
    },
  ];
  const genresData = [
    {
      id: 1,
      image: imgGenre1,
      genre: "Punk",
    },
    {
      id: 2,
      image: imgGenre2,
      genre: "Punk",
    },
    {
      id: 3,
      image: imgGenre3,
      genre: "Jazz",
    },
    {
      id: 4,
      image: imgGenre4,
      genre: "Punk",
    },
    {
      id: 5,
      image: imgGenre5,
      genre: "Punk",
    },
  ];
  const recentlyPlayedData = [
    {
      id: 1,
      image: imgRecently1,
      artist: "New Jazz Underground",
      title: "the MF DOOM SUiTE",
    },
    {
      id: 1,
      image: imgRecently2,
      artist: "New Jazz Underground",
      title: "the MF DOOM SUiTE",
    },
    {
      id: 1,
      image: imgRecently3,
      artist: "It May Be Greenish...",
      title: "eebrozgi",
    },
    {
      id: 1,
      image: imgRecently2,
      artist: "Eldamar",
      title: "Akt I; First sight of...",
    },
  ];
  return (
    <div className={styles.page}>
      <Sidebar />
      <main className={styles.main}>
        <Header />
        <div>
          <div className={styles.tabs}>
            <button className={`${styles.tab} ${styles.active}`}>Home</button>
            <button className={styles.tab}>Following</button>
          </div>
          <TopPicks data={topPicksData} headTitle="Top Picks" />
          <TopPicks data={freshReleaseData} headTitle="Fresh Release" />
          <Genres data={genresData} headTitle="Genres" />
          <RecentlyPlayed
            data={recentlyPlayedData}
            headTitle="Recently Played"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
