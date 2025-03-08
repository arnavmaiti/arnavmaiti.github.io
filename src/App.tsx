import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import { MyAppBar } from './components/MyAppBar';
import { FooterButtons } from './components/FooterButtons';

export const App = () => {
  
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange noSsr>
      <Container sx={{ height: '100vh', m: 0, p: '0 !important' }}>
        <MyAppBar/>
        <FooterButtons />
      </Container>
    </ThemeProvider>
  );
};
