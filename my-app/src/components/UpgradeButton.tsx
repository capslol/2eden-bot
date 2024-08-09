import React from 'react';
import styled from 'styled-components';



const UpgradeButton: React.FC = () => {
    return <Button>UPGRADE</Button>;
};

export default UpgradeButton;

const Button = styled.button`
  width: 200px;
  padding: 10px;
  background-color: #00ff00;
  border: none;
  border-radius: 5px;
  color: #000;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
`;