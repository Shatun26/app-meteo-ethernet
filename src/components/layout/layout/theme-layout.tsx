import { themes } from 'constants/theme';
<<<<<<< Updated upstream
import React, { FC, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
=======
import { FC, useEffect } from 'react';
>>>>>>> Stashed changes
import { useDispatch, useSelector } from 'react-redux';
import { getInitialTheme } from 'redux/theme';
import { getTheme } from 'redux/theme/selectors';
import { ThemeProvider } from 'styled-components';
<<<<<<< Updated upstream
=======
import { SkeletonTheme } from 'react-loading-skeleton';
>>>>>>> Stashed changes

interface ThemeLayoutProps {
  children: React.ReactNode;
}
export const ThemeLayout: FC<ThemeLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const theme = themes[useSelector(getTheme)];

  useEffect(() => {
    dispatch(getInitialTheme());
<<<<<<< Updated upstream
  }, [dispatch]);
=======
  }, []);
>>>>>>> Stashed changes
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
