import { FC, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
<<<<<<< Updated upstream
import 'react-loading-skeleton/dist/skeleton.css';
=======
import 'react-loading-skeleton/dist/skeleton.css'
>>>>>>> Stashed changes
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { toggleTheme } from '../../redux/theme';

const Testblock = styled.div`
  background-color: ${({ theme }) => theme.homePage.bcg};
  padding: 50px;
  border: 1px solid red;
`;

const Dashboard: FC = () => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <Testblock>
      <button onClick={toggle}>Toggle theme</button>
    </Testblock>
  );
};
export default Dashboard;
