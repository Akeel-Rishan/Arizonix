'use client';

import * as Sentry from '@sentry/nextjs';
import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  sectionName?: string;
}

interface State {
  error?: Error;
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { error, hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    Sentry.withScope((scope) => {
      scope.setTag('section', this.props.sectionName ?? 'unknown');
      scope.setExtra('componentStack', errorInfo.componentStack);
      Sentry.captureException(error);
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="py-12 text-center text-sm text-slate-500">
            This section failed to load.
          </div>
        )
      );
    }

    return this.props.children;
  }
}
