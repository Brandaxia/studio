
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
  DropdownMenuSeparator,
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
import { MoreHorizontal, PlusCircle, ExternalLink } from 'lucide-react';
import type { Notebook } from '@/lib/types';
import { NotebookForm } from './notebook-form';
import { initialNotebooks } from '@/lib/data';
import Link from 'next/link';

export default function AdminNotebooksPage() {
  const [notebooks, setNotebooks] = useState<Notebook[]>(initialNotebooks);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedNotebook, setSelectedNotebook] = useState<Notebook | null>(null);

  const handleSaveNotebook = (notebook: Notebook) => {
    if (selectedNotebook) {
      setNotebooks(notebooks.map(n => n.id === notebook.id ? notebook : n));
    } else {
      setNotebooks([...notebooks, { ...notebook, id: `nb${notebooks.length + 1}` }]);
    }
    setSelectedNotebook(null);
    setIsFormOpen(false);
  };
  
  const handleEdit = (notebook: Notebook) => {
    setSelectedNotebook(notebook);
    setIsFormOpen(true);
  }

  const handleAddNew = () => {
    setSelectedNotebook(null);
    setIsFormOpen(true);
  }
  
  const handleDelete = (id: string) => {
     setNotebooks(notebooks.filter(n => n.id !== id));
  };


  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Google Colab Notebooks</CardTitle>
            <CardDescription>Manage interactive notebooks for practical learning.</CardDescription>
          </div>
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-1" onClick={handleAddNew}>
                <PlusCircle className="h-3.5 w-3.5" />
                Add Notebook
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{selectedNotebook ? 'Edit' : 'Add'} Notebook</DialogTitle>
                <DialogDescription>
                  {selectedNotebook ? 'Edit the notebook details.' : 'Add a new Colab notebook to the academy.'}
                </DialogDescription>
              </DialogHeader>
              <NotebookForm 
                notebook={selectedNotebook}
                onSave={handleSaveNotebook}
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
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notebooks.map(notebook => (
              <TableRow key={notebook.id}>
                <TableCell className="font-medium">
                  <Link href={notebook.url} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                    {notebook.title}
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </Link>
                </TableCell>
                <TableCell className="hidden md:table-cell max-w-sm truncate">{notebook.description}</TableCell>
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
                      <DropdownMenuItem onClick={() => handleEdit(notebook)}>Edit</DropdownMenuItem>
                       <DropdownMenuItem asChild>
                        <Link href={notebook.url} target="_blank" rel="noopener noreferrer">
                          Open in Colab
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                       <Dialog>
                        <DialogTrigger asChild>
                           <Button variant="ghost" className="w-full justify-start font-normal text-sm text-red-600 hover:text-red-600 px-2 py-1.5 h-auto">Delete</Button>
                        </DialogTrigger>
                         <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Are you sure?</DialogTitle>
                            <DialogDescription>
                              This action cannot be undone. This will permanently delete the notebook.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <DialogClose asChild>
                               <Button variant="destructive" onClick={() => handleDelete(notebook.id)}>
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
