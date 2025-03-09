import { AirplaneTicket, Collections, OpenInNew, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Tooltip, Typography } from "@mui/material";
import { colors } from "@mui/material";
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

  const avatarColors = [
    colors.red[600], colors.pink[600], colors.purple[600], 
    colors.deepPurple[600], colors.indigo[600], colors.blue[600], 
    colors.lightBlue[600], colors.cyan[600], colors.teal[600], 
    colors.green[600], colors.lightGreen[600], colors.lime[600],
    colors.yellow[600], colors.amber[600], colors.orange[600],
    colors.deepOrange[600], colors.brown[600], colors.grey[600],
    colors.blueGrey[600]
  ];
  const pickedColor = avatarColors[Math.floor(Math.random() * avatarColors.length)];

  const pickedCategory = () => {
    switch (category) {
      case Categories.TRIPS:
        return <Tooltip title="Trips"><AirplaneTicket /></Tooltip>;
      case Categories.GALLERY:
        return <Tooltip title="Gallery"><Collections /></Tooltip>;
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
            <Avatar sx={{ bgcolor: pickedColor }} aria-label="recipe">
              {pickedCategory()}
            </Avatar>
          } 
          title={title}
          subheader={date}
          action={
            <Tooltip title="Open Blog" placement="left">
              <IconButton aria-label="View" onClick={() => { navigate(`blogs/${id}`); }}>
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