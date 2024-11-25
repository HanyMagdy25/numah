import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import LogoImage from "../../../assets/logoImg.png";

const Footer = () => {
  // const isActive = (path) => {
  //   if (typeof window !== "undefined") {
  //     return window.location.pathname.includes(path);
  //   }
  //   return false;
  // };

  const companyData = [
    { label: "About", href: "/aboutUs" },
    { label: "Jobs", href: "/Jobs" },
    { label: "Press", href: "/Press" },
    { label: "News", href: "/News" },
  ];
  const communitiesData = [
    { label: "Artists", href: "/Artists" },
    { label: "Developers", href: "/Developers" },
    { label: "Labels", href: "/Labels" },
    { label: "Investors", href: "/Investors" },
    { label: "Brands", href: "/Brands" },
  ];
  const usfulLinksData = [
    { label: "Help", href: "/Help" },
    { label: "Gift", href: "/Gift" },
    { label: "Web Player", href: "/Web Player" },
  ];

  return (
    <footer className={[styles.footer].join(" ")}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerLeft}>
            <div className={styles.logoCol}>
              <div className={styles.logo}>
                <Image src={LogoImage} alt="Logo" />
              </div>
            </div>
            <div className={styles.group}>
              <h2 className={styles.headTitle}>Company</h2>
              <div className={styles.parent}>
                <ul className={styles.ul}>
                  {companyData?.map((item, index) => (
                    <li
                      key={index}
                      // className={`${styles.div8} ${
                      //   isActive(item?.href) ? styles.active : ""
                      // }`}
                    >
                      <Link href={item?.href} className={styles.link}>
                        {item?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.group}>
              <h2 className={styles.headTitle}>Comminities</h2>
              <div className={styles.parent}>
                <ul className={styles.ul}>
                  {communitiesData?.map((item, index) => (
                    <li
                      key={index}
                      // className={`${styles.div8} ${
                      //   isActive(item?.href) ? styles.active : ""
                      // }`}
                    >
                      <Link href={item?.href} className={styles.link}>
                        {item?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.group}>
              <h2 className={styles.headTitle}>Usful Links</h2>
              <div className={styles.parent}>
                <ul className={styles.ul}>
                  {usfulLinksData?.map((item, index) => (
                    <li
                      key={index}
                      // className={`${styles.div8} ${
                      //   isActive(item?.href) ? styles.active : ""
                      // }`}
                    >
                      <Link href={item?.href} className={styles.link}>
                        {item?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.allIcons}>
              <Link href="/" className={styles.oneIcon}>
                <svg
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.560129 0.297963L10.2123 13.2065L0.5 23.702H2.68648L11.1904 14.5135L18.0607 23.702H25.5L15.3053 10.0674L24.3459 0.297963H22.1594L14.3286 8.76042L8.00088 0.297963H0.561579H0.560129ZM3.77457 1.90863H7.1914L22.2826 22.0914H18.8658L3.77457 1.90863Z"
                    fill="#161A1E"
                  />
                </svg>
              </Link>
              <Link href="/" className={styles.oneIcon}>
                <svg
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.2436 0.0281019H6.75636C3.30653 0.0281019 0.5 2.83546 0.5 6.28631V17.7137C0.5 21.1645 3.30653 23.9719 6.75636 23.9719H19.2436C22.6935 23.9719 25.5 21.1645 25.5 17.7137V6.28631C25.5 2.83546 22.6935 0.0281019 19.2436 0.0281019ZM2.70705 6.28631C2.70705 4.05315 4.52387 2.23578 6.75636 2.23578H19.2436C21.4761 2.23578 23.293 4.05315 23.293 6.28631V17.7137C23.293 19.9468 21.4761 21.7642 19.2436 21.7642H6.75636C4.52387 21.7642 2.70705 19.9468 2.70705 17.7137V6.28631Z"
                    fill="#161A1E"
                  />
                  <path
                    d="M13 17.8198C16.2081 17.8198 18.8195 15.209 18.8195 11.9986C18.8195 8.78816 16.2095 6.17741 13 6.17741C9.79055 6.17741 7.18054 8.78816 7.18054 11.9986C7.18054 15.209 9.79055 17.8198 13 17.8198ZM13 8.3865C14.9922 8.3865 16.6125 10.0073 16.6125 12C16.6125 13.9927 14.9922 15.6135 13 15.6135C11.0079 15.6135 9.38759 13.9927 9.38759 12C9.38759 10.0073 11.0079 8.3865 13 8.3865Z"
                    fill="#161A1E"
                  />
                  <path
                    d="M19.3583 7.11789C20.2221 7.11789 20.9262 6.41502 20.9262 5.54948C20.9262 4.68393 20.2235 3.98102 19.3583 3.98102C18.493 3.98102 17.7903 4.68393 17.7903 5.54948C17.7903 6.41502 18.493 7.11789 19.3583 7.11789Z"
                    fill="#161A1E"
                  />
                </svg>
              </Link>
              <Link href="/" className={styles.oneIcon}>
                <svg
                  width="14"
                  height="26"
                  viewBox="0 0 14 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.25135 6.13327V9.65787H13.6102L12.92 14.4058H9.25135V25.3447C8.5158 25.4467 7.76326 25.5 6.99938 25.5C6.11764 25.5 5.25176 25.4297 4.40854 25.2937V14.4058H0.38855V9.65787H4.40854V5.34536C4.40854 2.66987 6.57664 0.5 9.25248 0.5V0.50227C9.26042 0.50227 9.26722 0.5 9.27515 0.5H13.6113V4.6062H10.778C9.93589 4.6062 9.25248 5.28981 9.25248 6.13213L9.25135 6.13327Z"
                    fill="#161A1E"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.rights}>© 2024 Numah | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
