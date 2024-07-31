import React from "react";
import "./CardPresentation.style.css";
import Silhouette from "../../assets/img/silhouette.png";
import DesignCubes from "../../assets/img/design-cubes.png";
import DesignCorner from "../../assets/img/design-corner.png";
import IconWhatsapp from "../../assets/icon/logo-whatsapp.png";
import IconGmail from "../../assets/icon/logo-gmail.png";
import IconLinkedin from "../../assets/icon/logo-linkedin.png";
import Profile from "../../assets/img/profile.png";
import EnterpiseColor from "../../assets/img/enterprise-color-hd.png";
import EnterpiseWhite from "../../assets/img/enterprise-white-hd.png";
import GistezyFont from "../../assets/font/Gistesy.ttf";
import NourdNormalFont from "../../assets/font/Nourd/nourd_regular.ttf";
import NourdBoldFont from "../../assets/font/Nourd/nourd_semi_bold.ttf";

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

  const fonts = [
    {
      id: 1,
      font: GistezyFont,
      title: "Gistezy",
    },
    {
      id: 2,
      font: NourdNormalFont,
      title: "Nourd Normal",
    },
    {
      id: 3,
      font: NourdBoldFont,
      title: "Nourd Bold",
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
      img: EnterpiseColor,
      title: "Enterprise Color",
    },
    {
      id: 3,
      img: EnterpiseWhite,
      title: "Enterprise White",
    },
  ];

  return (
    <div className="card-container">
      {/* Front Side */}
      <div className="face front">
        <h3>Front Side</h3>
      </div>
      {/* Back Side */}
      <div className="face back">
        <h3>Back Side</h3>
        <p>This is the back of the card.</p>
      </div>
    </div>
  );
};

export default CardPresentation;