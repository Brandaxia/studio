
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container py-16 md:py-24">
          <div className="prose prose-lg mx-auto max-w-4xl text-foreground">
            <h1 className="font-headline text-4xl font-bold">Política de Privacidad</h1>
            <p className="lead">
              En Ainsophic Academy, tu privacidad es una manifestación de nuestro compromiso con el respeto y la confianza. Esta política detalla cómo protegemos la información que nos confiás.
            </p>

            <h2>1. La Información que Recibimos</h2>
            <p>
              Recopilamos la información que nos proporcionás directamente, como cuando te inscribís en un curso, nos contactás o participás en nuestra comunidad. Esto puede incluir tu nombre, correo electrónico e historial de aprendizaje. También recopilamos datos técnicos de forma automática, como tu dirección IP y tipo de navegador, para garantizar la integridad de nuestra plataforma.
            </p>

            <h2>2. Cómo Usamos tus Datos</h2>
            <p>
              Usamos tu información para personalizar tu recorrido de aprendizaje, brindarte soporte, procesar tus inscripciones y comunicarnos con vos sobre nuestros programas. Los datos también nos ayudan a mejorar y optimizar nuestra plataforma para toda la comunidad de estudiantes.
            </p>

            <h2>3. Compartimos Conocimiento, no tus Datos</h2>
            <p>
              No vendemos ni alquilamos tu información personal. Podemos compartir datos con proveedores de servicios de confianza que nos asisten en la operación de la academia (como procesadores de pago o plataformas de análisis), siempre bajo estrictos acuerdos de confidencialidad. También podemos divulgar información si la ley así lo requiere.
            </p>

            <h2>4. Cookies y Tecnologías de Conexión</h2>
            <p>
              Utilizamos cookies para mantener tu sesión, recordar tus preferencias y entender cómo interactuás con nuestra plataforma. Estas pequeñas balizas de luz nos permiten ofrecerte una experiencia fluida y coherente. Podés gestionar tus preferencias de cookies a través de la configuración de tu navegador.
            </p>

            <h2>5. La Seguridad de tu Aprendizaje</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra el acceso no autorizado, la alteración o la destrucción. Tu confianza es la base de nuestra academia, y la protegemos con la máxima diligencia.
            </p>

            <h2>6. Tus Derechos y Opciones</h2>
            <p>
              Tenés derecho a acceder, corregir o eliminar tu información personal. También podés oponerte al tratamiento de tus datos. Para ejercer estos derechos, por favor contactanos a través de los canales proporcionados en nuestra página de contacto.
            </p>

            <h2>7. Actualizaciones de esta Política</h2>
            <p>
              A medida que nuestra academia evolucione, también lo hará nuestra política de privacidad. Te notificaremos cualquier cambio significativo. La fecha de la última actualización se reflejará al final de esta página.
            </p>

            <p className="text-sm text-muted-foreground">
              Última actualización: {lastUpdated}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
