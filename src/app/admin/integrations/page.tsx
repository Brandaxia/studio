
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
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { MoreHorizontal, PlusCircle, Copy, Check } from 'lucide-react';
import type { Integration, AcademyApiKey } from '@/lib/types';
import { IntegrationForm } from './integration-form';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { initialIntegrations, initialApiKeys } from '@/lib/data';
import { Input } from '@/components/ui/input';

export default function AdminIntegrationsPage() {
  // Third-party integrations state
  const [integrations, setIntegrations] = useState<Integration[]>(initialIntegrations);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null);

  // Academy API keys state
  const [apiKeys, setApiKeys] = useState<AcademyApiKey[]>(initialApiKeys);
  const [isApiKeyDialogOpen, setIsApiKeyDialogOpen] = useState(false);
  const [newlyGeneratedKey, setNewlyGeneratedKey] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Handlers for third-party integrations
  const handleSaveIntegration = (integrationData: Omit<Integration, 'id'> | Integration) => {
    if ('id' in integrationData) {
      // Editing existing integration
      setIntegrations(integrations.map(i => i.id === integrationData.id ? integrationData : i));
    } else {
      // Adding new integration
      const newIntegration: Integration = {
        id: `int-${Date.now()}`,
        ...integrationData
      };
      setIntegrations([...integrations, newIntegration]);
    }
    setIsFormOpen(false);
    setSelectedIntegration(null);
  };
  
  const handleEdit = (integration: Integration) => {
    setSelectedIntegration(integration);
    setIsFormOpen(true);
  }
  
  const handleAddNew = () => {
    setSelectedIntegration(null);
    setIsFormOpen(true);
  };

  const handleToggleIntegration = (id: string, enabled: boolean) => {
    setIntegrations(integrations.map(i => i.id === id ? { ...i, enabled } : i));
  };
  
  const maskApiKey = (key: string) => {
    if (key.length < 8) return key;
    return `${key.substring(0, 4)}...${key.substring(key.length - 4)}`;
  }

  // Handlers for Academy API Keys
  const handleGenerateNewKey = () => {
    const newKey = `secret_live_${crypto.randomUUID().replace(/-/g, '')}`;
    const newApiKey: AcademyApiKey = {
      id: `key-${apiKeys.length + 1 + Math.random()}`,
      key: newKey,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'active',
    };
    setApiKeys([...apiKeys, newApiKey]);
    setNewlyGeneratedKey(newKey);
    setIsApiKeyDialogOpen(true);
    setCopied(false);
  };

  const handleToggleApiKeyStatus = (id: string) => {
    setApiKeys(apiKeys.map(k => k.id === id ? { ...k, status: k.status === 'active' ? 'inactive' : 'active' } : k));
  };

  const handleRevokeApiKey = (id: string) => {
    setApiKeys(apiKeys.filter(k => k.id !== id));
  };

  const handleCopy = () => {
    if (newlyGeneratedKey) {
      navigator.clipboard.writeText(newlyGeneratedKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="grid gap-8">
      {/* Third-Party Integrations Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Third-Party Integrations</CardTitle>
              <CardDescription>Manage connections to external services like Google AI and Moodle.</CardDescription>
            </div>
             <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                <DialogTrigger asChild>
                    <Button size="sm" className="gap-1" onClick={handleAddNew}>
                        <PlusCircle className="h-3.5 w-3.5" />
                        Add Integration
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                    <DialogTitle>{selectedIntegration ? 'Edit Integration' : 'Add New Integration'}</DialogTitle>
                    <DialogDescription>
                        {selectedIntegration ? `Update the settings for ${selectedIntegration.name}.` : 'Connect a new third-party service.'}
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
                        <DropdownMenuItem onClick={() => handleEdit(item)}>Edit API Key</DropdownMenuItem>
                         <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          <div className="flex items-center justify-between w-full">
                            <span>{item.enabled ? 'Disable' : 'Enable'}</span>
                            <Switch
                              checked={item.enabled}
                              onCheckedChange={(checked) => handleToggleIntegration(item.id, checked)}
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

      {/* Academy API Keys Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Academy API Keys</CardTitle>
              <CardDescription>Generate and manage API keys for external access to the academy's platform.</CardDescription>
            </div>
            <Button size="sm" className="gap-1" onClick={handleGenerateNewKey}>
              <PlusCircle className="h-3.5 w-3.5" />
              Generate New API Key
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>API Key</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apiKeys.map(apiKey => (
                <TableRow key={apiKey.id}>
                  <TableCell className="font-mono text-xs">{maskApiKey(apiKey.key)}</TableCell>
                  <TableCell>{new Date(apiKey.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={apiKey.status === 'active' ? 'default' : 'outline'}>
                      {apiKey.status === 'active' ? 'Active' : 'Inactive'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleToggleApiKeyStatus(apiKey.id)}>
                          {apiKey.status === 'active' ? 'Deactivate' : 'Activate'}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <Dialog>
                          <DialogTrigger asChild>
                             <Button variant="ghost" className="w-full justify-start font-normal text-sm text-red-600 hover:text-red-600 px-2 py-1.5 h-auto">Revoke</Button>
                          </DialogTrigger>
                           <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Are you sure?</DialogTitle>
                              <DialogDescription>
                                This action cannot be undone. This will permanently delete the API key and revoke all access.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                              </DialogClose>
                              <DialogClose asChild>
                                 <Button variant="destructive" onClick={() => handleRevokeApiKey(apiKey.id)}>
                                   Revoke Key
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

      {/* Dialog for newly generated API key */}
      <Dialog open={isApiKeyDialogOpen} onOpenChange={setIsApiKeyDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New API Key Generated</DialogTitle>
            <DialogDescription>
              Please copy this key and store it in a safe place. You will not be able to see it again.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Input
                id="link"
                defaultValue={newlyGeneratedKey ?? ''}
                readOnly
                className="font-mono"
              />
            </div>
            <Button type="submit" size="sm" className="px-3" onClick={handleCopy}>
              <span className="sr-only">Copy</span>
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

    