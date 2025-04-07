import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaPinterest,
  FaTumblr,
  FaSnapchat,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* SocialMedia Section  */}
      <div className={styles.SocialMedia}>
        <p>Get Connected with us on SocialMedia</p>
      </div>
      <div className={styles.icons}>
        <FaFacebook className={styles.icon} />
        <FaWhatsapp className={styles.icon} />
        <FaYoutube className={styles.icon} />
        <FaInstagram className={styles.icon} />
        <FaLinkedin className={styles.icon} />
        <FaTelegram className={styles.icon} />
        <FaPinterest className={styles.icon} />
        <FaTumblr className={styles.icon} />
        <FaSnapchat className={styles.icon} />
        <FaTwitter className={styles.icon} />
      </div>
      {/* Footer Links Section */}
      <div>
        <h4>IRCTC Trains</h4>
      </div>
      <div>
        <h4>General Information</h4>
      </div>
      <div>
        <h4>Important Information</h4>
      </div>
      <div>
        <h4>Agents</h4>
      </div>
      <div>
        <h4>Enquiries</h4>
      </div>
      <div>
        <h4>How To</h4>
      </div>
      <div>
        <h4>IRCTC eWallet</h4>
      </div>
      <div>
        <h4>IRCTC Official App</h4>
      </div>
      <div>
        <h4>Advertise with us</h4>
      </div>
      <div>
        <h4>Refund Rules</h4>
      </div>
      <div>
        <h4>Person With Disability Facilities</h4>
      </div>
      <div>
        <h4>For Newly Migrated Agents</h4>
      </div>
      <div>
        <h4>Mobile Zone</h4>
      </div>
      <div>
        <h4>Policies</h4>
      </div>
      <div>
        <h4>Ask Disha ChatBot</h4>
      </div>
      <div>
        <h4>About us</h4>
      </div>
    </footer>
  );
}
