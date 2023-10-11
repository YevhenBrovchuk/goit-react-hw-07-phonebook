import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{ position: 'fixed', top: '38%', left: '48%' }}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#ffff00"
    />
  );
};
