import styles, { layout } from "../style";


const Billing = () => (
  <section className={layout.sectionReverse}>
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
);

export default Billing;
