import Image from "next/image";
import styles from "./Sidebar.module.css";
import LogoImage from "../../../assets/logoImg.png";
// import HomeIcon from "../../../assets/homeIcon.svg";
// import MusicIcon from "../../../assets/music-library-2.svg";
// import GroupIcon from "../../../assets/Group.svg";
import playlist1 from "../../../assets/playlist1.png";
import playlist2 from "../../../assets/playlist2.png";
import PlusPng from "@/app/assets/plus.png";
import Link from "next/link";

const playListData = [
  {
    id: 1,
    image: playlist1,
    number: 50,
    title: "Summer List 2",
  },
  {
    id: 2,
    image: playlist2,
    number: 52,
    title: "Ni0ghtty night",
  },
  {
    id: 3,
    image: playlist1,
    number: 77,
    title: "Country music",
  },
  {
    id: 4,
    image: playlist2,
    number: 90,
    title: "Slow",
  },
  {
    id: 5,
    image: playlist2,
    number: 50,
    title: "Nightty night",
  },
  {
    id: 6,
    image: playlist1,
    number: 60,
    title: "Country music",
  },
  {
    id: 7,
    image: playlist2,
    number: 520,
    title: "Slow",
  },
];
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Image src={LogoImage} alt="Logo" />
      </div>
      <div>
        <ul className={styles.mainList}>
          <li className={styles.oneItemList}>
            <Link href="/" className={styles.oneItem}>
              {/* <HomeIcon width={20} height={20} fill="#A0AEC0" /> */}
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.7001 6.58375L11.9001 3.22542C10.5918 2.30875 8.58345 2.35875 7.32511 3.33375L3.15011 6.59209C2.31678 7.24209 1.65845 8.57542 1.65845 9.62542V15.3754C1.65845 17.5004 3.38345 19.2338 5.50845 19.2338H14.4918C16.6168 19.2338 18.3418 17.5088 18.3418 15.3838V9.73375C18.3418 8.60875 17.6168 7.22542 16.7001 6.58375ZM10.6251 15.9004C10.6251 16.2421 10.3418 16.5254 10.0001 16.5254C9.65845 16.5254 9.37511 16.2421 9.37511 15.9004V13.4004C9.37511 13.0588 9.65845 12.7754 10.0001 12.7754C10.3418 12.7754 10.6251 13.0588 10.6251 13.4004V15.9004Z" />
              </svg>
              <span>Home</span>
            </Link>
          </li>
          <li className={styles.oneItemList}>
            <Link href="/library" className={styles.oneItem}>
              {/* <MusicIcon width={20} height={20} fill="#A0AEC0" /> */}
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3334 11.7337V15.067C18.3334 17.9837 16.6667 19.2337 14.1667 19.2337H5.83342C3.33341 19.2337 1.66675 17.9837 1.66675 15.067V11.7337C1.66675 9.52535 2.62508 8.27537 4.16675 7.80037C4.66675 7.64204 5.22508 7.56702 5.83342 7.56702H14.1667C14.7751 7.56702 15.3334 7.64204 15.8334 7.80037C17.3751 8.27537 18.3334 9.52535 18.3334 11.7337Z"
                  fill="#A0AEC0"
                  stroke="#A0AEC0"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.8334 6.73368V7.80037C15.3334 7.64204 14.7751 7.56702 14.1667 7.56702H5.83341C5.22508 7.56702 4.66675 7.64204 4.16675 7.80037V6.73368C4.16675 5.81702 4.91675 5.06702 5.83341 5.06702H14.1667C15.0834 5.06702 15.8334 5.81702 15.8334 6.73368Z"
                  stroke="#A0AEC0"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3334 3.82536V5.06702H6.66675V3.82536C6.66675 3.13369 7.23342 2.56702 7.92509 2.56702H12.0751C12.7667 2.56702 13.3334 3.13369 13.3334 3.82536Z"
                  stroke="#A0AEC0"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.55826 17.1087C8.16577 17.1087 8.65826 16.6162 8.65826 16.0087C8.65826 15.4012 8.16577 14.9087 7.55826 14.9087C6.95074 14.9087 6.45825 15.4012 6.45825 16.0087C6.45825 16.6162 6.95074 17.1087 7.55826 17.1087Z"
                  stroke="#F8F9FA"
                  strokeOpacity="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.7081 15.2754V10.9671C12.7081 10.0504 12.1331 9.91708 11.5498 10.0837L9.3415 10.6837C8.9415 10.7921 8.6665 11.1087 8.6665 11.5671V12.3337V12.8504V16.0087"
                  stroke="#F8F9FA"
                  strokeOpacity="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6083 16.3754C12.2158 16.3754 12.7083 15.8829 12.7083 15.2754C12.7083 14.6679 12.2158 14.1754 11.6083 14.1754C11.0008 14.1754 10.5083 14.6679 10.5083 15.2754C10.5083 15.8829 11.0008 16.3754 11.6083 16.3754Z"
                  stroke="#F8F9FA"
                  strokeOpacity="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.6665 12.8587L12.7081 11.7588"
                  stroke="#F8F9FA"
                  strokeOpacity="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Library</span>
            </Link>
          </li>
          <li className={styles.oneItemList}>
            <Link href="/playlist" className={styles.oneItem}>
              {/* <GroupIcon width={20} height={20} fill="#A0AEC0" /> */}
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.80302C0 1.1208 0.553047 0.567749 1.23527 0.567749H13.588C14.2703 0.567749 14.8233 1.1208 14.8233 1.80302C14.8233 2.48525 14.2703 3.0383 13.588 3.0383H1.23527C0.553047 3.0383 0 2.48525 0 1.80302Z" />
                <path d="M1.23527 6.00305C0.553047 6.00305 0 6.55606 0 7.23833C0 7.92059 0.553047 8.4736 1.23527 8.4736H13.588C14.2703 8.4736 14.8233 7.92059 14.8233 7.23833C14.8233 6.55606 14.2703 6.00305 13.588 6.00305H1.23527Z" />
                <path d="M0 12.6731C0 11.9909 0.553047 11.4379 1.23527 11.4379H10.6233C11.3056 11.4379 11.8586 11.9909 11.8586 12.6731C11.8586 13.3554 11.3056 13.9084 10.6233 13.9084H1.23527C0.553047 13.9084 0 13.3554 0 12.6731Z" />
                <path d="M13.8422 16.936C13.9116 17.4431 14.4809 17.7401 14.9441 17.4754L19.6266 14.7997C20.1245 14.5152 20.1245 13.7971 19.6266 13.5126L14.9441 10.8369C14.45 10.5546 13.8352 10.9113 13.8352 11.4804V16.8318C13.8352 16.8674 13.8376 16.9022 13.8422 16.936Z" />
              </svg>

              <span>Playlist</span>
            </Link>
          </li>
          <div className={styles.playList}>
            <ul className={styles.playListItems}>
              {playListData?.map((item, index) => (
                <li key={index} className={styles.playListItem}>
                  <Image src={item.image} alt="Playlist" />
                  <div>
                    <h3>{item?.title}</h3>
                    <h6>{item?.number} songs</h6>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.addPlaylistDiv}>
            <button type="button" className={styles.addPlaylist}>
              <Image src={PlusPng} alt="plusIcon" width={24} height={24} />
              Add new playlist
            </button>
          </div>
        </ul>
        <div className={styles.settingsDiv}>
          <button type="button" className={styles.settings}>
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7501 5.58375C14.2417 5.58375 13.6251 4.51709 14.3751 3.20875C14.8084 2.45042 14.5501 1.48375 13.7917 1.05042L12.3501 0.225419C11.6917 -0.166248 10.8417 0.0670858 10.4501 0.725419L10.3584 0.883752C9.60841 2.19209 8.37508 2.19209 7.61675 0.883752L7.52508 0.725419C7.15008 0.0670858 6.30008 -0.166248 5.64175 0.225419L4.20008 1.05042C3.44175 1.48375 3.18341 2.45875 3.61675 3.21709C4.37508 4.51709 3.75841 5.58375 2.25008 5.58375C1.38341 5.58375 0.666748 6.29209 0.666748 7.16709V8.63375C0.666748 9.50042 1.37508 10.2171 2.25008 10.2171C3.75841 10.2171 4.37508 11.2838 3.61675 12.5921C3.18341 13.3504 3.44175 14.3171 4.20008 14.7504L5.64175 15.5754C6.30008 15.9671 7.15008 15.7338 7.54175 15.0754L7.63341 14.9171C8.38341 13.6088 9.61675 13.6088 10.3751 14.9171L10.4667 15.0754C10.8584 15.7338 11.7084 15.9671 12.3667 15.5754L13.8084 14.7504C14.5667 14.3171 14.8251 13.3421 14.3917 12.5921C13.6334 11.2838 14.2501 10.2171 15.7584 10.2171C16.6251 10.2171 17.3417 9.50875 17.3417 8.63375V7.16709C17.3334 6.30042 16.6251 5.58375 15.7501 5.58375ZM9.00008 10.6088C7.50841 10.6088 6.29175 9.39209 6.29175 7.90042C6.29175 6.40875 7.50841 5.19209 9.00008 5.19209C10.4917 5.19209 11.7084 6.40875 11.7084 7.90042C11.7084 9.39209 10.4917 10.6088 9.00008 10.6088Z"
                fill="#A0AEC0"
              />
            </svg>
            <span>Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
