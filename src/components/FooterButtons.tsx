import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Container, IconButton, styled, Tooltip } from "@mui/material";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: 'hsla(220, 30%, 5%, 0.2) 3px 3px 3px 0px, hsla(220, 25%, 10%, 0.2) 3px 3px 3px -5px',
  }
}));

export const FooterButtons = () => {
  return (
    <Box position="fixed" 
      sx={{ display: 'flex', bottom: 0, right: 0, mr: 6, flexDirection: 'column' }}
    >
      <Container>
        <Tooltip title="Github" placement="left">
          <StyledIconButton
            aria-label="menu"
            sx={{ mt: 0, mb: 2 }}
          >
            <GitHub />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="LinkedIn" placement="left">
          <StyledIconButton
            aria-label="menu"
            sx={{ mt: 0, mb: 4 }}
          >
            <LinkedIn />
          </StyledIconButton>
        </Tooltip>
      </Container>
    </Box>
  );
};