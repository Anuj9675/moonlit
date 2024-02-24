import styles, { layout } from "../style";
import { Billing, CardDeal } from "../components";
import ScrollDownButton from "./ScrollDownButton";

const About = () => (
  <section id="Scrims" className={layout.sectionReverse}>
    <h2 className={`mt-36 ${styles.heading2} ${styles.flexCenter}`}>About</h2>
    <ScrollDownButton/>
      <div className={styles.flexCenter}>
        <div className={`${styles.boxWidth}`}>
          <Billing />
          <CardDeal />
        </div>
      </div>
  </section>
);

export default About;
