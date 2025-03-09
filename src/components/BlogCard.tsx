import { AutoStories, OpenInNew, PhotoCamera, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Tooltip, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ReactElement } from "react";
import { Categories, Contents } from "../content/types";
import { useNavigate } from "react-router-dom";

export const BlogCard = ({
  id,
  title,
  category,
  date,
  content,
  thumbSrc
}: Contents): ReactElement => {

  const pickedCategory = () => {
    switch (category) {
      case Categories.BLOG:
        return <Tooltip title="Blog"><AutoStories /></Tooltip>;
      case Categories.GALLERY:
        return <Tooltip title="Gallery"><PhotoCamera /></Tooltip>;
      default:
        return title.charAt(0).toUpperCase();
    }
  };

  const navigate = useNavigate();

  return (
    <Grid size={4}>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" sx={{ backgroundColor: 'secondary.main' }}>
              {pickedCategory()}
            </Avatar>
          } 
          title={title}
          subheader={date}
          action={
            <Tooltip title="Open" placement="left">
              <IconButton aria-label="View" onClick={() => { navigate(`contents/${id}`); }}>
                <OpenInNew />
              </IconButton>
            </Tooltip>
          }
        />
        <CardMedia
          component="img"
          height="194"
          image={thumbSrc}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>{content.slice(0, 160)}...</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="Share" placement="left">
            <IconButton aria-label="share" sx={{ marginLeft: 'auto' }}>
              <Share />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Grid>
  );
};