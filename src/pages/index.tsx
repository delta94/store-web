import React from 'react';
import styled from 'styled-components';
// import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
}

const Home = (props: Props) => {
  const { className } = props;
  // const { t } = useTranslation();

  return (
    <Wrapper className={className}>
      Hello next
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

// Home.getInitialProps = async appContext => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   console.log(appContext.ctx.req.headers);
//   return { ...appProps };
// };

export default React.memo(Home, areEqual);

const Wrapper = styled.div`
  color: white;
`;
