import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Button,
  ButtonGroup,
  Box,
  Container,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { poems } from "../assets/data/poems/poems";
import { poemCollections } from "../assets/data/poems/poemCollections";

export default function Cards() {
  let navigate = useNavigate();

  function goToPoem(id) {
    navigate(`/poems/${id}`);
  }

  return (
    <Container maxWidth="md">
      <Box>
        <h1 className="page-title">some poems</h1>
      </Box>
      <ButtonGroup
        variant="text"
        sx={{ mb: "2em" }}
        aria-label="text small button group"
      >
        {poemCollections.map((item) => (
          <Button className={item.color} key={item.name}>
            {item.name}
          </Button>
        ))}
      </ButtonGroup>
      <ImageList sx={{ width: 850 }} cols={3} rowHeight={200}>
        {poems.map((item) => (
          <ImageListItem
            key={item.title}
            sx={{ width: 260, mb: "1em" }}
            onClick={() => goToPoem(item.id)}
            className={item.color}
          >
            <img src={item.img} alt={item.imgAlt} />
            <ImageListItemBar title={item.title} subtitle={item.collection} />
          </ImageListItem>
        ))}
      </ImageList>
      <Outlet />
    </Container>
  );
}
