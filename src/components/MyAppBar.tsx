import { AutoStories, Cottage, FaceSharp, PersonSharp, PhotoCamera } from "@mui/icons-material";
import { AppBar, Box, Button, colors, Container, IconButton, styled, Toolbar, Tooltip } from "@mui/material";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backgroundColor: theme.palette.primary.main,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: "inherit",
  marginLeft: 16, 
  marginRight: 16, 
  fontSize: 16, 
  textTransform: 'none', 
  '&:hover': { 
    color: theme.palette.secondary.main 
  }
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "inherit",
  marginLeft: 0, 
  marginTop: 16,
  marginBottom: 16,
  marginRight: 32, 
  fontSize: 16, 
  textTransform: 'none', 
  '&:hover': { 
    color: colors.blueGrey[400] 
  }
}));

export const MyAppBar = (): ReactElement => {

  const navigate = useNavigate();

  return (
    <AppBar
      position="absolute"
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
              <StyledIconButton
                size="large"
                edge="start"
                aria-label="menu"
                onClick={() => navigate('')}
              >
                <Cottage />
              </StyledIconButton>
            </Tooltip>
            <StyledButton
              size="large" 
              startIcon={<AutoStories />}
              onClick={() => navigate('/contents/blog/1')}
            >
              Blog
            </StyledButton>
            <StyledButton 
              size="large" 
              startIcon={<PhotoCamera />}
              onClick={() => navigate('/contents/gallery/1')}
            >
              Gallery
            </StyledButton>
            <StyledButton 
              size="large" 
              startIcon={<PersonSharp />}
              onClick={() => navigate('/portfolio')}
            >
              Portfolio
            </StyledButton>
            <StyledButton 
              size="large" 
              startIcon={<FaceSharp />}
              onClick={() => navigate('/aboutme')}
            >
              About Me
            </StyledButton>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};