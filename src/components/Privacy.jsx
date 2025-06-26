import React from 'react';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Datenschutzerklärung</h1>
      <p className="mb-4">Wir legen großen Wert auf den Schutz Ihrer Daten. Nachfolgend informieren wir Sie über die Erhebung und Verwendung persönlicher Daten bei der Nutzung unserer Webseite.</p>
      <h2 className="text-2xl font-bold mt-6 mb-4">Erhebung und Verarbeitung von Daten</h2>
      <p className="mb-4">Jeder Zugriff auf unsere Webseite und jeder Abruf einer auf der Webseite hinterlegten Datei werden protokolliert. Die Speicherung dient internen systembezogenen und statistischen Zwecken. Protokolliert werden: Name der abgerufenen Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf, Webbrowser und anfragende Domain.</p>
      <h2 className="text-2xl font-bold mt-6 mb-4">Kontaktformular</h2>
      <p className="mb-4">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
      <h2 className="text-2xl font-bold mt-6 mb-4">Auskunftsrecht</h2>
      <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.</p>
    </div>
  );
};

export default Privacy;
