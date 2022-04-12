import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mb: "2em" }}>
        <h3>nothing here</h3>
        <Link to="/">back to homepage</Link>
      </Box>
    </Container>
  );
}
