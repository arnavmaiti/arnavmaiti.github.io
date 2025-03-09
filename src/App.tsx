import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { colors, Container, createTheme, ThemeProvider } from '@mui/material';
import { MyAppBar } from './components/MyAppBar';
import { FooterButtons } from './components/FooterButtons';
import { LandingPage } from './components/LandingPage';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { ReactElement } from 'react';
import { BlogPage } from './components/BlogPage';
import { GalleryPage } from './components/GalleryPage';

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
    return (<div>Blog {params.page} Placeholder. Content Coming Soon...</div>);
  };

  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <ThemeProvider theme={theme} disableTransitionOnChange noSsr>
        <Container sx={{ height: '100vh' }}>
          <MyAppBar/>
          <Container sx={{ mt: 20 }}>
          <Routes>
            <Route path="" element={<LandingPage />} />
            <Route path="contents/blog/:page" element={<BlogPage />} />
            <Route path="contents/gallery/:page" element={<GalleryPage />} />
            <Route path="portfolio" element={<>Portfolio Placeholder. Content Coming Soon...</>} />
            <Route path="aboutme" element={<>About Me Placeholder. Content Coming Soon...</>} />
            <Route path="contents/:page" element={<Blog />} />
          </Routes>
          </Container>
          <FooterButtons />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};
