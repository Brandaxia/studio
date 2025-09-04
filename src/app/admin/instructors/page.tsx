
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
import type { Instructor } from '@/lib/types';
import { InstructorForm } from './instructor-form';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { initialInstructors } from '@/lib/data';

export default function AdminInstructorsPage() {
  const [instructors, setInstructors] = useState<Instructor[]>(initialInstructors);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);

  const handleSaveInstructor = (instructor: Instructor) => {
    if (selectedInstructor) {
      setInstructors(instructors.map(i => i.id === instructor.id ? instructor : i));
    } else {
      setInstructors([...instructors, { ...instructor, id: (instructors.length + 1).toString() }]);
    }
    setSelectedInstructor(null);
    setIsFormOpen(false);
  };
  
  const handleEdit = (instructor: Instructor) => {
    setSelectedInstructor(instructor);
    setIsFormOpen(true);
  }

  const handleAddNew = () => {
    setSelectedInstructor(null);
    setIsFormOpen(true);
  }
  
  const handleDelete = (id: string) => {
     setInstructors(instructors.filter(p => p.id !== id));
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>Instructores</CardTitle>
            <CardDescription>Gestioná los instructores de la academia.</CardDescription>
          </div>
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-1 w-full md:w-auto" onClick={handleAddNew}>
                <PlusCircle className="h-3.5 w-3.5" />
                Añadir Instructor
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{selectedInstructor ? 'Editar' : 'Añadir'} Instructor</DialogTitle>
                <DialogDescription>
                  {selectedInstructor ? "Editá los detalles del instructor." : 'Añadí un nuevo instructor a la academia.'}
                </DialogDescription>
              </DialogHeader>
              <InstructorForm 
                instructor={selectedInstructor}
                onSave={handleSaveInstructor}
                onCancel={() => setIsFormOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Avatar</span>
              </TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>
                <span className="sr-only">Acciones</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {instructors.map(instructor => (
              <TableRow key={instructor.id}>
                 <TableCell className="hidden sm:table-cell">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={instructor.avatar}
                      alt={instructor.name}
                      data-ai-hint={instructor.aiHint}
                    />
                    <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">{instructor.name}</TableCell>
                <TableCell>{instructor.title}</TableCell>
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
                      <DropdownMenuItem onClick={() => handleEdit(instructor)}>Editar</DropdownMenuItem>
                       <Dialog>
                        <DialogTrigger asChild>
                           <Button variant="ghost" className="w-full justify-start font-normal text-sm text-red-600 hover:text-red-600 px-2 py-1.5 h-auto relative flex cursor-default select-none items-center rounded-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">Eliminar</Button>
                        </DialogTrigger>
                         <DialogContent>
                          <DialogHeader>
                            <DialogTitle>¿Estás seguro?</DialogTitle>
                            <DialogDescription>
                              Esta acción no se puede deshacer. Se eliminará permanentemente al instructor.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancelar</Button>
                            </DialogClose>
                            <DialogClose asChild>
                               <Button variant="destructive" onClick={() => handleDelete(instructor.id)}>
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
      </CardContent>
    </Card>
  );
}
