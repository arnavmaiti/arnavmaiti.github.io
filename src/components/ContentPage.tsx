import Grid from "@mui/material/Grid2";
import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { Blogs } from "../content/blogs";
import { Card, CardContent, CardHeader, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import { CalendarMonth, Info, LocationOn, NotInterested } from "@mui/icons-material";
import { Categories } from "../content/types";

export const ContentPage = (): ReactElement => {

  const params = useParams();

  // Get content
  const content = Blogs.find((blog) => blog.id === params.id);
  const fullContent = content ? content.content.split('\n') : [];

  return (
    <Grid container spacing={5}>
      {!content && (
        <Grid size={12} sx={{ mt: 10 }}>
          <Typography variant="body2" color="primary.main" textAlign="center"><NotInterested sx={{ fontSize: 70 }} /></Typography>
          <Typography variant="h2" color="primary.main" textAlign="center">Nothing here yet...</Typography>
          <Typography variant="h6" color="secondary.main" textAlign="center">Please come back later.</Typography>
        </Grid>
      )}
      {content && (
        <>
          <Grid size={12}>
            <Card>
              <CardHeader 
                title={content.title}
                sx={{ textAlign: "center" }} 
              />
              <CardContent>
                <Typography 
                  variant="body2" 
                  color="secondary.main"
                >
                  <LocationOn fontSize="small" /> {content.place}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="secondary.main"
                  sx={{ mb: 5 }}
                >
                  <CalendarMonth fontSize="small" /> {content.date}
                </Typography>
                {content.category === Categories.BLOG && fullContent.map((item) => (
                  <Typography variant="body2">{item}</Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
          {content.images && 
            <ImageList variant="masonry" cols={2} gap={8}>
              {content.images.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle="@arnavmaiti"
                    actionIcon={
                      <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                      >
                        <Info />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          }
        </>
      )}
    </Grid>
  );
};