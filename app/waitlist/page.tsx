"use client";

import Image from "next/image";
import Logo from "../assets/images/logo";
import JournalMockup from "../assets/images/journal-mockup.png";
import styles from "./waitlist.module.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Floral from "../assets/images/floral.png";
import React from "react";
import { usePathname } from "next/navigation";

export default function Waitlist() {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [phone, setPhone] = React.useState("");
  const [currentUrl, setCurrentUrl] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const pathname = usePathname();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.origin + pathname);
    }
  }, [pathname]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      setError("Please enter your phone number");
      return;
    }
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber: phone }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 400) {
          setError(data.message);
        } else {
          throw new Error(data.error || 'Failed to join waitlist');
        }
        return;
      }

      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <Image
          src={Floral}
          alt="Bhagavad Gita Quotes"
          className={styles.floral}
          width={500}
          height={250}
        />
        <div className={styles.content}>
          {!isSuccess ? (
            <>
              <div className={styles.hareKrishna}>
                <p className={styles.title}>Hare Krishna!</p>
                <p className={styles.description}>
                  Join the waitlist to get your
                </p>
              </div>
              <div className={styles.journalTitle}>Krishna Journal</div>
              <div className={styles.journalImage}>
                <Image
                  src={JournalMockup}
                  alt="Krishna Journal Preview"
                  width={240}
                  height={320}
                  style={{ objectFit: "contain" }}
                />
              </div>

              <form className={styles.form} onSubmit={handleSubmit}>
                <PhoneInput
                  dropdownClass={styles.dropdown}
                  country={"in"}
                  placeholder="Enter your phone number"
                  value={phone}
                  inputClass={styles.input}
                  containerClass={styles.container}
                  buttonClass={styles.button}
                  onChange={(value) => setPhone(value)}
                  disabled={isLoading}
                />
                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isLoading}
                >
                  {isLoading ? 'Joining...' : 'Join the Waitlist'}
                </button>
                {error && <p className={styles.error}>{error}</p>}
              </form>
            </>
          ) : (
            <div className={styles.success}>
              <h2>Radhe Radhe!</h2>
              <p>Thank You for your interest!</p>
              <p className={styles.updateText}>
                We will update you on this phone number as soon as we launch our
                Krishna Journal.
              </p>

              <p className={styles.shareText}>
                Till then, share it with others.
              </p>

              <div className={styles.copyLink}>
                <input
                  type="text"
                  value={currentUrl}
                  readOnly
                  className={styles.linkInput}
                />
                <button 
                  className={styles.copyButton}
                  onClick={() => {
                    navigator.clipboard.writeText(currentUrl);
                  }}
                >
                  Copy Link
                </button>
              </div>

              <div className={styles.socialButtons}>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Join me on the Krishna Journal waitlist! \uD83D\uDE4F ${currentUrl}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsapp}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      `https://wa.me/?text=${encodeURIComponent(
                        `Join me on the Krishna Journal waitlist! \uD83D\uDE4F ${currentUrl}`
                      )}`,
                      "_blank",
                      "width=550,height=450"
                    );
                  }}
                >
                  <div className={styles.shareButton}>
                    <Image
                      src="/whatsapp.png"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                    />
                    <span>Whatsapp</span>
                  </div>
                </a>
                <a
                  href={`https://www.instagram.com/share?url=${encodeURIComponent(
                    currentUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.instagram}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      `https://www.instagram.com/share?url=${encodeURIComponent(
                        currentUrl
                      )}`,
                      "_blank",
                      "width=550,height=650"
                    );
                  }}
                >
                  <div className={styles.shareButton}>
                    <Image
                      src="/instagram.png"
                      alt="Instagram"
                      width={24}
                      height={24}
                    />
                    <span>Instagram</span>
                  </div>
                </a>
              </div>
            </div>
          )}
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
              <a
                href="https://www.instagram.com/songofthe.soul/"
                aria-label="Instagram"
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram"
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
