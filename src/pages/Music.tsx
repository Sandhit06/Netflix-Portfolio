import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import './Music.css';
import { staggerContainer, fadeSlideUp, cardHover } from '../motion';

const genresData = [
  {
    name: "Favorites",
    playlists: [
      { title: "My Playlist", embedUrl: "https://open.spotify.com/embed/playlist/0sDahzOkMWOmLXfTMf2N4N?utm_source=generator&theme=0" },
      { title: "Hotel California", embedUrl: "https://open.spotify.com/embed/playlist/7cvqLYs4jAN3FhVOXaKprB?utm_source=generator&theme=0" },
      { title: "After Hours", embedUrl: "https://open.spotify.com/embed/album/4yP0hdKOZPNshxUOjY0cZj?utm_source=generator&theme=0" }
    ]
  },
  {
    name: "Pop",
    playlists: [
      { title: "Today's Top Hits", embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0" },
      { title: "Pop Rising", embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DWUa8ZRTfalHk?utm_source=generator&theme=0" },
      { title: "Mega Hit Mix", embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DXbYM3nMM0oPk?utm_source=generator&theme=0" }
    ]
  },
  {
    name: "Rap",
    playlists: [
      { title: "RapCaviar", embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator&theme=0" },
      { title: "Get Turnt", embedUrl: "https://open.spotify.com/embed/playlist/2hPMVkM70pIjRFdvRTxlch?utm_source=generator&theme=0" },
      { title: "Gold School", embedUrl: "https://open.spotify.com/embed/playlist/3PMsbsTsmBhuuESfYCOdY1?utm_source=generator&theme=0" }
    ]
  },
  {
    name: "Hard Rock",
    playlists: [
      { title: "Rock Hard", embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DWWJOmJ7nRx0C?utm_source=generator&theme=0" },
      { title: "Hard Rock", embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX68H8ZujdnN7?utm_source=generator&theme=0" },
      { title: "Kickass Metal", embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DWTcqUzwhNmKv?utm_source=generator&theme=0" }
    ]
  },
  {
    name: "Electronic",
    playlists: [
      { title: "Mint", embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4dyzvuaRJ0n?utm_source=generator&theme=0" },
      { title: "Dance Hits", embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0BcQWzuB7ZO?utm_source=generator&theme=0" },
      { title: "Bassement", embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1EIdDyy28MYSyS?utm_source=generator&theme=0" }
    ]
  },
  {
    name: "Alternative",
    playlists: [
      { title: "The New Alt", embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX82GYcclJ3Ug?utm_source=generator&theme=0" },
      { title: "Alt NOW", embedUrl: "https://open.spotify.com/embed/playlist/2OK7UqRuCqLTFrHVv0Qdoa?utm_source=generator&theme=0" },
      { title: "90s Rock Anthems", embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX1rVvRgjX59F?utm_source=generator&theme=0" }
    ]
  }
];

const Music: React.FC = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Bulletproof Scroll-to-Top Fix
  useLayoutEffect(() => {
    // 1. Disable the browser's automatic scroll memory
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Force the scroll to the top immediately before the screen paints
    window.scrollTo(0, 0);

    // 3. A quick backup scroll just in case the heavy Spotify iframes shift the layout as they load
    const scrollTimeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 150);

    return () => clearTimeout(scrollTimeout);
  }, []);

  // ... rest of your smooth scroll function and return statement ...

  // Smooth scroll function triggered when a genre chip is clicked
  const scrollToGenre = (genreName: string) => {
    const element = document.getElementById(`genre-${genreName}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="music-page">
      <motion.div
        className="quote"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>"Headphones on, world off. The soundtrack to my everyday.” 🎧</p>
      </motion.div>

      {/* Navigation Buttons */}
      <div className="genre-section">
        <h3>Explore by Genre</h3>
        <motion.div
          className="genres"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {genresData.map((genreObj, index) => (
            <motion.div
              key={index}
              className="genre-card"
              variants={fadeSlideUp}
              {...cardHover}
              onClick={() => scrollToGenre(genreObj.name)} // Triggers scroll
            >
              <p>{genreObj.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Genre Content Sections */}
      <div className="albums-section">
        {genresData.map((genreObj, genreIndex) => (
          <div key={genreIndex} id={`genre-${genreObj.name}`} className="genre-category">
            <h4>{genreObj.name}</h4>
            <motion.div
              className="albums"
              variants={staggerContainer(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {genreObj.playlists.map((playlist, idx) => (
                <motion.div key={idx} className="album-card" variants={fadeSlideUp} {...cardHover}>
                  <iframe
                    title={playlist.title}
                    className="spotify-iframe"
                    src={playlist.embedUrl}
                    allowFullScreen={false}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;