'use client';

import { FormEvent, useState } from 'react';
import { useToast } from '@/components/ui/ToastProvider';

export function ForgotPassword() {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    if (!email.includes('@')) {
      setError('Enter a valid email address.');
      showToast({ kind: 'error', title: 'Email required', message: 'Use your work email to receive a reset link.' });
      return;
    }
    setIsLoading(true);
    window.setTimeout(() => {
      setIsLoading(false);
      showToast({ kind: 'success', title: 'Reset link prepared', message: 'Check your email inbox.' });
    }, 650);
  }

  return <form className="card form-card" onSubmit={submit}><h1>Reset password</h1><p className="metric">Enter your email and ProofChain will prepare a secure reset link.</p><label className="field">Email<input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="you@company.com" required /></label>{error ? <p className="form-error">{error}</p> : null}<button className="button" disabled={isLoading} type="submit">{isLoading ? 'Sending...' : 'Send link'}</button></form>;
}
