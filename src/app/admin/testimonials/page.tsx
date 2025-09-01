
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
import type { Testimonial } from '@/lib/types';
import { TestimonialForm } from './testimonial-form';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const initialTestimonials: Testimonial[] = [
    {
      id: '1',
      quote: "The NLP course opened my eyes to the power of language models. Truly transformational.",
      name: 'Alex C.',
      program: 'Natural Language Processing',
      avatar: 'https://picsum.photos/100/100?random=7',
      aiHint: 'happy person'
    },
    {
      id: '2',
      quote: "The foundational knowledge from the ML course is invaluable. AI Academy is a beacon for aspiring engineers.",
      name: 'Brenda K.',
      program: 'Machine Learning Foundations',
      avatar: 'https://picsum.photos/100/100?random=8',
      aiHint: 'smiling student'
    },
    {
      id: '3',
      quote: "I applied the computer vision concepts to my startup and the results are amazing. My creativity has flourished.",
      name: 'Carlos M.',
      program: 'Computer Vision',
      avatar: 'https://picsum.photos/100/100?random=9',
      aiHint: 'joyful man'
    },
];

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

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
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Testimonials</CardTitle>
            <CardDescription>Manage student testimonials.</CardDescription>
          </div>
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-1" onClick={handleAddNew}>
                <PlusCircle className="h-3.5 w-3.5" />
                Add Testimonial
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{selectedTestimonial ? 'Edit' : 'Add'} Testimonial</DialogTitle>
                <DialogDescription>
                  {selectedTestimonial ? 'Edit the testimonial details.' : 'Add a new testimonial to the academy.'}
                </DialogDescription>
              </DialogHeader>
              <TestimonialForm 
                testimonial={selectedTestimonial}
                onSave={handleSaveTestimonial}
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
              <TableHead>Author</TableHead>
              <TableHead>Quote</TableHead>
              <TableHead>Program</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {testimonials.map(testimonial => (
              <TableRow key={testimonial.id}>
                <TableCell className="font-medium flex items-center gap-2">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    {testimonial.name}
                </TableCell>
                <TableCell className="max-w-sm truncate italic">"{testimonial.quote}"</TableCell>
                 <TableCell>{testimonial.program}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => handleEdit(testimonial)}>Edit</DropdownMenuItem>
                       <Dialog>
                        <DialogTrigger asChild>
                           <Button variant="ghost" className="w-full justify-start font-normal text-sm text-red-600 hover:text-red-600 px-2 py-1.5 h-auto">Delete</Button>
                        </DialogTrigger>
                         <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Are you sure?</DialogTitle>
                            <DialogDescription>
                              This action cannot be undone. This will permanently delete the testimonial.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <DialogClose asChild>
                               <Button variant="destructive" onClick={() => handleDelete(testimonial.id)}>
                                 Delete
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
