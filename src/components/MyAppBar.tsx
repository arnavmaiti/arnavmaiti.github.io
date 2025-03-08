import { AutoStories, Cottage, FaceSharp, PersonSharp, PhotoCamera } from "@mui/icons-material";
import { alpha, AppBar, Box, Button, Container, IconButton, styled, Toolbar, Tooltip } from "@mui/material";
import { ReactElement } from "react";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(10px)',
  backgroundColor: alpha(theme.palette.primary.main, 0.3),
  boxShadow: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
  padding: '8px 12px',
}));

export const MyAppBar = (): ReactElement => {

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)'
      }}
    >
      <Container>
        <StyledToolbar variant="dense">
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Home">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ ml: 0.5, mt: 1, mr: 4, mb: 1 }}
              >
                <Cottage />
              </IconButton>
            </Tooltip>
            <Button sx={{ color: 'inherit', mt: 0.3, ml: 2, mr: 2, fontSize: 16, textTransform: 'none' }} startIcon={<AutoStories />}>
              Blog
            </Button>
            <Button sx={{ color: 'inherit', mt: 0.3, ml: 2, mr: 2, fontSize: 16, textTransform: 'none' }} startIcon={<PhotoCamera />}>
              Gallery
            </Button>
            <Button sx={{ color: 'inherit', mt: 0.3, ml: 2, mr: 2, fontSize: 16, textTransform: 'none' }} startIcon={<PersonSharp />}>
              Portfolio
            </Button>
            <Button sx={{ color: 'inherit', mt: 0.3, ml: 2, mr: 2, fontSize: 16, textTransform: 'none' }} startIcon={<FaceSharp />}>
              About Me
            </Button>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};