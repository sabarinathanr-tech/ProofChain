'use client';

import { FormEvent, useState } from 'react';
import { useToast } from '@/components/ui/ToastProvider';

export function CompanyProfileForm() {
  const { showToast } = useToast();
  const [isSaving, setIsSaving] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    window.setTimeout(() => {
      setIsSaving(false);
      showToast({ kind: 'success', title: 'Company profile updated', message: 'Business settings are ready for production data.' });
    }, 700);
  }

  return (
    <form className="card" onSubmit={submit}>
      <div className="card-heading"><div><h3>Company profile</h3><p className="metric">Business identity used across shipments, reports, invoices, and disputes.</p></div><div className="company-logo">PC</div></div>
      <div className="settings-grid">
        <label className="field">Company name<input defaultValue="ProofChain Manufacturing Pvt Ltd" required /></label>
        <label className="field">GST number<input defaultValue="29ABCDE1234F1Z5" required /></label>
        <label className="field">Contact person<input defaultValue="Sabarinathan R" required /></label>
        <label className="field">Work email<input type="email" defaultValue="sabarinathanr.tech@gmail.com" required /></label>
        <label className="field">Phone<input defaultValue="+91 98765 43210" required /></label>
        <label className="field">Business logo<input type="file" accept="image/*" /></label>
      </div>
      <label className="field">Registered address<textarea defaultValue="Coimbatore, Tamil Nadu, India" required /></label>
      <div className="action-grid"><button className="button" disabled={isSaving} type="submit">{isSaving ? 'Saving...' : 'Save profile'}</button><button className="button secondary" type="button">Preview report header</button></div>
    </form>
  );
}
