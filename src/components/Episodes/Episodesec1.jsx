import React from "react";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Parul from '../../assets/parul.jpeg';
import guest8 from '../../assets/guest8.jpeg';
import guest7 from '../../assets/guest7.jpeg';
import guest6 from '../../assets/guest6.jpeg';
import guest5 from '../../assets/guest5.jpg';
import guest4 from '../../assets/guest4.jpeg';
import guest3 from '../../assets/guest3.jpeg';
import guest2 from '../../assets/guest2.jpeg';
import guest1 from '../../assets/guest1.jpg';






const EpisodeList = [
  {
    guestName: "Dr. Parul Kumar",
    guestBio: "Principal of Navy Children’s School Visakhapatnam.",
    guestImage: Parul,
    episodeNo: "EPISODE 9",
    episodeTitle: "Stress Less, Live More",
    episodeDescription: "Stress Management and Living a Balanced Life",
    episodeLink: "https://podcasters.spotify.com/pod/show/cross-roads5/episodes/Episode-1-e2qt0d9"
  },
  {
    guestName: "Abhishek Bokinala",
    guestBio: "CEO & Founder of Oceanautics",
    guestImage: guest8,
    episodeNo: "EPISODE 8",
    episodeTitle: "Innovations in Defense Technology",
    episodeDescription: "The Oceanautics Journey in Revolutionizing Defense Tech",
    episodeLink: "https://podcasters.spotify.com/pod/show/cross-roads5/episodes/Episode-2-e2qt0d9"
  },
  {
    guestName: "Mr. Venugopal Lakshmipuram",
    guestBio: " Motivational Speaker",
    guestImage: guest7,
    episodeNo: "EPISODE 7",
    episodeTitle: "Citizenship and Social Responsibility",
    episodeDescription: "Being a Responsible Citizen",
    episodeLink: "https://podcasters.spotify.com/pod/show/cross-roads5/episodes/Episode-3-e2qt0d9"
  },
  {
    guestName: "Col. Rajneesh Akhoury",
    guestBio: "Public Relations Officer",
    guestImage: guest6,
    episodeNo: "EPISODE 6",
    episodeTitle: "Technological Advancements in Industry",
    episodeDescription: "How Technology is Redefining the Industry",
    episodeLink: "https://podcasters.spotify.com/pod/show/cross-roads5/episodes/Episode-4-e2qt0d9"
  },
  {
    guestName: "Hon. Ali Sabry, PC",
    guestBio: "Sri Lanka’s Foreign Minister",
    guestImage: guest5,
    episodeNo: "EPISODE 5",
    episodeTitle: "Exploring Business and Trade Opportunities",
    episodeDescription: "Business and Trade Opportunities in Sri Lanka",
    episodeLink: "https://podcasters.spotify.com/pod/show/cross-roads5/episodes/Episode-5-e2qt0d9"
  },
  {
    guestName: "Sri K. Satish Garu",
    guestBio: "MD of F9 Technologies, Founder of Vizag Volunteers & Kalam Dream Labs.",
    guestImage: guest4,
    episodeNo: "EPISODE 4",
    episodeTitle: "Volunteerism and Social Entrepreneurship",
    episodeDescription: "Building Social Impact: Empowering Youth",
    episodeLink: "https://podcasters.spotify.com/pod/show/cross-roads5/episodes/Episode-6-e2qt0d9"
  },
  {
    guestName: "Mr. V. Ramalingeswara Reddy Garu",
    guestBio: "Head of the Placement Cell, Andhra University",
    guestImage: guest3,
    episodeNo: "EPISODE 3",
    episodeTitle: "Career Opportunities for Students",
    episodeDescription: "Placements and Internships",
    episodeLink: "https://podcasters.spotify.com/pod/show/cross-roads5/episodes/Episode-7-e2qt0d9"
  },
  {
    guestName: "Prof. Mallikarjuna Rao Pasumarthi",
    guestBio: "Head of the Department of Electrical Engineering, Andhra University",
    guestImage: guest2,
    episodeNo: "EPISODE 2",
    episodeTitle: "Technological Advancements and Entrepreneurship",
    episodeDescription: "Research-Innovation-Technopreneurship",
    episodeLink: "https://podcasters.spotify.com/pod/show/cross-roads5/episodes/Episode-8-e2qt0d9"
  },
  {
    guestName: "Prof. V Krishna Mohan Garu",
    guestBio: "Officer on Special Duty, Former Registrar, Andhra University",
    guestImage: guest1,
    episodeNo: "EPISODE 1",
    episodeTitle: "Management Trends and Future Directions",
    episodeDescription: "Evolving Landscape of Management",
    episodeLink: "https://podcasters.spotify.com/pod/show/cross-roads5/episodes/Episode-9-e2qt0d9"
  },
];

const Episodes = () => {
  return (
    <div style={styles.episodesContainer}>
      <h1 style={styles.sectionHeading}>Our Episodes</h1>
      <div style={styles.timelineContainer}>
        {EpisodeList.map((episode, index) => (
          <motion.div
            key={index}
            style={styles.timelineBlock}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div style={styles.container}>
              {/* Guest Image Block */}
              <div style={styles.imageContainer}>
                <img
                  src={episode.guestImage}
                  alt={episode.guestName}
                  style={styles.guestImage}
                />
              </div>

              {/* Episode Details Block */}
              <div style={styles.detailsContainer}>
                <h2>{episode.guestName}</h2>
                <p><strong></strong> {episode.guestBio}</p>
                <p><strong></strong> {episode.episodeNo}</p>
                <p><strong>Episode Title:</strong> {episode.episodeTitle}</p>
                <p><strong>Description:</strong> {episode.episodeDescription}</p>
                <a href={episode.episodeLink} target="_blank" rel="noopener noreferrer">
                  Listen to the episode
                </a>
              </div>
            </div>
            {index !== EpisodeList.length - 1 && (
              <motion.div
                style={styles.timelineConnector}
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ delay: index * 0.2, duration: 1, ease: "easeInOut" }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  episodesContainer: {
    padding: "40px",
    backgroundColor: "#f4f4f4",
  },
  sectionHeading: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  timelineContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  timelineBlock: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%", // Width of each episode block
    marginBottom: "40px", // Space between blocks
    position: "relative",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  },
  timelineConnector: {
    position: "absolute",
    top: "50%",
    left: "100%",
    width: "2px",
    height: "0", // Initially zero height to animate
    backgroundColor: "#ccc", // Light color to connect blocks
    transform: "translateY(-50%)",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  imageContainer: {
    flex: 1,
    maxWidth: "50%",
    paddingRight: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  guestImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "10px",
  },
  detailsContainer: {
    flex: 1,
    maxWidth: "50%",
    paddingLeft: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
};

export default Episodes;