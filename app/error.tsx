'use client';
export default function ErrorPage({ reset }: { reset: () => void }) { return <main className="container section"><h1>Something needs attention.</h1><p className="metric">The page could not be loaded. Try again in a moment.</p><button className="button" onClick={reset}>Retry</button></main>; }
