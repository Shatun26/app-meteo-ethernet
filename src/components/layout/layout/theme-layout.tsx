import { themes } from 'constants/theme';
import React, { FC, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialTheme } from 'redux/theme';
import { getTheme } from 'redux/theme/selectors';
import { ThemeProvider } from 'styled-components';

interface ThemeLayoutProps {
  children: React.ReactNode;
}
export const ThemeLayout: FC<ThemeLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const theme = themes[useSelector(getTheme)];

  useEffect(() => {
    dispatch(getInitialTheme());
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme
        baseColor={theme.sceletonLoading.bar.base}
        highlightColor={theme.sceletonLoading.thumb.base}
      >
        {children}
      </SkeletonTheme>
    </ThemeProvider>
  );
};
