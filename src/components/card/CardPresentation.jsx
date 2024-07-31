import React from "react";
import "./CardPresentation.style.css";
import Silhouette from "../../assets/img/silhouette.png";
import DesignCubes from "../../assets/img/design-cubes.png";
import DesignCorner from "../../assets/img/design-corner.png";
import ProfileContainer from "../../assets/img/profile_container.png";
import IconWhatsapp from "../../assets/icon/logo-whatsapp.png";
import IconGmail from "../../assets/icon/logo-gmail.png";
import IconLinkedin from "../../assets/icon/logo-linkedin.png";
import Profile from "../../assets/img/profile.png";
import EnterpriseLog from "../../assets/svg/enterprise-w.svg";

const CardPresentation = () => {
  const designs = [
    {
      id: 1,
      img: Silhouette,
      title: "Silhouette",
    },
    {
      id: 2,
      img: DesignCubes,
      title: "Design Cubes",
    },
    {
      id: 3,
      img: DesignCorner,
      title: "Design Corner",
    },
    {
      id: 4,
      img: ProfileContainer,
      title: "Profile Container",
    },
  ];

  const icons = [
    {
      id: 1,
      img: IconWhatsapp,
      title: "Whatsapp",
    },
    {
      id: 2,
      img: IconGmail,
      title: "Gmail",
    },
    {
      id: 3,
      img: IconLinkedin,
      title: "Linkedin",
    },
  ];

  const profile = [
    {
      id: 1,
      img: Profile,
      title: "Profile",
    },
    {
      id: 2,
      img: EnterpriseLog,
      title: "Enterprise Logo",
    },
  ];

  const infocontact = [
    {
      id: 1,
      title: "Whatsapp",
      info: "+57 320 890 1234",
      link: "https://wa.me/573147133334",
    },
    {
      id: 2,
      title: "Gmail",
      info: "victoradila@gmail.com",
      link: "https://mail.google.com/mail/u/0/#inbox",
    },
    {
      id: 3,
      title: "Linkedin",
      info: "linkedin.com/in/victorardila",
      link: "https://www.linkedin.com/in/victor-ardila-31a94b230/",
    },
  ];

  return (
    <div className="card-container">
      {/* Front Side */}
      <div className="face front">
        <div className="card-silhouette">
          <img src={designs[0].img} alt={designs[0].title} />
        </div>
        <div className="card-designs-front">
          <div className="card-designs-layout">
            <div className="card-designs-cubes-front">
              <img src={designs[1].img} alt={designs[1].title} />
            </div>
            <div className="card-designs-info">
              <div className="card-content-company-logo">
                <img src="" alt={profile[1].title} typeof="svg" />
              </div>
              <div className="card-content-company-name">
                <h2>INNOBYTE TECH</h2>
                <p>Construimos tus sueños un byte a la vez</p>
              </div>
            </div>
            <div className="card-design-corner-front">
              <img src={designs[2].img} alt={designs[2].title} />
            </div>
          </div>
        </div>
      </div>
      {/* Back Side */}
      <div className="face back">
        <div className="card-designs-back">
          <div className="card-design-corner-back">
            <img src={designs[2].img} alt={designs[2].title} />
          </div>
          <div className="card-design-space-back"></div>
          <div className="card-design-cubes-back">
            <img src={designs[1].img} alt={designs[1].title} />
          </div>
        </div>
        <div className="card-profile">
          <div className="card-profile-layout">
            <div className="card-profile-preview">
              <div className="card-profile-design-back" style={{backgroundImage: `url(${designs[3].img})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                <div className="card-profile-picture">
                  <img src={profile[0].img} alt={profile[0].title} />
                </div>
              </div>
              <div className="card-profile-name">
                <h2>Victor Ardila</h2>
                <p>Ingeniero de sistemas</p>
              </div>
            </div>
            <div className="card-profile-info">
              <div className="card-profile-contact">
                <div className="card-profile-contact-layout">
                  {infocontact.map((item) => (
                    <div className="card-profile-contact-item" key={item.id}>
                      <img
                        src={icons[item.id - 1].img}
                        alt={icons[item.id - 1].title}
                      />
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.info}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-profile-role">
                <h1>Desarrollador</h1>
                <p>Full Stack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPresentation;
