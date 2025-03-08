import { GitHub, LinkedIn } from "@mui/icons-material";
import { alpha, Box, IconButton, styled, Tooltip } from "@mui/material";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  backdropFilter: 'blur(10px)',
  backgroundColor: alpha(theme.palette.primary.main, 0.3),
  boxShadow: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
  color: 'white',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.3),
    boxShadow: 'hsla(220, 30%, 5%, 0.07) 5px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 5px 8px 16px -5px',
  }
}));

export const FooterButtons = () => {
  return (
    <Box position="fixed" sx={{ display: 'flex', bottom: 0, right: 0, flexDirection: 'column' }}>
      <Tooltip title="Github" placement="left">
        <StyledIconButton
          aria-label="menu"
          sx={{ mt: 0, mr: 6, mb: 2 }}
        >
          <GitHub />
        </StyledIconButton>
      </Tooltip>
      <Tooltip title="LinkedIn" placement="left">
        <StyledIconButton
          aria-label="menu"
          sx={{ mt: 0, mr: 6, mb: 4 }}
        >
          <LinkedIn />
        </StyledIconButton>
      </Tooltip>
    </Box>
  );
};