import React, { Component, createContext, ReactNode } from 'react';
import { withRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';

import ErrorComponent from '../Error';

interface Props extends WithRouterProps {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

interface ContextValue {
  throwAsyncError: (err: Error) => void;
}

export const ErrorContext = createContext<ContextValue>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  throwAsyncError: () => {},
});

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  clearError = () => {
    this.setState({ error: null });
    this.props.router.events.off('routeChangeComplete', this.clearError);
  }

  throwAsyncError = (error: Error) => {
    this.setState({ error });
    this.props.router.events.on('routeChangeComplete', this.clearError);
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return <ErrorComponent />;
    }

    return (
      <ErrorContext.Provider value={{ throwAsyncError: this.throwAsyncError }}>
        {this.props.children}
      </ErrorContext.Provider>
    );
  }
}

export default withRouter(ErrorBoundary);
