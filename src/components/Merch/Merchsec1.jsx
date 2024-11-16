import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Giri from '../../assets/Giri.jpeg';
import Vaghira from '../../assets/Vaghira.jpeg';
import Sankara from '../../assets/sankara.jpeg';

const EpisodeList = [
  {
    guestName: "Dr E Sankara Rao",
    guestBio: "Visionary behind the show",
    guestImage: Sankara,
    episodeTitle: "Dr. E Sankara Rao is the visionary driving the talk show. His goal is to bring together leaders in technology, science, and society to spark innovation and inspire impactful conversations, share the things to society",
    episodeLink: "https://podcasters.spotify.com/pod/show/cross-roads5/episodes/Episode-1-e2qt0d9"
  },
  {
    guestName: "Adv Vaghira Jonnada",
    guestBio: "Guiding Light",
    guestImage: Vaghira,
    episodeTitle: "Vaghira Ma’am provides invaluable support and guidance, ensuring the show's discussions are intellectually stimulating and accessible. Her presence helps create an inspiring atmosphere for thoughtful dialogue.",
    episodeLink: "https://podcasters.spotify.com/pod/show/cross-roads5/episodes/Episode-2-e2qt0d9"
  },
  {
    guestName: "Dr Giri Raja Sekhar Gunnu",
    guestBio: "Show Enabler",
    guestImage: Giri,
    episodeTitle: "Dr. Giri Raja Sekhar Gunnu ensures the smooth execution of the show. His organizational skills and creative input guarantee engaging episodes, making sure each conversation leaves a lasting impact.",
    episodeLink: "https://podcasters.spotify.com/pod/show/cross-roads5/episodes/Episode-3-e2qt0d9"
  },
];

const Episodes = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Mentors</h2>
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

                  {thirdEpisode.guestName && (
                    <div style={styles.episodeBlock}>
                      <div style={styles.imageContainer}>
                        <img
                          src={thirdEpisode.guestImage}
                          alt={thirdEpisode.guestName}
                          style={styles.guestImage}
                        />
                      </div>
                      <div style={styles.detailsContainer}>
                        <h3>{thirdEpisode.guestName}</h3>
                        <p><strong>{thirdEpisode.guestBio}</strong></p>
                        <p>{thirdEpisode.episodeTitle}</p>
                        <a href={thirdEpisode.episodeLink} target="_blank" rel="noopener noreferrer">
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