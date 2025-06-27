import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const CookieBanner = ({ onAccept }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="bg-gray-800 text-white">
        <CardHeader>
          <CardTitle>Wir verwenden Cookies</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Wir verwenden Cookies, um Ihnen das beste Erlebnis auf unserer Website zu bieten.
            Indem Sie weiter surfen, stimmen Sie der Verwendung von Cookies zu.
          </p>
          <div className="flex justify-end mt-4">
            <Button onClick={onAccept}>Akzeptieren</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieBanner;
