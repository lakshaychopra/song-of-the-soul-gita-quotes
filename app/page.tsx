import Image from "next/image";
import HorseChariot from "./assets/images/horseChariot";
import Logo from "./assets/images/logo";
import styles from "./page.module.scss";
import ArrowIcon from "./assets/images/arrowIcon";
import axios from "axios";

import gitaData from "./gita.json";

export default async function Home() {

  //logic to fetch random chapter and slok from gita.json
  const randomChapter = (Math.floor(Math.random() * 18) + 1);

  // get random index from an array
  const randomIndex = Math.floor(Math.random() * ((gitaData as Record<number, number[]>)[randomChapter]).length);
  console.log(randomIndex);

  const response = await axios.get(`https://vedicscriptures.github.io/slok/${randomChapter}/${(gitaData as Record<number, number[]>)[randomChapter][randomIndex]}`);
  const { chapter, verse, slok, prabhu, tej } = response.data;

  const hindiRegex = /^।।\d+\.\d+।।\s*(.+)$/;

  const match = tej.ht.match(hindiRegex);

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <HorseChariot className={styles.horseChariot} />
        <div className={styles.content}>
          <div className={styles.verseNumber}>{chapter}.{verse}</div>
          <div className={styles.sanskrit}>
            {slok.split('\n').map((s: string, index: number) => (
              <div key={index}>{s}</div>
            ))}
          </div>
          <div>
            <ArrowIcon />
          </div>
          <div className={styles.english}>
            {prabhu.et}
          </div>
          <div>
            <ArrowIcon />
          </div>
          <div className={styles.hindi}>
            {
              match
                ? match[1]
                : tej.ht
            }
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.contact}>
            <div className={styles["contact-mail"]}>
              hello.songofthesoul@gmail.com
            </div>
            <div className={styles.social}>
              <a href="#" aria-label="Instagram">
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" aria-label="Facebook">
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" aria-label="WhatsApp">
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
