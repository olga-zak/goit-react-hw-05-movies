import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from 'components/LoaderSuspense/LoaderSuspense.styled';
export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderWrapper>
  );
};
