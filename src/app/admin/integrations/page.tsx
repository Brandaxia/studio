
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { MoreHorizontal } from 'lucide-react';
import type { Integration } from '@/lib/types';
import { IntegrationForm } from './integration-form';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';


const initialIntegrations: Integration[] = [
  {
    id: '1',
    name: 'Google AI Studio',
    apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxx1234',
    enabled: true,
  },
  {
    id: '2',
    name: 'Moodle',
    apiKey: 'moodle-token-xxxxxxxxxxxxxx',
    enabled: false,
  },
];

export default function AdminIntegrationsPage() {
  const [integrations, setIntegrations] = useState<Integration[]>(initialIntegrations);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null);

  const handleSaveIntegration = (integration: Integration) => {
    setIntegrations(integrations.map(i => i.id === integration.id ? integration : i));
    setSelectedIntegration(null);
    setIsFormOpen(false);
  };
  
  const handleEdit = (integration: Integration) => {
    setSelectedIntegration(integration);
    setIsFormOpen(true);
  }

  const handleToggle = (id: string, enabled: boolean) => {
    setIntegrations(integrations.map(i => i.id === id ? { ...i, enabled } : i));
  };
  
  const maskApiKey = (key: string) => {
    if (key.length < 8) return key;
    return `${key.substring(0, 4)}...${key.substring(key.length - 4)}`;
  }


  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>API Integrations</CardTitle>
            <CardDescription>Manage connections to external services.</CardDescription>
          </div>
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
             {/* Note: "Add New" is removed as integrations are predefined */}
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Integration</DialogTitle>
                <DialogDescription>
                  Update the settings for {selectedIntegration?.name}.
                </DialogDescription>
              </DialogHeader>
              <IntegrationForm 
                integration={selectedIntegration}
                onSave={handleSaveIntegration}
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
              <TableHead>Service</TableHead>
              <TableHead>API Key</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {integrations.map(item => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell className="font-mono text-xs">{maskApiKey(item.apiKey)}</TableCell>
                <TableCell className="text-center">
                    <Badge variant={item.enabled ? 'default' : 'outline'}>
                      {item.enabled ? 'Active' : 'Inactive'}
                    </Badge>
                </TableCell>
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
                      <DropdownMenuItem onClick={() => handleEdit(item)}>Edit</DropdownMenuItem>
                       <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        <div className="flex items-center justify-between w-full">
                          <span>{item.enabled ? 'Disable' : 'Enable'}</span>
                          <Switch
                            checked={item.enabled}
                            onCheckedChange={(checked) => handleToggle(item.id, checked)}
                            className="ml-4"
                          />
                        </div>
                      </DropdownMenuItem>
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
