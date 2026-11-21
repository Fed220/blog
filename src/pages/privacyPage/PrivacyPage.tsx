import React from "react";
import { InfoPageLayout } from "../../shared/ui/infoPageLayout/InfoPageLayout";

export const PrivacyPage: React.FC = () => {
  return (
    <InfoPageLayout
      title="política de privacidad"
      updatedAt="Noviembre de 2026"
    >
      <h2>1. Disposiciones generales</h2>
      <p>
        Esta Política de Privacidad describe qué datos técnicos se pueden
        recopilar cuando visita el recurso de información SolidBaseDocs.
        Respetamos la privacidad de los visitantes y no requerimos registro,
        información del pasaporte ni monederos de criptomonedas para acceder al
        contenido del sitio.
      </p>

      <h2>2. Datos recopilados automáticamente y cookies</h2>
      <p>
        Para garantizar el correcto funcionamiento del sitio web, analizar el
        tráfico y evaluar la eficacia de las campañas publicitarias, el sitio
        web puede utilizar cookies y herramientas estándar de análisis web (por
        ejemplo, Google Analytics / Google Ads).
      </p>
      <ul>
        <li>
          Información técnica: tipo de navegador, sistema operativo, resolución
          de pantalla, idioma de la interfaz.
        </li>
        <li>
          Datos de interacción: páginas vistas, tiempo de permanencia en el
          sitio, fuente de referencia.
        </li>
      </ul>

      <h2>3. Gestión de Сookies</h2>
      <p>
        Puedes restringir o desactivar por completo el almacenamiento de cookies
        en cualquier momento a través de la configuración de tu navegador.
        Desactivar las cookies no afectará la accesibilidad de los artículos de
        texto en el sitio web.
      </p>

      <h2>4. Transferencia de datos a terceros</h2>
      <p>
        La administración del sitio web no vende ni transfiere datos personales
        de los visitantes a terceros, salvo en los casos previstos por la ley
        aplicable, o estadísticas técnicas anonimizadas procesadas por sistemas
        de análisis web.
      </p>
    </InfoPageLayout>
  );
};
