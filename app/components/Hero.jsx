import styles from "../style";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-violet-900 rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Daily</span> Free{" "}
            <span className="text-white">Scrims</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            MOONLIT <br className="sm:block hidden" />{" "}
            <span className="text-violet-400">Scrims</span>{" "}
          </h1>
          
        </div>

        
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        "Our organization hosts daily BGMI scrims, offering you unlimited fun with a T2 lobby experience every day. Join us for an exhilarating gaming experience!" 
        </p>
      </div>


      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src="../Hero.png" alt="pic" className="h-[400px] w-[fit]"  />

      </div>
    </section>
  );
};

export default Hero;
