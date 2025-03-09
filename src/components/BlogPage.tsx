import Grid from "@mui/material/Grid2";
import { ReactElement } from "react";
import { BlogCard } from "./BlogCard";
import { Blogs } from "../content/blogs";
import { Categories, Contents } from "../content/types";
import { useNavigate, useParams } from "react-router-dom";
import { Pagination, Stack, Typography } from "@mui/material";
import { NotInterested } from "@mui/icons-material";

export const BlogPage = (): ReactElement => {

  const navigate = useNavigate();

  const params = useParams();
  // Page number
  const pageNumber = params.page ? parseInt(params.page) : 1;
  // Gallery contents
  const start = (pageNumber - 1) * 6;
  const end = start + 6;
  // Total
  const total = Blogs.filter((blog) => blog.category === Categories.BLOG).reverse();
  // Total count
  const paginationCount = Math.ceil(total.length / 6);
  // Current view
  const blogContents: Contents[] = total.slice(start, end);

  // Change handler
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    navigate(`/contents/blog/${value}`);
  };

  return (
    <>
      <Grid container spacing={5}>
        {blogContents.length === 0 && (
          <Grid size={12} sx={{ mt: 10 }}>
            <Typography variant="body2" color="primary.main" textAlign="center"><NotInterested sx={{ fontSize: 70 }} /></Typography>
            <Typography variant="h2" color="primary.main" textAlign="center">Nothing here yet...</Typography>
            <Typography variant="h6" color="secondary.main" textAlign="center">Please come back later.</Typography>
          </Grid>
        )}
        {blogContents.map((content) => (
          <BlogCard {...content} />
        ))}
      </Grid>
      <Stack alignItems="center" sx={{ mt: 10 }}>
        {blogContents.length > 0 && (
          <Pagination count={paginationCount} page={pageNumber} variant="outlined" onChange={handleChange} />
        )}
      </Stack>
    </>
  );
};