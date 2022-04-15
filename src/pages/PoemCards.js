import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Button,
  ButtonGroup,
  Box,
  Container,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { poems as poemData } from "../assets/data/poems/poems";
import { poemCollections } from "../assets/data/poems/poemCollections";
import {
  formatCollectionParam,
  getCollectionFromParam,
} from "../helpers/paramHelpers";

export default function Cards() {
  const [poems, setPoems] = useState([]);
  const [collection, setCollection] = useState("");
  let navigate = useNavigate();
  let paramCollection = getCollectionFromParam(useParams());

  useEffect(() => {
    paramCollection
      ? setPoems(poemData.filter((poem) => poem.collection === paramCollection))
      : setPoems(poemData);

    setCollection(paramCollection);
  }, [paramCollection]);

  function goToPoems() {
    navigate(`/poems`);
  }

  function goToPoem(id) {
    collection
      ? navigate(`/poem/${formatCollectionParam(collection)}/${id}`)
      : navigate(`/poem/${id}`);
  }

  function goToCollection(collection) {
    navigate(`/poems/${formatCollectionParam(collection)}`);
  }

  return (
    <Container fixed sx={{ ml: 2 }}>
      <Box>
        <h1 className="page-title" onClick={goToPoems}>
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
            className={`${item.color} ${
              collection === item.name && "selected"
            }`}
            key={item.name}
            onClick={() => goToCollection(item.name)}
          >
            {item.name}
          </Button>
        ))}
      </ButtonGroup>
      <ImageList>
        {poems.map((item) => (
          <ImageListItem
            key={item.title}
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
