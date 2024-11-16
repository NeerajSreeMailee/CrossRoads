import Homesec1 from "../../components/Home/Homesec1";
import Episodesec1 from "../../components/Episodes/Episodesec1";
import Aboutsec1 from "../../components/About/Aboutsec1";
import Merchsec1 from "../../components/Merch/Merchsec1";
import Testimonialsec1 from "../../components/Testimonials/Testimonialsec1";
import Sponsorsec1 from "../../components/Sponsors/Sponsorsec1";
import Sponsorsec2 from "../../components/Sponsors/Sponsorsec2";
import Sponsorsec3 from "../../components/Sponsors/Sponsorsec3";

const Home = () => {
  return (
    <div style={{ width: "100%", overflow:"hidden" }}>
      <div id="home">
        <Homesec1 />
      </div>
      <div id="episodes">
        <Episodesec1 />
      </div>
      <div id="about">
        <Aboutsec1 />
      </div>
      <div id="merch">
        <Merchsec1 />
      </div>
      <div id="testimonials">
        <Testimonialsec1 />
      </div>
      <div id="sponsors">
        <Sponsorsec1 />
        <Sponsorsec2 />
        <Sponsorsec3 />
      </div>
    </div>
  );
};


export default Home;
