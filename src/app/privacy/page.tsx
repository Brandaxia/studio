import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container py-16 md:py-24">
          <div className="prose prose-lg mx-auto max-w-4xl text-foreground">
            <h1 className="font-headline text-4xl font-bold">Política de Privacidad</h1>
            <p className="lead">
              En Ascenso Ainsophic, tu privacidad es una manifestación de nuestro compromiso con el respeto y la confianza. Esta política detalla cómo custodiamos la información que nos confías.
            </p>

            <h2>1. La Información que Recibimos</h2>
            <p>
              Recopilamos información que nos proporcionas directamente, como cuando te registras en un curso, te pones en contacto con nosotros o participas en nuestra comunidad. Esto puede incluir tu nombre, correo electrónico e historial de aprendizaje. También recopilamos datos técnicos automáticamente, como tu dirección IP y tipo de navegador, para asegurar la integridad de nuestra plataforma.
            </p>

            <h2>2. Cómo Elevamos el Conocimiento con tus Datos</h2>
            <p>
              Utilizamos tu información para personalizar tu viaje de aprendizaje, ofrecerte soporte, procesar tus inscripciones y comunicarnos contigo sobre nuestros programas. Los datos también nos ayudan a mejorar y optimizar nuestra plataforma para toda la comunidad de ascendentes.
            </p>

            <h2>3. Compartiendo la Sabiduría, no tus Datos</h2>
            <p>
              No vendemos ni alquilamos tu información personal. Podemos compartir datos con proveedores de servicios de confianza que nos asisten en la operación de la academia (como procesadores de pago o plataformas de análisis), siempre bajo estrictos acuerdos de confidencialidad. También podemos divulgar información si es requerido por ley.
            </p>

            <h2>4. Cookies y Tecnologías de Conexión</h2>
            <p>
              Utilizamos cookies para mantener tu sesión, recordar tus preferencias y entender cómo interactúas con nuestra plataforma. Estas pequeñas balizas de luz nos permiten ofrecerte una experiencia fluida y coherente. Puedes gestionar tus preferencias de cookies a través de la configuración de tu navegador.
            </p>

            <h2>5. La Seguridad de tu Ascenso</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra el acceso no autorizado, la alteración o la destrucción. Tu confianza es la base de nuestra academia, y la protegemos con la máxima diligencia.
            </p>

            <h2>6. Tus Derechos y Elecciones</h2>
            <p>
              Tienes derecho a acceder, corregir o eliminar tu información personal. También puedes oponerte al procesamiento de tus datos. Para ejercer estos derechos, por favor contáctanos a través de los canales proporcionados en nuestra página de contacto.
            </p>

            <h2>7. Actualizaciones de esta Política</h2>
            <p>
              A medida que nuestra academia evolucione, también lo hará nuestra política de privacidad. Te notificaremos sobre cualquier cambio significativo. La fecha de la última actualización se reflejará al final de esta página.
            </p>

            <p className="text-sm text-muted-foreground">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
