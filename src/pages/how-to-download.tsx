import React from 'react';
import HowToDownload from '~/components/HowToDownload';

interface Props {
  className?: string;
}

const HowTODownloadPage = () => (
  <HowToDownload />
);

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(HowTODownloadPage, areEqual);
