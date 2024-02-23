import styles from "../style";
import { FaWhatsapp, FaInstagram, FaYoutube, FaDiscord } from 'react-icons/fa';
import Link from "next/link";

const Footer = () => (
  <section id="social" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
   

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 MOONLIT. All Rights Reserved.
      </p>
      <div className="flex flex-col items-center space-y-4">
        <Link className="flex flex-row items-center gap-3" href="YOUR_WHATSAPP_GROUP_LINK">
            <FaWhatsapp size={30} />
            <span>WhatsApp</span>  
        </Link>
        <Link className="flex flex-row items-center gap-3" href="YOUR_INSTAGRAM_LINK">
            <FaInstagram size={30} />
            <span>Instagram</span>
        </Link>
        <Link className="flex flex-row items-center gap-3" href="YOUR_YOUTUBE_LINK">
            <FaYoutube size={30} />
            <span>YouTube</span> 
        </Link>
        <Link className="flex flex-row items-center gap-3" href="YOUR_DISCORD_INVITE_LINK">
            <FaDiscord size={30} />
            <span>Discord</span> 
        </Link>
      </div>
      
    </div>
  </section>
);

export default Footer;
