import { ThreeCircles } from 'react-loader-spinner';

import { LoaderWrapper } from './LoaderSuspense.styled';

export const LoaderSuspense = () => {
  return (
    <LoaderWrapper>
      <ThreeCircles
        height="100"
        width="100"
        color="#3f51b5"
        wrapperStyle={{}}
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </LoaderWrapper>
  );
};
