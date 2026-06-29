import Link from 'next/link';
export function LoginForm() {
  return (
    <form className="card form-card">
      <h1>Welcome back</h1>
      <label className="field">Email<input type="email" placeholder="ops@company.com" /></label>
      <label className="field">Password<input type="password" placeholder="Password" /></label>
      <Link className="button" href="/dashboard">Login</Link>
      <p className="metric"><Link href="/forgot-password">Forgot password?</Link></p>
      <p className="metric">Do not have an account? <Link href="/signup"><strong>Create account</strong></Link></p>
    </form>
  );
}
