
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
import type { Course, Program } from '@/lib/types';
import { CourseForm } from './course-form';
import { Badge } from '@/components/ui/badge';

const initialPrograms: Program[] = [
  { id: 'p1', title: 'Machine Learning Engineering', description: 'desc', image: 'url', aiHint: '', courseIds: ['c1', 'c2', 'c3', 'c4']},
  { id: 'p2', title: 'NLP: From Text to Transformers', description: 'desc', image: 'url', aiHint: '', courseIds: ['c5', 'c6', 'c7']},
  { id: 'p3', title: 'Computer Vision & Image Analysis', description: 'desc', image: 'url', aiHint: '', courseIds: ['c8', 'c9', 'c10']},
  { id: 'p4', title: 'Generative AI & Large Language Models', description: 'desc', image: 'url', aiHint: '', courseIds: ['c11', 'c12', 'c13']},
];

const initialCourses: Course[] = [
  { id: 'c1', programId: 'p1', title: 'Statistical Foundations for Machine Learning', description: 'Core statistical concepts that underpin machine learning algorithms.'},
  { id: 'c2', programId: 'p1', title: 'Supervised Learning: From Regression to Classification', description: 'A deep dive into supervised learning models and their applications.'},
  { id: 'c3', programId: 'p1', title: 'Unsupervised Learning & Dimensionality Reduction', description: 'Explore clustering, anomaly detection, and feature reduction.'},
  { id: 'c4', programId: 'p1', title: 'Introduction to Neural Networks & Deep Learning', description: 'Build your first neural networks from scratch.'},
  { id: 'c5', programId: 'p2', title: 'Text Preprocessing & Vectorization Techniques', description: 'Learn how to process and represent text for ML models.'},
  { id: 'c6', programId: 'p2', title: 'Understanding Transformers & the Attention Mechanism', description: 'The core architecture behind modern LLMs.'},
  { id: 'c7', programId: 'p2', title: 'Fine-tuning Language Models for Downstream Tasks', description: 'Adapt pre-trained models for specific applications like sentiment analysis.'},
  { id: 'c8', programId: 'p3', title: 'Fundamentals of Image Processing', description: 'Learn about pixels, filters, and transformations.'},
  { id: 'c9', programId: 'p3', title: 'Convolutional Neural Networks (CNNs) for Image Recognition', description: 'Build and train models for classifying images.'},
  { id: 'c10', programId: 'p3', title: 'Object Detection and Image Segmentation', description: 'Go beyond classification to identify and segment objects.'},
  { id: 'c11', programId: 'p4', title: 'Introduction to Generative Models: VAEs and GANs', description: 'Understand the principles behind generative AI.'},
  { id: 'c12', programId: 'p4', title: 'The Architecture of Large Language Models (LLMs)', description: 'A detailed look at what makes LLMs work.'},
  { id: 'c13', programId: 'p4', title: 'Prompt Engineering & In-Context Learning', description: 'Master the art of crafting effective prompts for LLMs.'},
];


export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [programs] = useState<Program[]>(initialPrograms);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  
  const getProgramName = (programId: string) => {
    return programs.find(p => p.id === programId)?.title || 'Unknown';
  }

  const handleSaveCourse = (course: Course) => {
    if (selectedCourse) {
      setCourses(courses.map(c => c.id === course.id ? course : c));
    } else {
      setCourses([...courses, { ...course, id: `c${courses.length + 1}` }]);
    }
    setSelectedCourse(null);
    setIsFormOpen(false);
  };
  
  const handleEdit = (course: Course) => {
    setSelectedCourse(course);
    setIsFormOpen(true);
  }

  const handleAddNew = () => {
    setSelectedCourse(null);
    setIsFormOpen(true);
  }
  
  const handleDelete = (id: string) => {
     setCourses(courses.filter(c => c.id !== id));
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>Courses</CardTitle>
            <CardDescription>Manage individual courses within each program.</CardDescription>
          </div>
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-1 w-full md:w-auto" onClick={handleAddNew}>
                <PlusCircle className="h-3.5 w-3.5" />
                Add Course
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{selectedCourse ? 'Edit' : 'Add'} Course</DialogTitle>
                <DialogDescription>
                  {selectedCourse ? 'Edit the course details.' : 'Create a new course for a program.'}
                </DialogDescription>
              </DialogHeader>
              <CourseForm 
                course={selectedCourse}
                programs={programs}
                onSave={handleSaveCourse}
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
              <TableHead>Course Title</TableHead>
              <TableHead>Program</TableHead>
              <TableHead className="hidden md:table-cell">Description</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map(course => (
              <TableRow key={course.id}>
                <TableCell className="font-medium">{course.title}</TableCell>
                <TableCell>
                  <Badge variant="outline">{getProgramName(course.programId)}</Badge>
                </TableCell>
                <TableCell className="hidden max-w-xs truncate md:table-cell">{course.description}</TableCell>
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
                      <DropdownMenuItem onClick={() => handleEdit(course)}>Edit</DropdownMenuItem>
                       <Dialog>
                        <DialogTrigger asChild>
                           <Button variant="ghost" className="w-full justify-start px-2 py-1.5 h-auto text-sm font-normal text-red-600 hover:text-red-600">Delete</Button>
                        </DialogTrigger>
                         <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Are you sure?</DialogTitle>
                            <DialogDescription>
                              This action cannot be undone. This will permanently delete the course.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <DialogClose asChild>
                               <Button variant="destructive" onClick={() => handleDelete(course.id)}>
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
