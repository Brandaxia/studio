
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import type { Course, Program } from '@/lib/types';
import { CourseForm } from './course-form';
import { Badge } from '@/components/ui/badge';
import { initialCourses, initialPrograms } from '@/lib/data';

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [programs] = useState<Program[]>(initialPrograms);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  
  const getProgramName = (programId: string) => {
    return programs.find(p => p.id === programId)?.title || 'Desconocido';
  }

  const handleSaveCourse = (course: Course) => {
    if (selectedCourse) {
      setCourses(courses.map(c => c.id === course.id ? course : c));
    } else {
      setCourses([...courses, { ...course, id: `c${courses.length + 1}` }]);
    }
    setSelectedCourse(null);
    setIsFormOpen(false);
  };
  
  const handleEdit = (course: Course) => {
    setSelectedCourse(course);
    setIsFormOpen(true);
  }

  const handleAddNew = () => {
    setSelectedCourse(null);
    setIsFormOpen(true);
  }
  
  const handleDelete = (id: string) => {
     setCourses(courses.filter(c => c.id !== id));
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>Cursos</CardTitle>
            <CardDescription>Gestioná los cursos individuales dentro de cada programa.</CardDescription>
          </div>
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-1 w-full md:w-auto" onClick={handleAddNew}>
                <PlusCircle className="h-3.5 w-3.5" />
                Añadir Curso
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{selectedCourse ? 'Editar' : 'Añadir'} Curso</DialogTitle>
                <DialogDescription>
                  {selectedCourse ? 'Editá los detalles del curso.' : 'Creá un nuevo curso para un programa.'}
                </DialogDescription>
              </DialogHeader>
              <CourseForm 
                course={selectedCourse}
                programs={programs}
                onSave={handleSaveCourse}
                onCancel={() => setIsFormOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        {courses.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Título del Curso</TableHead>
                <TableHead>Programa</TableHead>
                <TableHead className="hidden md:table-cell">Descripción</TableHead>
                <TableHead>
                  <span className="sr-only">Acciones</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map(course => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">{course.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-semibold">{getProgramName(course.programId)}</Badge>
                  </TableCell>
                  <TableCell className="hidden max-w-xs truncate md:table-cell">{course.description}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Menú de acciones</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleEdit(course)}>Editar</DropdownMenuItem>
                         <Dialog>
                          <DialogTrigger asChild>
                             <Button variant="ghost" className="w-full justify-start px-2 py-1.5 h-auto text-sm font-normal text-red-600 hover:text-red-600 relative flex cursor-default select-none items-center rounded-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">Eliminar</Button>
                          </DialogTrigger>
                           <DialogContent>
                            <DialogHeader>
                              <DialogTitle>¿Estás seguro?</DialogTitle>
                              <DialogDescription>
                                Esta acción no se puede deshacer. Se eliminará permanentemente el curso.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button variant="outline">Cancelar</Button>
                              </DialogClose>
                              <DialogClose asChild>
                                 <Button variant="destructive" onClick={() => handleDelete(course.id)}>
                                   Eliminar
                                 </Button>
                              </DialogClose>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center py-10 border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">No se encontraron cursos.</p>
            <Button size="sm" className="mt-4 gap-1" onClick={handleAddNew}>
              <PlusCircle className="h-3.5 w-3.5" />
              Añadir Primer Curso
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
