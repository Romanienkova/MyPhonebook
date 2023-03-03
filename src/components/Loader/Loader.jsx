import { Oval } from 'react-loader-spinner';

import { Overlay } from './Loader.styled';

export const Loader = () => {
  return (
    <Overlay>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={5}
        color="green"
        secondaryColor="white"
      />
    </Overlay>
  );
};
