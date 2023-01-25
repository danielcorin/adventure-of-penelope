import Link from 'next/link';
import styles from '../styles/BookPage.module.css';

interface BookPageProps {
  content: string;
  imagePath: string;
  index: number;
}

const BookPage: React.FunctionComponent<BookPageProps> = ({ content, imagePath, index }) => {

  let width = 500;
  let height = 500;

  return (
    <div className={styles.page}>
      <div className={styles.image}>
        <img width={width} height={height} src={imagePath} alt="Illustration from children's book" />
      </div>
      <div className={styles.content}>
        <p className={styles.playfultext}>
          {content}
          <br />
          <br />
          {index === 11 ? <Link href="/credits">Credits</Link> : null}
        </p>
      </div>

    </div>
  );
};

export default BookPage;
