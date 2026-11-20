import React from "react";
import { InfoPageLayout } from "../../shared/ui/infoPageLayout/InfoPageLayout";

export const AboutPage: React.FC = () => {
  return (
    <InfoPageLayout
      title="Sobre el proyecto SolidBase Docs"
      updatedAt="Noviembre 2026"
    >
      <p>
        <strong>SolidBase Docs</strong>— un recurso informativo y educativo
        independiente centrado en la arquitectura de las redes blockchain, los
        principios de funcionamiento de las billeteras criptográficas y las
        reglas fundamentales de la seguridad digital.
      </p>

      <h2>Nuestra misión</h2>
      <p>
        Las tecnologías de registro distribuido a menudo pueden resultar
        difíciles de comprender debido a la abundancia de terminología técnica.
        Nuestro objetivo es ofrecer guías estructuradas, neutrales y accesibles
        que ayuden a los usuarios a entender cómo funcionan los monederos de
        software y hardware, los principios para el almacenamiento de frases
        semilla y cómo verificar transacciones.
      </p>

      <h2>Principios para la elaboración de materiales</h2>
      <ul>
        <li>
          <strong>Un formato exclusivamente educativo:</strong> No ofrecemos
          asesoramiento financiero, no publicamos previsiones de precios ni
          fomentamos la realización de transacciones que involucren activos
          digitales.
        </li>
        <li>
          <strong>Precisión técnica:</strong>Al redactar reseñas de interfaces
          de monederos sin custodia, el equipo editorial se basa en la
          documentación técnica oficial de los desarrolladores.
        </li>
        <li>
          <strong>Independencia:</strong> Este sitio web no es una institución
          financiera, una plataforma de intercambio, un servicio de cambio de
          divisas ni un servicio de custodia. No aceptamos fondos de los
          usuarios ni almacenamos claves privadas.
        </li>
      </ul>
    </InfoPageLayout>
  );
};
