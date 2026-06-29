'use client';

import Link from 'next/link';
import { FormEvent, useMemo, useState } from 'react';
import { useToast } from '@/components/ui/ToastProvider';

export function LoginForm() {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const canSubmit = useMemo(() => email.includes('@') && password.length >= 8 && !isLoading, [email, password, isLoading]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    if (!email.includes('@')) {
      setError('Enter a valid work email address.');
      showToast({ kind: 'error', title: 'Email needed', message: 'Use your company email to continue.' });
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      showToast({ kind: 'warning', title: 'Weak password', message: 'Use at least 8 characters.' });
      return;
    }
    setIsLoading(true);
    window.setTimeout(() => {
      setIsLoading(false);
      showToast({ kind: 'success', title: 'Logged in', message: remember ? 'Workspace session remembered.' : 'Session started.' });
      window.location.href = '/dashboard';
    }, 650);
  }

  return (
    <form className="card form-card" onSubmit={submit}>
      <h1>Welcome back</h1>
      <p className="metric">Access your shipment verification command center.</p>
      <label className="field">Email<input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="ops@company.com" required /></label>
      <label className="field">Password
        <div className="input-action">
          <input value={password} onChange={(event) => setPassword(event.target.value)} type={showPassword ? 'text' : 'password'} placeholder="Password" required />
          <button type="button" onClick={() => setShowPassword((value) => !value)}>{showPassword ? 'Hide' : 'Show'}</button>
        </div>
      </label>
      <label className="check-row"><input checked={remember} onChange={(event) => setRemember(event.target.checked)} type="checkbox" /> Remember me</label>
      {error ? <p className="form-error">{error}</p> : null}
      <button className="button" disabled={!canSubmit} type="submit">{isLoading ? 'Signing in...' : 'Login'}</button>
      <p className="metric"><Link href="/forgot-password">Forgot password?</Link></p>
      <p className="metric">Do not have an account? <Link href="/signup"><strong>Create account</strong></Link></p>
    </form>
  );
}
