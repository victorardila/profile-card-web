import React from "react";
import "./Header.style.css";
import { faDownload, faPrint } from "@fortawesome/free-solid-svg-icons";
import ButtonHeader from "../common/ButtonHeader";
import html2canvas from "html2canvas";

const Header = () => {
  const handleDownload = async () => {
    const frontFace = document.querySelector(".card-container .face.front");
    const backFace = document.querySelector(".card-container .face.back");

    if (frontFace && backFace) {
      try {
        // Captura de la vista frontal con opciones mejoradas
        const frontCanvas = await html2canvas(frontFace, {
          scale: 2, // Aumenta la resolución de la imagen
          useCORS: true, // Permite capturar imágenes desde otros dominios
          logging: true, // Registra información de depuración
          backgroundColor: null, // Captura con fondo transparente
          scrollX: 0, // Ajusta si hay desplazamiento
          scrollY: 0 // Ajusta si hay desplazamiento
        });
        const frontImage = frontCanvas.toDataURL("image/png");

        // Captura de la vista trasera con opciones mejoradas
        const backCanvas = await html2canvas(backFace, {
          scale: 2, // Aumenta la resolución de la imagen
          useCORS: true, // Permite capturar imágenes desde otros dominios
          logging: true, // Registra información de depuración
          backgroundColor: null, // Captura con fondo transparente
          scrollX: 0, // Ajusta si hay desplazamiento
          scrollY: 0 // Ajusta si hay desplazamiento
        });
        const backImage = backCanvas.toDataURL("image/png");

        // Crea enlaces para descargar las imágenes
        const downloadLinkFront = document.createElement("a");
        downloadLinkFront.href = frontImage;
        downloadLinkFront.download = "front-side.png";
        downloadLinkFront.click();

        const downloadLinkBack = document.createElement("a");
        downloadLinkBack.href = backImage;
        downloadLinkBack.download = "back-side.png";
        downloadLinkBack.click();
      } catch (error) {
        console.error("Error capturing images:", error);
      }
    } else {
      console.error("No se encontraron los elementos para capturar.");
    }
  };
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="header-container">
      <div className="header-options">
        <ButtonHeader
          icon={faDownload}
          tooltip="Download"
          onClick={handleDownload}
        />
        <ButtonHeader icon={faPrint} tooltip="Print" onClick={handlePrint} />
      </div>
    </div>
  );
};

export default Header;