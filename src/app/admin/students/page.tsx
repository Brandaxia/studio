
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
import type { Student } from '@/lib/types';
import { StudentForm } from './student-form';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { initialStudents } from '@/lib/data';

export default function AdminStudentsPage() {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const handleSaveStudent = (student: Student) => {
    if (selectedStudent) {
      setStudents(students.map(i => i.id === student.id ? student : i));
    } else {
      setStudents([...students, { ...student, id: (students.length + 1).toString() }]);
    }
    setSelectedStudent(null);
    setIsFormOpen(false);
  };
  
  const handleEdit = (student: Student) => {
    setSelectedStudent(student);
    setIsFormOpen(true);
  }

  const handleAddNew = () => {
    setSelectedStudent(null);
    setIsFormOpen(true);
  }
  
  const handleDelete = (id: string) => {
     setStudents(students.filter(p => p.id !== id));
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>Alumnos</CardTitle>
            <CardDescription>Gestioná los alumnos inscriptos en la academia.</CardDescription>
          </div>
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-1 w-full md:w-auto" onClick={handleAddNew}>
                <PlusCircle className="h-3.5 w-3.5" />
                Añadir Alumno
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{selectedStudent ? 'Editar' : 'Añadir'} Alumno</DialogTitle>
                <DialogDescription>
                  {selectedStudent ? 'Editá los detalles del alumno.' : 'Inscribí un nuevo alumno en la academia.'}
                </DialogDescription>
              </DialogHeader>
              <StudentForm 
                student={selectedStudent}
                onSave={handleSaveStudent}
                onCancel={() => setIsFormOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        {students.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead className="hidden md:table-cell">Email</TableHead>
                <TableHead className="hidden md:table-cell">Fecha de Inscripción</TableHead>
                <TableHead>
                  <span className="sr-only">Acciones</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map(student => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src={student.avatar} alt={student.name} data-ai-hint={student.aiHint}/>
                        <AvatarFallback>{student.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-0.5">
                        <span className="font-medium">{student.name}</span>
                        <span className="text-muted-foreground text-xs md:hidden">{student.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{student.email}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {new Date(student.enrolledDate).toLocaleDateString()}
                  </TableCell>
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
                        <DropdownMenuItem onClick={() => handleEdit(student)}>Editar</DropdownMenuItem>
                         <Dialog>
                          <DialogTrigger asChild>
                             <Button variant="ghost" className="w-full justify-start font-normal text-sm text-red-600 hover:text-red-600 px-2 py-1.5 h-auto relative flex cursor-default select-none items-center rounded-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">Eliminar</Button>
                          </DialogTrigger>
                           <DialogContent>
                            <DialogHeader>
                              <DialogTitle>¿Estás seguro?</DialogTitle>
                              <DialogDescription>
                                Esta acción no se puede deshacer. Se eliminará permanentemente al alumno.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button variant="outline">Cancelar</Button>
                              </DialogClose>
                              <DialogClose asChild>
                                 <Button variant="destructive" onClick={() => handleDelete(student.id)}>
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
            <p className="text-muted-foreground">No se encontraron alumnos.</p>
            <Button size="sm" className="mt-4 gap-1" onClick={handleAddNew}>
              <PlusCircle className="h-3.5 w-3.5" />
              Añadir Primer Alumno
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
