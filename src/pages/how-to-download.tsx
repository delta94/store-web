import React from 'react';
import HowToDownload from '~/components/HowToDownload';

interface Props {
  className?: string;
}

const HowTODownloadPage = () => (
  <HowToDownload />
);

const areEqual = () => true;

export default React.memo(HowTODownloadPage, areEqual);
