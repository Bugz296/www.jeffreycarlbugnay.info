import Link from 'next/link';
import ProfilePicture from '../components/ProfilePicture';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h5>DESIGN</h5>
          <h4>DEVELOP</h4>
          <h3>TESTING</h3>
          <h2>MAINTAIN</h2>
          <h1>DEPLOYMENT</h1>
          <h2>WEB APPLICATIONS</h2>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Jeffrey Carl</h1>
            <h6 className={styles.bio}>Software Engineer</h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <ProfilePicture className={styles.profilePicture} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
