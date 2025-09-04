
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
import type { LearningPath, Program } from '@/lib/types';
import { LearningPathForm } from './learning-path-form';
import { initialLearningPaths, initialPrograms } from '@/lib/data';


export default function AdminLearningPathsPage() {
  const [learningPaths, setLearningPaths] = useState<LearningPath[]>(initialLearningPaths);
  const [programs] = useState<Program[]>(initialPrograms);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedLearningPath, setSelectedLearningPath] = useState<LearningPath | null>(null);

  const handleSaveLearningPath = (learningPath: LearningPath) => {
    if (selectedLearningPath) {
      setLearningPaths(learningPaths.map(lp => lp.id === learningPath.id ? learningPath : lp));
    } else {
      setLearningPaths([...learningPaths, { ...learningPath, id: `lp${learningPaths.length + 1}` }]);
    }
    setSelectedLearningPath(null);
    setIsFormOpen(false);
  };
  
  const handleEdit = (learningPath: LearningPath) => {
    setSelectedLearningPath(learningPath);
    setIsFormOpen(true);
  }

  const handleAddNew = () => {
    setSelectedLearningPath(null);
    setIsFormOpen(true);
  }
  
  const handleDelete = (id: string) => {
     setLearningPaths(learningPaths.filter(lp => lp.id !== id));
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>Rutas de Aprendizaje</CardTitle>
            <CardDescription>Gestioná las secuencias de programas curadas para los alumnos.</CardDescription>
          </div>
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-1 w-full md:w-auto" onClick={handleAddNew}>
                <PlusCircle className="h-3.5 w-3.5" />
                Añadir Ruta
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{selectedLearningPath ? 'Editar' : 'Añadir'} Ruta de Aprendizaje</DialogTitle>
                <DialogDescription>
                  {selectedLearningPath ? 'Editá los detalles de la ruta.' : 'Creá una nueva ruta de aprendizaje.'}
                </DialogDescription>
              </DialogHeader>
              <LearningPathForm 
                learningPath={selectedLearningPath}
                programs={programs}
                onSave={handleSaveLearningPath}
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
              <TableHead>Programas</TableHead>
              <TableHead>
                <span className="sr-only">Acciones</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {learningPaths.map(lp => (
              <TableRow key={lp.id}>
                <TableCell className="font-medium">{lp.title}</TableCell>
                <TableCell className="hidden max-w-sm truncate md:table-cell">{lp.description}</TableCell>
                 <TableCell>{lp.programIds.length}</TableCell>
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
                      <DropdownMenuItem onClick={() => handleEdit(lp)}>Editar</DropdownMenuItem>
                       <Dialog>
                        <DialogTrigger asChild>
                           <Button variant="ghost" className="w-full justify-start px-2 py-1.5 h-auto text-sm font-normal text-red-600 hover:text-red-600">Eliminar</Button>
                        </DialogTrigger>
                         <DialogContent>
                          <DialogHeader>
                            <DialogTitle>¿Estás seguro?</DialogTitle>
                            <DialogDescription>
                              Esta acción no se puede deshacer. Se eliminará permanentemente la ruta.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancelar</Button>
                            </DialogClose>
                            <DialogClose asChild>
                               <Button variant="destructive" onClick={() => handleDelete(lp.id)}>
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
