import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BookPage from '../components/BookPage'
import { useEffect, useState } from 'react'

export default function Home() {
  const lastPage: Number = 11;
  const contents: string[] = [
    "The Adventure of Penelope the Porcupine and the Land of Whimsy",
    "Once upon a time, in a land far, far away, there lived a porcupine named Penelope. She was a kind and gentle soul, with a heart as big as the blue sky above.",
    "But there was one thing that Penelope loved more than anything else in the world - baking bread. Every day, she would wake up early, mix together the perfect blend of flour, yeast, and water, and carefully shape the dough into the most delicious loaves you have ever tasted.",
    "But one day, something strange happened. When Penelope went to fetch her latest batch of bread from the oven, it was nowhere to be found. She searched high and low, but the bread was nowhere to be seen.",
    "At first, Penelope was worried that someone had stolen her precious loaves. But then she noticed something even stranger - her kitchen was covered in a thick layer of butter.",
    "Penelope had always loved butter, but she had never used quite so much before. She had no idea how all of this butter had ended up in her kitchen. And so, with a curious and adventurous spirit, she set out to solve the mystery.",
    "She followed the trail of butter through the forests, over the hills, and across the streams, until she finally arrived at a strange and wonderful place. It was a place unlike any other, where the trees were made of butter and the flowers were made of sugar.",
    "And there, in the center of the Land of Whimsy, she found the culprit - a mischievous fairy named Sparkles, who had snuck into Penelope's kitchen and turned all of her bread into butter.",
    "Sparkles was sorry for her mischief, and offered to help Penelope turn the butter back into bread. But Penelope had a better idea.",
    "Together, they opened the first ever butter theme park, filled with buttery roller coasters, slippery slides, and all sorts of other whimsical attractions.",
    "The park was a huge success, and Penelope and Sparkles became the best of friends. And from that day on, Penelope's kitchen was always filled with a thick layer of butter, just the way she liked it.",
    "The end.",
  ];

  let [pageNumber, setPageNumber] = useState(0);
  let [imagePath, setImagePath] = useState("/pages/page_0.jpg");
  let [content, setContent] = useState(contents[0]);

  function nextPage() {
    if (pageNumber >= lastPage) {
      return;
    }
    const toSetNumber = pageNumber + 1;
    setPageNumber(toSetNumber);
    setImagePath(`/pages/page_${toSetNumber}.jpg`);
    setContent(contents[toSetNumber]);
  }

  function prevPage() {
    if (pageNumber <= 0) {
      return;
    }
    const toSetNumber = pageNumber - 1;
    setPageNumber(toSetNumber);
    setImagePath(`/pages/page_${toSetNumber}.jpg`);
    setContent(contents[toSetNumber]);
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      nextPage();
    } else if (event.key === 'ArrowLeft') {
      prevPage();
    }
  }

  function handleClick (event: MouseEvent) {
    // get the width of the window
    const windowWidth = window.innerWidth;

    // get the x coordinate of the click event
    const x = event.clientX;

    if (x > windowWidth / 2) {
      // the click occurred on the right side of the screen
      nextPage();
    } else {
      // the click occurred on the left side of the screen
      prevPage();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClick);
    };
  }, [pageNumber, imagePath]);

  return (
    <>
      <Head>
        <title>The Adventure of Penelope the Porcupine and the Land of Whimsy</title>
        <meta name="description" content="The Adventure of Penelope the Porcupine and the Land of Whimsy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <BookPage imagePath={imagePath} content={content} index={pageNumber} />
      </main>
    </>
  )
}
