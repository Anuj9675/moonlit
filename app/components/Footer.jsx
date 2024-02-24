import styles from "../style";
import { FaWhatsapp, FaInstagram, FaYoutube, FaDiscord } from 'react-icons/fa';

const Footer = () => (
  <section id="social" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 MOONLIT. All Rights Reserved.
      </p>
      <div className="flex flex-row items-center gap-4">
        <span className="font-bold text-xl">Social Links</span>
        <hr className="border-r-[2px] border-white h-36" />
        <div className="flex flex-col items-center space-y-4">
          <a className="flex flex-row items-center gap-3" href="YOUR_WHATSAPP_GROUP_LINK" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} />
          </a>
          <a className="flex flex-row items-center gap-3" href="https://www.instagram.com/moonlit_bgmi_scrims/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a className="flex flex-row items-center gap-3" href="https://www.youtube.com/@MOONLIT_YT/featured" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} />
          </a>
          <a className="flex flex-row items-center gap-3" href="https://discord.com/invite/aAJWTx497B" target="_blank" rel="noopener noreferrer">
            <FaDiscord size={30} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
