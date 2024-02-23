
import styles, { layout } from "../style";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Paid Tournament <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Participate in our exclusive paid BGMI tournament for a chance to showcase your skills and compete for exciting prizes. Secure your spot now and elevate your gaming experience to the next level!
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src="../card.png" alt="billing" className="w-[100%] h-[100%]" />
    </div>


  </section>
);

export default CardDeal;
