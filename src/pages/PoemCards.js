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
import { poems as poemData } from "../assets/data/poems/poems";
import { poemCollections } from "../assets/data/poems/poemCollections";
import { useState, useEffect } from "react";

export default function Cards() {
  const [poems, setPoems] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    setPoems(poemData);
  }, []);

  function goToPoem(id) {
    navigate(`/poems/${id}`);
  }

  function filterCollection(collection) {
    setPoems(poemData.filter((poem) => poem.collection === collection));
  }

  return (
    <Container maxWidth="md">
      <Box>
        <h1 className="page-title" onClick={() => setPoems(poemData)}>
          some poems
        </h1>
      </Box>
      <ButtonGroup
        variant="text"
        sx={{ mb: "2em" }}
        aria-label="text small button group"
      >
        {poemCollections.map((item) => (
          <Button
            className={item.color}
            key={item.name}
            onClick={() => filterCollection(item.name)}
          >
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
