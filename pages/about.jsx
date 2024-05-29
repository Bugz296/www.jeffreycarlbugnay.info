import styles from '../styles/HomePage.module.css';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      <div id={styles.about_me_container}>
        <div className={styles.about_me}>
          <h3>About Me</h3>
          <p>A seasoned <span>Software Engineer</span> with an unwavering passion for programming, boasting a robust <span>8-year background</span> in the field. Specializing in <span>Web Development</span>, I excel in <b>crafting innovative solutions</b> to complex problems, always striving for <b>long-term effectiveness</b>. Known for my <b>autonomy and decisiveness</b>, I tackle challenges <b>head-on</b>, relying on my problem-solving prowess to deliver results.</p>
          <p>With a solid foundation in <span>Customer Service</span> cultivated over <span>4 years</span>, I possess <b>exceptional communication skills</b>, enabling me to <b>effectively collaborate</b> with teams and engage with clients to understand and meet their needs.</p>
          <p>Driven by a relentless pursuit of excellence,</p>
          <p><em>"I am poised to leverage my skills and expertise to contribute positively to any project or team environment"</em>.</p>
          <br/>
          <a href="/public/downloads/resume.pdf" className={styles.outlined} id={styles.download_resume_btn} data-text="Download Résumé" download="Jeffrey Carl Bugnay - Resume"><span>Download Résumé</span></a>
        </div>
        <Image
          width={486}
          height={500}
          src="/about-me.png"
          className={styles.about_me_img}
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
