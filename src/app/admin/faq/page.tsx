
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
    question: 'What is "Ainsophic Academy"?',
    answer: 'Ainsophic Academy is a learning platform dedicated to providing cutting-edge education in Artificial Intelligence, from foundational concepts to advanced specializations.',
  },
  {
    id: '2',
    question: 'Do I need a background in programming to enroll?',
    answer: 'While our foundational courses are designed to be accessible, a basic understanding of Python is recommended to get the most out of the material. We offer prep courses for beginners.',
  },
  {
    id: '3',
    question: 'Are the programs online or in-person?',
    answer: 'Currently, all our programs are offered in a flexible online format, allowing students from around the world to join. We use a combination of recorded content, live sessions, and interactive notebooks.',
  },
  {
    id: '4',
    question: 'What kind of support do I get as a student?',
    answer: 'We offer comprehensive support through community forums, Q&A sessions with instructors, and access to a personal mentor to guide you on your learning journey.',
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
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Manage the FAQs for the academy.</CardDescription>
          </div>
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-1" onClick={handleAddNew}>
                <PlusCircle className="h-3.5 w-3.5" />
                Add FAQ
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{selectedFaq ? 'Edit' : 'Add'} FAQ</DialogTitle>
                <DialogDescription>
                  {selectedFaq ? 'Edit the question details.' : 'Add a new frequently asked question.'}
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
              <TableHead>Question</TableHead>
              <TableHead className="hidden md:table-cell">Answer</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
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
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => handleEdit(faq)}>Edit</DropdownMenuItem>
                       <Dialog>
                        <DialogTrigger asChild>
                           <Button variant="ghost" className="w-full justify-start font-normal text-sm text-red-600 hover:text-red-600 px-2 py-1.5 h-auto">Delete</Button>
                        </DialogTrigger>
                         <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Are you sure?</DialogTitle>
                            <DialogDescription>
                              This action cannot be undone. This will permanently delete the question.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <DialogClose asChild>
                               <Button variant="destructive" onClick={() => handleDelete(faq.id)}>
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
