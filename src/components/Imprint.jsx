import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';

const Imprint = () => {
  return (
    <>
      <Helmet>
        <title>Impressum - Simona's Reinigungsservice</title>
        <meta name="description" content="Impressum von Simona's Reinigungsservice. Hier finden Sie alle rechtlichen Informationen zu unserem Unternehmen." />
        <link rel="canonical" href="https://simona-reinigungsservice.de/impressum" />
        <meta property="og:title" content="Impressum - Simona's Reinigungsservice" />
        <meta property="og:description" content="Impressum von Simona's Reinigungsservice. Hier finden Sie alle rechtlichen Informationen zu unserem Unternehmen." />
        <meta property="og:url" content="https://simona-reinigungsservice.de/impressum" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Simona's Reinigungsservice" />
      </Helmet>
      <div className="bg-muted/30">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold text-primary">Impressum</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
                <p>Simona Reinigungsservice</p>
                <p>Inhaberin: Simona Poitasu</p>
                <p>Hohe Warte 28</p>
                <p>72488 Sigmaringen</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground">Kontakt</h2>
                <p>Telefon: +49 (0) 176 29181838</p>
                <p>Telefon: +49 (0) 155 10787433</p>
                <p>E-Mail: info@simona-reinigungsservice.de</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground">Umsatzsteuer-ID</h2>
                <p>Kleinunternehmer gemäß § 19 UStG, keine Umsatzsteuer.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground">Haftungsausschluss (Disclaimer)</h2>
                <h3 className="text-xl font-semibold text-foreground mt-4">Haftung für Inhalte</h3>
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>

                <h3 className="text-xl font-semibold text-foreground mt-4">Haftung für Links</h3>
                <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Imprint;
