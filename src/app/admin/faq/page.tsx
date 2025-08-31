
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
import type { FaqItem } from '@/lib/types';
import { FaqForm } from './faq-form';

const initialFaqs: FaqItem[] = [
  {
    id: '1',
    question: '¿Qué es "Ainsophic"?',
    answer: 'Ainsophic se deriva de "Ein Sof", un término cabalístico que significa "el infinito" o "sin fin". Representa la naturaleza ilimitada del conocimiento y el potencial que buscamos desbloquear en nuestros estudiantes.',
  },
  {
    id: '2',
    question: '¿Necesito conocimientos previos para inscribirme?',
    answer: 'La mayoría de nuestros programas fundamentales están diseñados para ser accesibles a todos, independientemente de su experiencia previa. Algunos cursos avanzados pueden tener prerrequisitos, los cuales se especifican claramente en su descripción.',
  },
  {
    id: '3',
    question: '¿Los programas son en línea o presenciales?',
    answer: 'Actualmente, todos nuestros programas se ofrecen en un formato en línea flexible, permitiendo a estudiantes de todo el mundo unirse. Utilizamos una combinación de contenido grabado, sesiones en vivo y cuadernos interactivos.',
  },
  {
    id: '4',
    question: '¿Qué tipo de soporte recibo como estudiante?',
    answer: 'Ofrecemos soporte integral a través de foros de comunidad, sesiones de preguntas y respuestas con instructores y acceso a un mentor personal para guiarte en tu viaje de aprendizaje.',
  },
];

export default function AdminFaqPage() {
  const [faqs, setFaqs] = useState<FaqItem[]>(initialFaqs);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<FaqItem | null>(null);

  const handleSaveFaq = (faq: FaqItem) => {
    if (selectedFaq) {
      setFaqs(faqs.map(f => f.id === faq.id ? faq : f));
    } else {
      setFaqs([...faqs, { ...faq, id: (faqs.length + 1).toString() }]);
    }
    setSelectedFaq(null);
    setIsFormOpen(false);
  };
  
  const handleEdit = (faq: FaqItem) => {
    setSelectedFaq(faq);
    setIsFormOpen(true);
  }

  const handleAddNew = () => {
    setSelectedFaq(null);
    setIsFormOpen(true);
  }
  
  const handleDelete = (id: string) => {
     setFaqs(faqs.filter(f => f.id !== id));
  };


  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Preguntas Frecuentes</CardTitle>
            <CardDescription>Gestiona las preguntas y respuestas frecuentes.</CardDescription>
          </div>
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-1" onClick={handleAddNew}>
                <PlusCircle className="h-3.5 w-3.5" />
                Añadir FAQ
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{selectedFaq ? 'Editar' : 'Añadir'} FAQ</DialogTitle>
                <DialogDescription>
                  {selectedFaq ? 'Edita los detalles de la pregunta.' : 'Añade una nueva pregunta frecuente.'}
                </DialogDescription>
              </DialogHeader>
              <FaqForm 
                faq={selectedFaq}
                onSave={handleSaveFaq}
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
              <TableHead>Pregunta</TableHead>
              <TableHead className="hidden md:table-cell">Respuesta</TableHead>
              <TableHead>
                <span className="sr-only">Acciones</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {faqs.map(faq => (
              <TableRow key={faq.id}>
                <TableCell className="font-medium">{faq.question}</TableCell>
                <TableCell className="hidden md:table-cell max-w-sm truncate">{faq.answer}</TableCell>
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
                      <DropdownMenuItem onClick={() => handleEdit(faq)}>Editar</DropdownMenuItem>
                       <Dialog>
                        <DialogTrigger asChild>
                           <Button variant="ghost" className="w-full justify-start font-normal text-sm text-red-600 hover:text-red-600 px-2 py-1.5 h-auto">Eliminar</Button>
                        </DialogTrigger>
                         <DialogContent>
                          <DialogHeader>
                            <DialogTitle>¿Estás seguro?</DialogTitle>
                            <DialogDescription>
                              Esta acción no se puede deshacer. Esto eliminará permanentemente la pregunta.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancelar</Button>
                            </DialogClose>
                            <DialogClose asChild>
                               <Button variant="destructive" onClick={() => handleDelete(faq.id)}>
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
