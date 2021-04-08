import React from "react";
import { CardProps } from "./Card.interface";
import styles from "./Card.module.css";

const Card: React.FC<CardProps> = ({ title, imageUrl, children }) => {
  return (
    <div className={styles.card}>
      <figure className={styles.figure}>
        <img className={styles.img} alt="" src={imageUrl} />
      </figure>
      <section className={styles.content}>
        <header>
          <h1 className={styles.title}>{title}</h1>
        </header>
        {children}
      </section>
    </div>
  );
};

export default Card;
