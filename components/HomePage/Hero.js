import Image from "next/image";
import classes from "./Hero.module.css";

export function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/anton.jpg"
          alt="An image showing Anton"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Anton</h1>
      <p>I blog about web development - especially UI library React.</p>
    </section>
  );
}
