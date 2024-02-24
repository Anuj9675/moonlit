import styles from "../style";
import { FaWhatsapp, FaInstagram, FaYoutube, FaDiscord } from 'react-icons/fa';

const Footer = () => (
  <section id="social" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] gap-6">
      <p className="font-poppins font-normal text-center lg:text-[18px] md:text-[18px] sm:text-[8px] leading-[27px] text-white">
        Copyright Ⓒ 2024 MOONLIT. All Rights Reserved.
      </p>
      <div className="flex md:flex-row flex-col items-center gap-6">
        <span className="font-bold md:text-xl lg:text-xl sm:text-sm">Social Links</span>
        <hr className="hidden md:block border-r-[2px] border-white h-36 " />
        <div className="flex md:flex-col flex-row items-center gap-4">
          <a href="YOUR_WHATSAPP_GROUP_LINK" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} />
          </a>
          <a href="https://www.instagram.com/moonlit_bgmi_scrims/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.youtube.com/@MOONLIT_YT/featured" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} />
          </a>
          <a href="https://discord.com/invite/aAJWTx497B" target="_blank" rel="noopener noreferrer">
            <FaDiscord size={30} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
