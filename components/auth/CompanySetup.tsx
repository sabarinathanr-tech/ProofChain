'use client';

import { FormEvent, useState } from 'react';
import { useToast } from '@/components/ui/ToastProvider';

export function CompanySetup() {
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    window.setTimeout(() => {
      setIsLoading(false);
      showToast({ kind: 'success', title: 'Company profile saved', message: 'Your workspace is ready.' });
      window.location.href = '/dashboard';
    }, 700);
  }

  return <form className="card form-card" onSubmit={submit}><h1>Company setup</h1><p className="metric">Configure the first operational profile for shipment verification.</p><label className="field">Primary workflow<select required><option>Shipment disputes</option><option>Warehouse exceptions</option><option>Vendor analytics</option></select></label><label className="field">Monthly shipments<input type="number" placeholder="1200" required /></label><label className="field">Primary warehouse<input placeholder="Detroit WH-03" required /></label><button className="button" disabled={isLoading} type="submit">{isLoading ? 'Saving...' : 'Finish setup'}</button></form>;
}
