"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // In a real app, you would set a cookie or use a more robust storage
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
    toast({
      title: "Consentimiento Aceptado",
      description: "Gracias por aceptar nuestras políticas de cookies.",
    });
  };

  const handleDecline = () => {
    // Handle decline logic if necessary
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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 border-t p-4 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/80">
          Este sitio web utiliza cookies para mejorar tu experiencia. Al continuar, aceptas nuestro uso de cookies.
        </p>
        <div className="flex gap-2">
          <Button size="sm" onClick={handleAccept}>Aceptar</Button>
          <Button size="sm" variant="outline" onClick={handleDecline}>Rechazar</Button>
        </div>
      </div>
    </div>
  );
}
