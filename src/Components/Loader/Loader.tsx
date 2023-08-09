import { Oval } from 'react-loader-spinner';

export const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Oval
      height={60}
      width={60}
      color="#000"
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#aaa"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </div>
);
