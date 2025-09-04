
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { BookOpen, Users, MessageSquareQuote, HelpCircle, GraduationCap, GitMerge, SwatchBook, Puzzle, Notebook } from "lucide-react";
import { initialCourses, initialLearningPaths, initialPrograms, initialNotebooks } from "@/lib/data";

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Panel de Administración</h1>
      <p className="mt-2 text-muted-foreground">
        Bienvenido al centro de control de Ainsophic Academy. Gestioná el contenido y los usuarios desde aquí.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rutas de Aprendizaje</CardTitle>
            <GitMerge className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{initialLearningPaths.length}</div>
            <p className="text-xs text-muted-foreground">Rutas activas</p>
            <Button size="sm" className="mt-4" asChild>
              <Link href="/admin/learning-paths">Gestionar</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Programas</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{initialPrograms.length}</div>
            <p className="text-xs text-muted-foreground">Programas activos</p>
            <Button size="sm" className="mt-4" asChild>
              <Link href="/admin/programs">Gestionar</Link>
            </Button>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cursos</CardTitle>
            <SwatchBook className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{initialCourses.length}</div>
            <p className="text-xs text-muted-foreground">Cursos disponibles</p>
            <Button size="sm" className="mt-4" asChild>
              <Link href="/admin/courses">Gestionar</Link>
            </Button>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Notebooks</CardTitle>
            <Notebook className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{initialNotebooks.length}</div>
            <p className="text-xs text-muted-foreground">Notebooks de Colab</p>
            <Button size="sm" className="mt-4" asChild>
              <Link href="/admin/notebooks">Gestionar</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Instructores</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Instructores registrados</p>
             <Button size="sm" className="mt-4" asChild>
                <Link href="/admin/instructors">Gestionar</Link>
             </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alumnos</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">125</div>
            <p className="text-xs text-muted-foreground">Alumnos inscriptos</p>
             <Button size="sm" className="mt-4" asChild>
                <Link href="/admin/students">Gestionar</Link>
             </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Testimonios</CardTitle>
            <MessageSquareQuote className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Testimonios publicados</p>
             <Button size="sm" className="mt-4" asChild>
                <Link href="/admin/testimonials">Gestionar</Link>
             </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Preguntas Frecuentes</CardTitle>
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Preguntas frecuentes</p>
            <Button size="sm" className="mt-4" asChild>
              <Link href="/admin/faq">Gestionar</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Integraciones</CardTitle>
            <Puzzle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Integraciones activas</p>
            <Button size="sm" className="mt-4" asChild>
              <Link href="/admin/integrations">Gestionar</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
