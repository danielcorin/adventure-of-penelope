import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/BookPage.module.css';
import homestyles from '../styles/Home.module.css';

export default function Credits() {
  return (
    <>
      <Head>
        <title>The Adventure of Penelope the Porcupine and the Land of Whimsy</title>
        <meta name="description" content="The Adventure of Penelope the Porcupine and the Land of Whimsy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={homestyles.main}>
        <div className={styles.page}>
          <div className={styles.content}>
            <div className={styles.infotext}>
              <h1>How did I &ldquo;write&rdquo; this?</h1>
              <h2>Story</h2>
              <p>
                I typed a series of prompts to <a href="https://chat.openai.com/chat">ChatGPT</a> to get it to write me a story with the following plot:
              </p>
              <blockquote>
                Once upon a time there was porcupine. Every day, she baked a loaf of bread. One day the loaf disappeared. Because of that, she had too much butter. Because of that, things got slippery. Until finally she opened the first ever butter theme park.
              </blockquote>
              <h2>Illustrations</h2>
              <p>
                I typed various descriptions into <a href="https://midjourney.com/home/">Midjourney</a> until I got something I liked enough for each page, but using it through Discord is <i>brutal</i> and now I am out of credits.
              </p>
              <h2>Glue Guy</h2>
              <p>
                <Link href="https://blog.danielcorin.com/">Dan Corin</Link>
              </p>
              <h2><Link href="/">← Read it again</Link></h2>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
