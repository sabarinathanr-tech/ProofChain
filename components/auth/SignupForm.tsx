'use client';

import Link from 'next/link';
import { FormEvent, useMemo, useState } from 'react';
import { useToast } from '@/components/ui/ToastProvider';

function passwordScore(password: string) {
  return [password.length >= 8, /[A-Z]/.test(password), /\d/.test(password), /[^A-Za-z0-9]/.test(password)].filter(Boolean).length;
}

export function SignupForm() {
  const { showToast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const score = passwordScore(password);
  const strength = ['Add password', 'Weak', 'Fair', 'Strong', 'Excellent'][score];
  const canSubmit = useMemo(() => name.length > 1 && email.includes('@') && company.length > 1 && score >= 2 && !isLoading, [name, email, company, score, isLoading]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    if (!canSubmit) {
      setError('Complete all required fields with a valid email and stronger password.');
      showToast({ kind: 'error', title: 'Account not ready', message: 'Check the required fields and password strength.' });
      return;
    }
    setIsLoading(true);
    window.setTimeout(() => {
      setIsLoading(false);
      showToast({ kind: 'success', title: 'Workspace created', message: 'Continue company onboarding.' });
      window.location.href = '/onboarding';
    }, 700);
  }

  return (
    <form className="card form-card" onSubmit={submit}>
      <h1>Create workspace</h1>
      <p className="metric">Start a secure ProofChain workspace for your operations team.</p>
      <label className="field">Name<input value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" required /></label>
      <label className="field">Work email<input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="you@company.com" required /></label>
      <label className="field">Company<input value={company} onChange={(event) => setCompany(event.target.value)} placeholder="Company name" required /></label>
      <label className="field">Password
        <div className="input-action">
          <input value={password} onChange={(event) => setPassword(event.target.value)} type={showPassword ? 'text' : 'password'} placeholder="Create password" required />
          <button type="button" onClick={() => setShowPassword((value) => !value)}>{showPassword ? 'Hide' : 'Show'}</button>
        </div>
      </label>
      <div className="strength"><span style={{ width: `${score * 25}%` }} /><small>{strength}</small></div>
      {error ? <p className="form-error">{error}</p> : null}
      <button className="button" disabled={!canSubmit} type="submit">{isLoading ? 'Creating...' : 'Continue'}</button>
      <p className="metric">Already have an account? <Link href="/login"><strong>Log in</strong></Link></p>
    </form>
  );
}
