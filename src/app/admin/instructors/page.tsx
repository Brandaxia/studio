
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

const initialInstructors: Instructor[] = [
  {
    id: '1',
    name: 'Dr. Evelyn Reed',
    title: 'Principal AI Scientist',
    avatar: 'https://picsum.photos/100/100?random=4',
    aiHint: 'female scientist',
  },
  {
    id: '2',
    name: 'Dr. Kenji Tanaka',
    title: 'Head of NLP Research',
    avatar: 'https://picsum.photos/100/100?random=5',
    aiHint: 'male researcher',
  },
  {
    id: '3',
    name: 'Dr. Lena Petrova',
    title: 'Computer Vision Architect',
    avatar: 'https://picsum.photos/100/100?random=6',
    aiHint: 'creative technologist',
  },
];

export default function AdminInstructorsPage() {
  const [instructors, setInstructors] = useState<Instructor[]>(initialInstructors);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);

  const handleSaveInstructor = (instructor: Instructor) => {
    if (selectedInstructor) {
      // Update
      setInstructors(instructors.map(i => i.id === instructor.id ? instructor : i));
    } else {
      // Create
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
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Instructors</CardTitle>
            <CardDescription>Manage the academy's instructors.</CardDescription>
          </div>
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-1" onClick={handleAddNew}>
                <PlusCircle className="h-3.5 w-3.5" />
                Add Instructor
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{selectedInstructor ? 'Edit' : 'Add'} Instructor</DialogTitle>
                <DialogDescription>
                  {selectedInstructor ? "Edit the instructor's details." : 'Add a new instructor to the academy.'}
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
              <TableHead>Name</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
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
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => handleEdit(instructor)}>Edit</DropdownMenuItem>
                       <Dialog>
                        <DialogTrigger asChild>
                           <Button variant="ghost" className="w-full justify-start font-normal text-sm text-red-600 hover:text-red-600 px-2 py-1.5 h-auto">Delete</Button>
                        </DialogTrigger>
                         <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Are you sure?</DialogTitle>
                            <DialogDescription>
                              This action cannot be undone. This will permanently delete the instructor.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <DialogClose asChild>
                               <Button variant="destructive" onClick={() => handleDelete(instructor.id)}>
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
