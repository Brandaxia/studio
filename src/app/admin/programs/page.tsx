
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
    id: 'p1',
    title: 'Machine Learning Engineering',
    description: 'Build a solid foundation in machine learning, from algorithms to deployment.',
    image: 'https://picsum.photos/600/400?random=1',
    aiHint: 'machine learning',
    courseIds: ['c1', 'c2', 'c3', 'c4'],
  },
  {
    id: 'p2',
    title: 'NLP: From Text to Transformers',
    description: 'Master the art of building models that understand and generate human language.',
    image: 'https://picsum.photos/600/400?random=2',
    aiHint: 'natural language processing',
    courseIds: ['c5', 'c6', 'c7'],
  },
  {
    id: 'p3',
    title: 'Computer Vision & Image Analysis',
    description: 'Teach computers to "see" and interpret the visual world.',
    image: 'https://picsum.photos/600/400?random=3',
    aiHint: 'computer vision',
    courseIds: ['c8', 'c9', 'c10'],
  },
   {
    id: 'p4',
    title: 'Generative AI & Large Language Models',
    description: 'Explore the cutting-edge of AI with generative models and LLMs.',
    image: 'https://picsum.photos/600/400?random=4',
    aiHint: 'generative ai',
    courseIds: ['c11', 'c12', 'c13'],
  },
];


export default function AdminProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>(initialPrograms);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const handleSaveProgram = (program: Program) => {
    if (selectedProgram) {
      setPrograms(programs.map(p => p.id === program.id ? program : p));
    } else {
      setPrograms([...programs, { ...program, id: `p${programs.length + 1}` }]);
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
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>Programs</CardTitle>
            <CardDescription>Manage the main educational programs.</CardDescription>
          </div>
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-1 w-full md:w-auto" onClick={handleAddNew}>
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
                <TableCell className="hidden max-w-xs truncate md:table-cell">{program.description}</TableCell>
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
                           <Button variant="ghost" className="w-full justify-start px-2 py-1.5 h-auto text-sm font-normal text-red-600 hover:text-red-600">Delete</Button>
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
