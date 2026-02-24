'use client';

import { useState } from 'react';

export default function TestErrorPage() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error('Test error for error boundary');
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="glass-card p-8 text-center">
        <h1 className="text-2xl font-heading font-bold mb-4">Error Testing Page</h1>
        <p className="mb-6 text-white/80">Click the button below to test the error boundary:</p>
        <button
          onClick={() => setShouldError(true)}
          className="glass-card px-6 py-3 neon-glow hover:neon-glow-hover transition-all duration-300"
        >
          Trigger Error
        </button>
      </div>
    </div>
  );
}