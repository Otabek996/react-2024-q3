import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  fallback: string;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <>
        <h1>{this.props.fallback}</h1>
        <button onClick={this.handleRefresh}>Reload the Page</button>
        </>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
