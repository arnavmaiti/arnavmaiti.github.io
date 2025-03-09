import Grid from "@mui/material/Grid2";
import { ReactElement } from "react";
import { BlogCard } from "./BlogCard";
import { Blogs } from "../content/blogs";
import { Contents } from "../content/types";

export const LandingPage = (): ReactElement => {

  // Recent contents
  const latestContents: Contents[] = Blogs.slice(-6).reverse();

  // TODO:
  // Add a small introduction section on top
  // Make the latest post section bottom of it with only 3 latest items

  return (
    <Grid container spacing={5}>
      {latestContents.map((content) => (
        <BlogCard {...content} />
      ))}
    </Grid>
  );
};