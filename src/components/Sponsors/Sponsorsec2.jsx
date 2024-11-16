import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import shazin from '../../assets/shazin.jpeg';
import Joel from '../../assets/joel.jpg';
import neeraj from '../../assets/neeraj.jpeg';


const EpisodeList = [
  {
    guestName: "Shazin Hijazy",
    guestBio: "Founder and Host",
    guestImage: shazin,
  },
  {
    guestName: "Joel Raj Kammara",
    guestBio: "Co Founder, Creative Director",
    guestImage: Joel,
  },
];

const Episodes = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Team</h2>
      <Carousel
        showThumbs={false}
        infiniteLoop={false} // Disable looping
        showStatus={false}
        showIndicators={false}
        autoPlay={false} // Disable automatic play
        stopOnHover={false}
        centerMode={false}
        centerSlidePercentage={100} // Ensure each slide takes up 100% of the width
      >
        {EpisodeList.map((episode, index) => {
          if (index % 3 === 0) {
            const nextEpisode = EpisodeList[index + 1] || {}; 
            const thirdEpisode = EpisodeList[index + 2] || {};
            return (
              <div key={index} style={styles.slide}>
                <div style={styles.episodeRow}>
                  <div style={styles.episodeBlock}>
                    <div style={styles.imageContainer}>
                      <img
                        src={episode.guestImage}
                        alt={episode.guestName}
                        style={styles.guestImage}
                      />
                    </div>
                    <div style={styles.detailsContainer}>
                      <h3>{episode.guestName}</h3>
                      <p><strong>{episode.guestBio}</strong></p>
                      <p>{episode.episodeTitle}</p>
                      <a href={episode.episodeLink} target="_blank" rel="noopener noreferrer">
                        Link to connect
                      </a>
                    </div>
                  </div>

                  {nextEpisode.guestName && (
                    <div style={styles.episodeBlock}>
                      <div style={styles.imageContainer}>
                        <img
                          src={nextEpisode.guestImage}
                          alt={nextEpisode.guestName}
                          style={styles.guestImage}
                        />
                      </div>
                      <div style={styles.detailsContainer}>
                        <h3>{nextEpisode.guestName}</h3>
                        <p><strong>{nextEpisode.guestBio}</strong></p>
                        <p>{nextEpisode.episodeTitle}</p>
                        <a href={nextEpisode.episodeLink} target="_blank" rel="noopener noreferrer">
                          Link to connect
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          }
          return null;
        })}
      </Carousel>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  slide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
    backgroundColor: "#f4f4f4",
  },
  episodeRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
  },
  episodeBlock: {
    width: "30%",
    backgroundColor: "#fff",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  },
  guestImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "10px",
  },
  detailsContainer: {
    marginTop: "20px",
    textAlign: "center",
    padding: "0 20px",
  },
};

export default Episodes;