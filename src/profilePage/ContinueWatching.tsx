import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

type ProfileType = 'Recruiter' | 'developer' | 'stalker' | 'Adventurer';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  Recruiter: [
    { title: "Music", imgSrc: "https://res.cloudinary.com/dyz1paeem/image/upload/v1742576765/artists_bwg2lu.avif", link: "/music" },
    { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    { title: "Blogs", imgSrc: "https://res.cloudinary.com/dyz1paeem/image/upload/t_optimized_new/v1742626733/vIhgK26nDY8-HkkD_1_unayka.webp", link: "/blogs" },
    { title: "Games", imgSrc: "https://t4.ftcdn.net/jpg/06/25/34/17/360_F_625341714_HNehTMy2h6JyeS6xdT7dZV4kBvB32JHM.jpg", link: "/game" },
    { title: "Contact Me", imgSrc: "https://res.cloudinary.com/dyz1paeem/image/upload/t_optimized_new/v1742724460/nyc_szs8su.webp", link: "/contact-me" }
  ],
  developer: [
    { title: "Music", imgSrc: "https://res.cloudinary.com/dyz1paeem/image/upload/v1742576765/artists_bwg2lu.avif", link: "/music" },
    { title: "Blogs", imgSrc: "https://res.cloudinary.com/dyz1paeem/image/upload/t_optimized_new/v1742626733/vIhgK26nDY8-HkkD_1_unayka.webp", link: "/blogs" },
    { title: "Certifications", imgSrc: "https://picsum.photos/id/1028/300/200", link: "/certifications" },
    { title: "Games", imgSrc: "https://t4.ftcdn.net/jpg/06/25/34/17/360_F_625341714_HNehTMy2h6JyeS6xdT7dZV4kBvB32JHM.jpg", link: "/game" },
    { title: "Contact Me", imgSrc: "https://res.cloudinary.com/dyz1paeem/image/upload/t_optimized_new/v1742724460/nyc_szs8su.webp", link: "/contact-me" },
    { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
  ],
  stalker: [
    { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    { title: "Blogs", imgSrc: "https://res.cloudinary.com/dyz1paeem/image/upload/t_optimized_new/v1742626733/vIhgK26nDY8-HkkD_1_unayka.webp", link: "/blogs" },
    { title: "Contact Me", imgSrc: "https://res.cloudinary.com/dyz1paeem/image/upload/v1742626141/photo-1500916434205-0c77489c6cf7_optimized_10_ydw1px.jpg", link: "/contact-me" }
  ],
  Adventurer: [
    { title: "Music", imgSrc: "https://res.cloudinary.com/dyz1paeem/image/upload/v1742576765/artists_bwg2lu.avif", link: "/music" },
    { title: "Certifications", imgSrc: "https://picsum.photos/id/1028/300/200", link: "/certifications" },
    { title: "Games", imgSrc: "https://t4.ftcdn.net/jpg/06/25/34/17/360_F_625341714_HNehTMy2h6JyeS6xdT7dZV4kBvB32JHM.jpg", link: "/game" },
    { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    { title: "Contact Me", imgSrc: "https://res.cloudinary.com/dyz1paeem/image/upload/t_optimized_new/v1742724460/nyc_szs8su.webp", link: "/contact-me" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
