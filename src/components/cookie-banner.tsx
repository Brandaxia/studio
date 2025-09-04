
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
    toast({
      title: "Consentimiento Aceptado",
      description: "Gracias por aceptar nuestras políticas de cookies.",
    });
  };

  const handleDecline = () => {
    setIsVisible(false);
    toast({
      title: "Consentimiento Rechazado",
      description: "Has optado por no aceptar las cookies.",
      variant: "destructive",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 p-4 shadow-lg">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-foreground/80">
          Este sitio web utiliza cookies para mejorar tu experiencia. Al continuar, aceptás nuestro uso de cookies.
        </p>
        <div className="flex gap-2">
          <Button size="sm" onClick={handleAccept}>Aceptar</Button>
          <Button size="sm" variant="outline" onClick={handleDecline}>Rechazar</Button>
        </div>
      </div>
    </div>
  );
}
