import React from 'react';

interface RootProps {
  name: string;
}
const Root: React.FC<RootProps> = ({ name }) => {
  return <div>{name} is mounted!</div>;
};

export default Root;