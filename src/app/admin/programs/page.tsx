
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
    title: 'Machine Learning Foundations',
    description: 'Explore core ML concepts, from supervised learning to neural networks.',
    image: 'https://picsum.photos/600/400?random=1',
    aiHint: 'machine learning',
    courseIds: ['c1', 'c2'],
  },
  {
    id: '2',
    title: 'Natural Language Processing',
    description: 'Build models that understand, process, and generate human language.',
    image: 'https://picsum.photos/600/400?random=2',
    aiHint: 'natural language processing',
    courseIds: ['c3', 'c4'],
  },
  {
    id: '3',
    title: 'Computer Vision',
    description: 'Teach computers to see and interpret the visual world with deep learning.',
    image: 'https://picsum.photos/600/400?random=3',
    aiHint: 'computer vision',
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
            <CardTitle>Programs</CardTitle>
            <CardDescription>Manage the main educational programs.</CardDescription>
          </div>
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-1" onClick={handleAddNew}>
                <PlusCircle className="h-3.5 w-3.5" />
                Add Program
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{selectedProgram ? 'Edit' : 'Add'} Program</DialogTitle>
                <DialogDescription>
                  {selectedProgram ? 'Edit the program details.' : 'Create a new program for the academy.'}
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
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Description</TableHead>
              <TableHead>Courses</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
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
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => handleEdit(program)}>Edit</DropdownMenuItem>
                       <Dialog>
                        <DialogTrigger asChild>
                           <Button variant="ghost" className="w-full justify-start font-normal text-sm text-red-600 hover:text-red-600 px-2 py-1.5 h-auto">Delete</Button>
                        </DialogTrigger>
                         <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Are you sure?</DialogTitle>
                            <DialogDescription>
                              This action cannot be undone. This will permanently delete the program.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <DialogClose asChild>
                               <Button variant="destructive" onClick={() => handleDelete(program.id)}>
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
