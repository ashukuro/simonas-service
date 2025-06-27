import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';

const Privacy = () => {
  return (
    <div className="bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary">Datenschutzerklärung</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-6">
            <p>Wir legen großen Wert auf den Schutz Ihrer Daten und die Wahrung Ihrer Privatsphäre. Nachfolgend informieren wir Sie deshalb über die Erhebung und Verwendung persönlicher Daten bei der Nutzung unserer Webseite.</p>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Verantwortliche Stelle</h2>
              <p>Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p>Simona Reinigungsservice</p>
              <p>Inhaberin: Simona Poitasu</p>
              <p>Hohe Warte 28</p>
              <p>72488 Sigmaringen</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Datenerfassung auf unserer Website</h2>
              <h3 className="text-xl font-semibold text-foreground mt-4">Server-Log-Dateien</h3>
              <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners und Uhrzeit der Serveranfrage. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
              
              <h3 className="text-xl font-semibold text-foreground mt-4">Kontaktformular</h3>
              <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Ihre Rechte als Betroffener</h2>
              <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
