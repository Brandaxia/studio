import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { BookOpen, Users, HelpCircle, GraduationCap, GitMerge, SwatchBook, Puzzle, Notebook, LucideIcon } from "lucide-react";
import { initialCourses, initialLearningPaths, initialPrograms, initialNotebooks, initialFaqs, initialInstructors, initialStudents, initialIntegrations } from "@/lib/data";

interface DashboardCardProps {
  title: string;
  icon: LucideIcon;
  count: number;
  label: string;
  href: string;
}

const DashboardCard = ({ title, icon: Icon, count, label, href }: DashboardCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{count}</div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <Button size="sm" className="mt-4" asChild>
        <Link href={href}>Gestionar</Link>
      </Button>
    </CardContent>
  </Card>
);

export default function AdminDashboardPage() {
  const dashboardCards = [
    { title: 'Rutas de Aprendizaje', icon: GitMerge, count: initialLearningPaths.length, label: 'Rutas activas', href: '/admin/learning-paths' },
    { title: 'Programas', icon: BookOpen, count: initialPrograms.length, label: 'Programas activos', href: '/admin/programs' },
    { title: 'Cursos', icon: SwatchBook, count: initialCourses.length, label: 'Cursos disponibles', href: '/admin/courses' },
    { title: 'Notebooks', icon: Notebook, count: initialNotebooks.length, label: 'Notebooks de Colab', href: '/admin/notebooks' },
    { title: 'Instructores', icon: Users, count: initialInstructors.length, label: 'Instructores registrados', href: '/admin/instructors' },
    { title: 'Alumnos', icon: GraduationCap, count: initialStudents.length, label: 'Alumnos inscriptos', href: '/admin/students' },
    { title: 'Preguntas Frecuentes', icon: HelpCircle, count: initialFaqs.length, label: 'Preguntas publicadas', href: '/admin/faq' },
    { title: 'Integraciones', icon: Puzzle, count: initialIntegrations.length, label: 'Integraciones activas', href: '/admin/integrations' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Panel de Administración</h1>
      <p className="mt-2 text-muted-foreground">
        Bienvenido al centro de control de Ainsophic Academy. Gestioná el contenido y los usuarios desde aquí.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
        {dashboardCards.map(card => (
          <DashboardCard key={card.href} {...card} />
        ))}
      </div>
    </div>
  );
}
