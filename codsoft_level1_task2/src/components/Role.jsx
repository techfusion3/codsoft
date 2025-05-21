import { TypeAnimation } from 'react-type-animation';

const Role = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          "MERN STACK DEVELOPER",
          1000,
          "DSA in Java",
          1000,
          "FULL STACK DEVELOPER",
          1000,
        ]}
        speed={10}
        repeat={Infinity}
        style={{ fontSize: '2.25rem' }}
      />
    </div>
  );
};

export default Role;