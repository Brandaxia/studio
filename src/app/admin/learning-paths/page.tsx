
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/componentsui/table';
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

const initialPrograms: Program[] = [
  { id: '1', title: 'Machine Learning Foundations', description: 'desc', image: 'url', aiHint: '' },
  { id: '2', title: 'Natural Language Processing', description: 'desc', image: 'url', aiHint: '' },
  { id: '3', title: 'Computer Vision', description: 'desc', image: 'url', aiHint: '' },
];

const initialLearningPaths: LearningPath[] = [
  { id: 'lp1', title: 'AI Engineer Path', description: 'A comprehensive path to becoming an AI Engineer.', programIds: ['1'] },
  { id: 'lp2', title: 'Data Scientist with Python', description: 'Combines ML and data analysis skills.', programIds: ['1', '2'] },
];

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
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Learning Paths</CardTitle>
            <CardDescription>Manage curated sequences of programs for students.</CardDescription>
          </div>
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-1" onClick={handleAddNew}>
                <PlusCircle className="h-3.5 w-3.5" />
                Add Path
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{selectedLearningPath ? 'Edit' : 'Add'} Learning Path</DialogTitle>
                <DialogDescription>
                  {selectedLearningPath ? 'Edit the path details.' : 'Create a new learning path.'}
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
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Description</TableHead>
              <TableHead>Programs</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {learningPaths.map(lp => (
              <TableRow key={lp.id}>
                <TableCell className="font-medium">{lp.title}</TableCell>
                <TableCell className="hidden md:table-cell max-w-sm truncate">{lp.description}</TableCell>
                 <TableCell>{lp.programIds.length}</TableCell>
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
                      <DropdownMenuItem onClick={() => handleEdit(lp)}>Edit</DropdownMenuItem>
                       <Dialog>
                        <DialogTrigger asChild>
                           <Button variant="ghost" className="w-full justify-start font-normal text-sm text-red-600 hover:text-red-600 px-2 py-1.5 h-auto">Delete</Button>
                        </DialogTrigger>
                         <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Are you sure?</DialogTitle>
                            <DialogDescription>
                              This action cannot be undone. This will permanently delete the path.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <DialogClose asChild>
                               <Button variant="destructive" onClick={() => handleDelete(lp.id)}>
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
