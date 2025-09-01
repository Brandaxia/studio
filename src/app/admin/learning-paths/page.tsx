
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

const initialPrograms: Program[] = [
  { id: 'p1', title: 'Machine Learning Engineering', description: 'desc', image: 'url', aiHint: ''},
  { id: 'p2', title: 'NLP: From Text to Transformers', description: 'desc', image: 'url', aiHint: ''},
  { id: 'p3', title: 'Computer Vision & Image Analysis', description: 'desc', image: 'url', aiHint: ''},
  { id: 'p4', title: 'Generative AI & Large Language Models', description: 'desc', image: 'url', aiHint: ''},
];

const initialLearningPaths: LearningPath[] = [
  { 
    id: 'lp1', 
    title: 'Foundations of AI Engineering', 
    description: 'A comprehensive path covering foundational ML and NLP to start your career in AI.', 
    programIds: ['p1', 'p2'] 
  },
  { 
    id: 'lp2', 
    title: 'Advanced AI Specialization', 
    description: 'Deepen your expertise with advanced topics in computer vision and generative AI.', 
    programIds: ['p3', 'p4'] 
  },
  {
    id: 'lp3',
    title: 'AI for Business & Product Leaders',
    description: 'Understand the strategic implications of AI and how to lead AI-driven projects without deep technical expertise.',
    programIds: ['p1', 'p4']
  },
  {
    id: 'lp4',
    title: 'Prompt Engineering & LLM Apps',
    description: 'Master the art of prompt design and build applications on top of Large Language Models.',
    programIds: ['p2', 'p4']
  },
  {
    id: 'lp5',
    title: 'Deep Learning for Computer Vision',
    description: 'A specialized path for creating advanced computer vision systems, from image recognition to segmentation.',
    programIds: ['p1', 'p3']
  },
  {
    id: 'lp6',
    title: 'Natural Language Processing Specialist',
    description: 'Become an expert in text analysis, from classic techniques to the latest transformer models.',
    programIds: ['p1', 'p2']
  },
  {
    id: 'lp7',
    title: 'Full-Stack AI Developer',
    description: 'A complete journey covering ML, NLP, and Generative AI to prepare you for building end-to-end AI products.',
    programIds: ['p1', 'p2', 'p3', 'p4']
  }
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
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>Learning Paths</CardTitle>
            <CardDescription>Manage curated sequences of programs for students.</CardDescription>
          </div>
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-1 w-full md:w-auto" onClick={handleAddNew}>
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
                <TableCell className="hidden max-w-sm truncate md:table-cell">{lp.description}</TableCell>
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
                           <Button variant="ghost" className="w-full justify-start px-2 py-1.5 h-auto text-sm font-normal text-red-600 hover:text-red-600">Delete</Button>
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
