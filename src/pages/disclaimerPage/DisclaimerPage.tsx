import React from "react";
import { InfoPageLayout } from "../../shared/ui/infoPageLayout/InfoPageLayout";

export const DisclaimerPage: React.FC = () => {
  return (
    <InfoPageLayout
      title="Descargo de responsabilidad (Disclaimer)"
      updatedAt="Noviembre 2026"
    >
      <h2>1. Naturaleza informativa de los materiales</h2>
      <p>
        Toda la información proporcionada en el sitio web SolidBase Docs tiene
        fines exclusivamente educativos, de referencia e informativos. Los
        materiales contenidos en este sitio no constituyen recomendaciones de
        inversión personalizadas, ni representan asesoramiento financiero,
        fiscal, legal o cualquier otro tipo de asesoramiento profesional.
      </p>

      <h2>2. Falta de servicios financieros</h2>
      <p>
        La administración del proyecto no realiza actividades de emisión,
        compra, venta, intercambio, intermediación o gestión fiduciaria de
        activos digitales. El sitio web no cuenta con pasarelas de pago
        integradas ni acepta fondos o criptomonedas de los visitantes.
      </p>

      <h2>3. Responsabilidad del usuario</h2>
      <p>
        Cualquier decisión que tome un usuario basándose en la información
        obtenida en este sitio web queda a su propia discreción y riesgo.
        Interactuar con redes blockchain y con software para la autocustodia de
        claves requiere conocimientos técnicos básicos: la pérdida de una frase
        mnemotécnica o el envío de una transacción a una dirección incorrecta
        son acciones irreversibles.
      </p>

      <h2>4. Exactitud de la información</h2>
      <p>
        El software y los protocolos de las redes blockchain se actualizan con
        regularidad. Si bien nuestro equipo editorial se esfuerza por mantener
        actualizados los artículos de referencia, no podemos garantizar que sean
        totalmente exhaustivos o que no contengan detalles técnicos obsoletos en
        el momento en que usted los lea.
      </p>
    </InfoPageLayout>
  );
};
