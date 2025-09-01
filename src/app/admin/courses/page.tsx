
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
  { id: '1', title: 'Machine Learning Foundations', description: 'desc', image: 'url', aiHint: '' },
  { id: '2', title: 'Natural Language Processing', description: 'desc', image: 'url', aiHint: '' },
  { id: '3', title: 'Computer Vision', description: 'desc', image: 'url', aiHint: '' },
];

const initialCourses: Course[] = [
  { id: 'c1', programId: '1', title: 'Introduction to Supervised Learning', description: 'Learn about regression and classification.'},
  { id: 'c2', programId: '1', title: 'Unsupervised Learning Techniques', description: 'Explore clustering and dimensionality reduction.'},
  { id: 'c3', programId: '2', title: 'Transformers and Attention Mechanism', description: 'Deep dive into the architecture that powers modern LLMs.'},
  { id: 'c4', programId: '2', title: 'Text Generation and Summarization', description: 'Build models that can write and summarize.'},
  { id: 'c5', programId: '3', title: 'Convolutional Neural Networks (CNNs)', description: 'Understand the building blocks of image recognition.'},
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
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Courses</CardTitle>
            <CardDescription>Manage individual courses within each program.</CardDescription>
          </div>
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-1" onClick={handleAddNew}>
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
                <TableCell className="hidden md:table-cell max-w-sm truncate">{course.description}</TableCell>
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
                           <Button variant="ghost" className="w-full justify-start font-normal text-sm text-red-600 hover:text-red-600 px-2 py-1.5 h-auto">Delete</Button>
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
