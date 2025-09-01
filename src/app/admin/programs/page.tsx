
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
import type { Program } from '@/lib/types';
import { ProgramForm } from './program-form';

const initialPrograms: Program[] = [
  {
    id: '1',
    title: 'Fundamentos de la Sabiduría Antigua',
    description: 'Un viaje a través de textos y filosofías milenarias que han moldeado el pensamiento humano.',
    image: 'https://picsum.photos/600/400?random=1',
    aiHint: 'ancient library',
    courseIds: ['c1', 'c2'],
  },
  {
    id: '2',
    title: 'Alquimia Cuántica',
    description: 'Fusiona la física cuántica con principios alquímicos para una transformación personal profunda.',
    image: 'https://picsum.photos/600/400?random=2',
    aiHint: 'quantum physics',
    courseIds: ['c3', 'c4'],
  },
  {
    id: '3',
    title: 'Geometría Sagrada Aplicada',
    description: 'Descubre y aplica los patrones universales de la creación en tu vida diaria y proyectos creativos.',
    image: 'https://picsum.photos/600/400?random=3',
    aiHint: 'sacred geometry',
    courseIds: ['c5'],
  },
];

export default function AdminProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>(initialPrograms);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const handleSaveProgram = (program: Program) => {
    if (selectedProgram) {
      // Update
      setPrograms(programs.map(p => p.id === program.id ? program : p));
    } else {
      // Create
      setPrograms([...programs, { ...program, id: (programs.length + 1).toString() }]);
    }
    setSelectedProgram(null);
    setIsFormOpen(false);
  };
  
  const handleEdit = (program: Program) => {
    setSelectedProgram(program);
    setIsFormOpen(true);
  }

  const handleAddNew = () => {
    setSelectedProgram(null);
    setIsFormOpen(true);
  }
  
  const handleDelete = (id: string) => {
     setPrograms(programs.filter(p => p.id !== id));
  };


  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Programas</CardTitle>
            <CardDescription>Gestiona los programas de la academia.</CardDescription>
          </div>
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-1" onClick={handleAddNew}>
                <PlusCircle className="h-3.5 w-3.5" />
                Añadir Programa
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{selectedProgram ? 'Editar' : 'Añadir'} Programa</DialogTitle>
                <DialogDescription>
                  {selectedProgram ? 'Edita los detalles del programa.' : 'Crea un nuevo programa para la academia.'}
                </DialogDescription>
              </DialogHeader>
              <ProgramForm 
                program={selectedProgram}
                onSave={handleSaveProgram}
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
              <TableHead>Título</TableHead>
              <TableHead className="hidden md:table-cell">Descripción</TableHead>
              <TableHead>Cursos</TableHead>
              <TableHead>
                <span className="sr-only">Acciones</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {programs.map(program => (
              <TableRow key={program.id}>
                <TableCell className="font-medium">{program.title}</TableCell>
                <TableCell className="hidden md:table-cell max-w-sm truncate">{program.description}</TableCell>
                <TableCell>{program.courseIds?.length || 0}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => handleEdit(program)}>Editar</DropdownMenuItem>
                       <Dialog>
                        <DialogTrigger asChild>
                           <Button variant="ghost" className="w-full justify-start font-normal text-sm text-red-600 hover:text-red-600 px-2 py-1.5 h-auto">Eliminar</Button>
                        </DialogTrigger>
                         <DialogContent>
                          <DialogHeader>
                            <DialogTitle>¿Estás seguro?</DialogTitle>
                            <DialogDescription>
                              Esta acción no se puede deshacer. Esto eliminará permanentemente el programa.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancelar</Button>
                            </DialogClose>
                            <DialogClose asChild>
                               <Button variant="destructive" onClick={() => handleDelete(program.id)}>
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
