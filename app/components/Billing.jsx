import styles, { layout } from "../style";


const Billing = () => (
  <div>
    <section id="Scrims" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse} >
      <img src="../SS.png" alt="billing" className="w-[130%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Tournament <br className="sm:block hidden" /> Sunday Showdown
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Join the 'Sunday Showdown' every week for thrilling gaming action! Register your team now to participate in the excitement. 
      </p>
    </div>
  </section>
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
  </div>
);

export default Billing;
