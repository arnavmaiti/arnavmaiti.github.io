import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { colors, Container, createTheme, ThemeProvider } from '@mui/material';
import { MyAppBar } from './components/MyAppBar';
import { FooterButtons } from './components/FooterButtons';
import { MainContentArea } from './components/MainContentArea';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { ReactElement } from 'react';

export const App = () => {
  
  const theme = createTheme({
    palette: {
      primary: {
        main: colors.blueGrey[800]
      },
      secondary: {
        main: colors.blueGrey[400],
      },
    }
  });

  const Blog = (): ReactElement => {
    const params = useParams();
    return (<div>Blog {params.page}</div>);
  };

  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <ThemeProvider theme={theme} disableTransitionOnChange noSsr>
        <Container sx={{ height: '100vh' }}>
          <MyAppBar/>
          <Routes>
            <Route path="" element={<MainContentArea />} />
            <Route path="blogs" element={<>Blogs</>} />
            <Route path="blogs/:page" element={<Blog />} />
          </Routes>
          <FooterButtons />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};
