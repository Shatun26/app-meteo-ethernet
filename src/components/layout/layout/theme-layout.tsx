import { themes } from 'constants/theme';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialTheme } from 'redux/theme';
import { getTheme } from 'redux/theme/selectors';
import { ThemeProvider } from 'styled-components';
import { SkeletonTheme } from 'react-loading-skeleton';

interface ThemeLayoutProps {
  children: React.ReactNode;
}
export const ThemeLayout: FC<ThemeLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const theme = themes[useSelector(getTheme)];

  useEffect(() => {
    dispatch(getInitialTheme());
  }, []);
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
