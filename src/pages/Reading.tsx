// Reading.tsx

import React from 'react';
import { motion } from 'framer-motion';
import './Reading.css';
import atomicHabits from '../images/atomic_habits.jpg';
import richDadPoorDad from '../images/rich_dad_poor_dad.jpg';
import alchemist from '../images/alchemist.jpg';
import eatThatFrog from '../images/eat_that_frog.jpg';
import vijayanikiAidhuMetlu from '../images/vijayaniki_aidu_metlu.jpg';
import venneloAdapilla from '../images/vennelo_adapilla.jpeg';
import crack from '../images/crack.jpg';
import clean from '../images/clean.jpg';
import { staggerContainer, fadeSlideUp, cardHover } from '../motion';

const books = [
  {
    title: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell",
    imgSrc: crack,
    description: "Improves problem-solving skills",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    imgSrc: atomicHabits,
    description: "A practical guide to building good habits and breaking bad ones.",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    imgSrc: richDadPoorDad,
    description: "An eye-opener on wealth, assets, and financial literacy.",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    imgSrc: alchemist,
    description: "A magical journey of following one's dreams.",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    imgSrc: clean,
    description: "A Handbook of Agile software Craftsmanship.",
  },
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <motion.h2
        className="reading-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📚 Books That Shaped My Journey
      </motion.h2>
      <p className="reading-intro">These books have influenced my perspectives, motivation, and self-growth.</p>
      <motion.div
        className="books-grid"
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {books.map((book, index) => (
          <motion.div key={index} className="book-card" variants={fadeSlideUp} {...cardHover}>
            <img src={book.imgSrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Reading;
