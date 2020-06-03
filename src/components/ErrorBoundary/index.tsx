import React, { Component } from 'react';
import styled from 'styled-components';
import { RED_500 } from 'store-library/src/styles';

export default class ErrorBoundary extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <OfflineMessage>Что-то пошло не так.</OfflineMessage>;
    }

    return this.props.children;
  }
}

const OfflineMessage = styled.h1`
  color: ${RED_500};
  padding-top: 36px;
  text-align: center;
`;
