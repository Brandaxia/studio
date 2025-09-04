
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
import type { Testimonial, Program } from '@/lib/types';
import { TestimonialForm } from './testimonial-form';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { initialTestimonials, initialPrograms } from '@/lib/data';

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [programs] = useState<Program[]>(initialPrograms);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const getProgramTitle = (programId: string) => {
    return initialPrograms.find(p => p.id === programId)?.title || 'Programa Desconocido';
  }

  const handleSaveTestimonial = (testimonial: Testimonial) => {
    if (selectedTestimonial) {
      setTestimonials(testimonials.map(t => t.id === testimonial.id ? testimonial : t));
    } else {
      setTestimonials([...testimonials, { ...testimonial, id: (testimonials.length + 1).toString() }]);
    }
    setSelectedTestimonial(null);
    setIsFormOpen(false);
  };
  
  const handleEdit = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsFormOpen(true);
  }

  const handleAddNew = () => {
    setSelectedTestimonial(null);
    setIsFormOpen(true);
  }
  
  const handleDelete = (id: string) => {
     setTestimonials(testimonials.filter(p => p.id !== id));
  };


  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>Testimonios</CardTitle>
            <CardDescription>Gestioná los testimonios de los alumnos.</CardDescription>
          </div>
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-1 w-full md:w-auto" onClick={handleAddNew}>
                <PlusCircle className="h-3.5 w-3.5" />
                Añadir Testimonio
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{selectedTestimonial ? 'Editar' : 'Añadir'} Testimonio</DialogTitle>
                <DialogDescription>
                  {selectedTestimonial ? 'Editá los detalles del testimonio.' : 'Añadí un nuevo testimonio a la academia.'}
                </DialogDescription>
              </DialogHeader>
              <TestimonialForm 
                testimonial={selectedTestimonial}
                programs={programs}
                onSave={handleSaveTestimonial}
                onCancel={() => setIsFormOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        {testimonials.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Autor</TableHead>
                <TableHead>Cita</TableHead>
                <TableHead>Programa</TableHead>
                <TableHead>
                  <span className="sr-only">Acciones</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {testimonials.map(testimonial => (
                <TableRow key={testimonial.id}>
                  <TableCell className="font-medium flex items-center gap-2">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint}/>
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      {testimonial.name}
                  </TableCell>
                  <TableCell className="max-w-sm truncate italic">"{testimonial.quote}"</TableCell>
                   <TableCell>{getProgramTitle(testimonial.program)}</TableCell>
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
                        <DropdownMenuItem onClick={() => handleEdit(testimonial)}>Editar</DropdownMenuItem>
                         <Dialog>
                          <DialogTrigger asChild>
                             <Button variant="ghost" className="w-full justify-start font-normal text-sm text-red-600 hover:text-red-600 px-2 py-1.5 h-auto relative flex cursor-default select-none items-center rounded-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">Eliminar</Button>
                          </DialogTrigger>
                           <DialogContent>
                            <DialogHeader>
                              <DialogTitle>¿Estás seguro?</DialogTitle>
                              <DialogDescription>
                                Esta acción no se puede deshacer. Se eliminará permanentemente el testimonio.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button variant="outline">Cancelar</Button>
                              </DialogClose>
                              <DialogClose asChild>
                                 <Button variant="destructive" onClick={() => handleDelete(testimonial.id)}>
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
            <p className="text-muted-foreground">No se encontraron testimonios.</p>
            <Button size="sm" className="mt-4 gap-1" onClick={handleAddNew}>
              <PlusCircle className="h-3.5 w-3.5" />
              Añadir Primer Testimonio
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
