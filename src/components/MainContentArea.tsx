import Grid from "@mui/material/Grid2";
import { ReactElement } from "react";
import { BlogCard } from "./BlogCard";
import { Container } from "@mui/material";
import { Blogs } from "../content/blogs";
import { Contents } from "../content/types";

export const MainContentArea = (): ReactElement => {

  // Recent contents
  const latestContents: Contents[] = Blogs.slice(-6);


  return (
    <Container sx={{ mt: 20 }}>
      <Grid container spacing={5}>
        {latestContents.map((content) => (
          <BlogCard {...content} />
        ))}
      </Grid>
    </Container>
  );
};