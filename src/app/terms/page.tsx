import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsAndConditionsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container py-16 md:py-24">
          <div className="prose prose-lg mx-auto max-w-4xl text-foreground">
            <h1 className="font-headline text-4xl font-bold">Términos y Condiciones de Uso</h1>
            <p className="lead">
              Bienvenido a Ascenso Ainsophic. Al acceder a nuestra academia, aceptas regirte por estos términos, que constituyen un pacto para la elevación del conocimiento colectivo.
            </p>

            <h2>1. Uso de la Plataforma</h2>
            <p>
              Te otorgamos una licencia limitada, no exclusiva y no transferible para acceder y hacer un uso personal y no comercial de nuestros programas y contenidos. Te comprometes a no utilizar la plataforma para fines ilícitos o que infrinjan los derechos de otros.
            </p>

            <h2>2. Propiedad Intelectual</h2>
            <p>
              Todo el contenido de la academia, incluyendo cursos, textos, gráficos, logos y software, es propiedad de Ascenso Ainsophic o de sus licenciantes y está protegido por las leyes de propiedad intelectual. No está permitida su reproducción, distribución o modificación sin nuestro consentimiento explícito.
            </p>

            <h2>3. Cuentas de Usuario</h2>
            <p>
              Eres responsable de mantener la confidencialidad de tu cuenta y contraseña. Aceptas la responsabilidad de todas las actividades que ocurran bajo tu cuenta. Nos reservamos el derecho de suspender o terminar cuentas si se violan estos términos.
            </p>

            <h2>4. Pagos e Inscripciones</h2>
            <p>
              Las tarifas de los programas se indican claramente en el momento de la inscripción. Los pagos se procesan a través de pasarelas seguras. Las políticas de reembolso, si las hubiera, se especificarán para cada programa individualmente.
            </p>

            <h2>5. Limitación de Responsabilidad</h2>
            <p>
              Nuestros programas se ofrecen "tal cual". Si bien nos esforzamos por ofrecer contenido de la más alta calidad, no garantizamos resultados específicos del aprendizaje. Nuestra responsabilidad se limita al importe pagado por el programa.
            </p>

            <h2>6. Enlaces a Terceros y Contenido Embebido</h2>
            <p>
              La plataforma puede contener enlaces a sitios de terceros o contenido embebido (como notebooks de Colab o videos). No somos responsables del contenido o las prácticas de privacidad de estos servicios.
            </p>

            <h2>7. Modificación y Terminación</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuado de la plataforma después de los cambios implica tu aceptación. También podemos, a nuestra discreción, suspender o terminar tu acceso a la academia.
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
