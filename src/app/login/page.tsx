
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container flex min-h-[calc(100vh-12rem)] items-center justify-center py-16 md:py-24">
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
