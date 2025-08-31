import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-headline text-4xl font-bold">Panel de Administración</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Bienvenido al centro de control de Ascenso Ainsophic. Desde aquí puedes gestionar el contenido de la academia.
            </p>
            <div className="mt-8">
              <Button>Gestionar Programas</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
