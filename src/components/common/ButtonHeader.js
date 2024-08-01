import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonHeader = ({ icon, tooltip, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="button-header"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isHovered ? "#f5f5f5" : "transparent",
        border: isHovered ? "0.5px solid #e0e0e0" : "1px solid transparent",
        height: "50px",
        width: "50px",
        borderRadius: "20%",
        cursor: "pointer",
      }}
      title={tooltip}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/*Color*/}
      <FontAwesomeIcon
        icon={icon}
        style={{ color: isHovered ? "#4b4b4b" : "#9e9e9e" }}
      />
    </div>
  );
};

export default ButtonHeader;
