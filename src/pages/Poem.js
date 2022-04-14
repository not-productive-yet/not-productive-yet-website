import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Box, Divider } from "@mui/material";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import { poems } from "../assets/data/poems/poems";
import PageNotFound from "../pages/PageNotFound";
import {
  formatCollectionParam,
  getCollectionFromParam,
} from "../helpers/paramHelpers";

export default function Poem() {
  const [poem, setPoem] = useState({});
  const [poemText, setPoemText] = useState("");
  const [collection, setCollection] = useState("");
  let navigate = useNavigate();
  let paramId = parseInt(useParams().poemId);
  let paramCollection = getCollectionFromParam(useParams());

  let nextPoemExists = checkNextPoemExists(paramCollection, paramId, poems);
  let prevPoemExists = checkPrevPoemExists(paramCollection, paramId, poems);

  useEffect(() => {
    const poem = findPoemById(poems, paramId);
    setPoem(poem);
    setCollection(paramCollection);

    async function getPoemText() {
      let data = await fetch(poem.text)
        .then((response) => response.text())
        .then((text) => text);
      setPoemText(data);
    }
    if (poem) getPoemText();
  }, [paramId, paramCollection]);

  function goToPrevPoem() {
    collection
      ? navigate(
          `/poem/${formatCollectionParam(
            collection
          )}/${findPrevPoemFromCollection(poems, paramId, collection)}`
        )
      : navigate(`/poem/${paramId - 1}`);
  }

  function goToNextPoem() {
    collection
      ? navigate(
          `/poem/${formatCollectionParam(
            collection
          )}/${findNextPoemFromCollection(poems, paramId, collection)}`
        )
      : navigate(`/poem/${paramId + 1}`);
  }

  function goToAllPoems() {
    navigate(`/poems`);
  }

  return (
    <>
      {checkPoemPageExists(poem, collection) ? (
        <Container maxWidth="sm">
          <div key={poem.poemId}>
            <Box>
              <div className={`poem-title ${poem.color}`}>
                <h2>{poem.title}</h2>
                <h4 className="poem-collection">{poem.collection}</h4>
              </div>
            </Box>
            <div className="poem-text">{poemText}</div>
            <span className="nav-arrows">
              {prevPoemExists ? (
                <ArrowLeftRoundedIcon
                  fontSize="large"
                  className="nav-arrow"
                  onClick={() => goToPrevPoem()}
                />
              ) : (
                ""
              )}
              {nextPoemExists ? (
                <ArrowRightRoundedIcon
                  fontSize="large"
                  className="nav-arrow"
                  onClick={() => goToNextPoem()}
                />
              ) : (
                ""
              )}
            </span>
          </div>
          <Divider />
          <div className="back-text" onClick={() => goToAllPoems()}>
            back to all poems
          </div>
        </Container>
      ) : (
        <PageNotFound />
      )}
    </>
  );
}

function checkNextPoemExists(paramCollection, paramId, poems) {
  return paramCollection
    ? findNextPoemFromCollection(poems, paramId, paramCollection) !== paramId
    : poems.find((poem) => poem.id === paramId + 1) !== undefined;
}

function checkPrevPoemExists(paramCollection, paramId, poems) {
  return paramCollection
    ? findPrevPoemFromCollection(poems, paramId, paramCollection) !== paramId
    : paramId - 1 !== 0;
}

function findNextPoemFromCollection(poems, id, collection) {
  let notFound = true;
  let searchId = id;

  while (notFound && searchId < poems.length - 1) {
    searchId++;
    var nextPoem = findPoemById(poems, searchId);
    if (nextPoem && nextPoem.collection === collection) notFound = false;
  }
  return notFound ? id : searchId;
}

function findPrevPoemFromCollection(poems, id, collection) {
  let notFound = true;
  let searchId = id;

  while (notFound && searchId > 0) {
    searchId--;
    var prevPoem = findPoemById(poems, searchId);
    if (prevPoem && prevPoem.collection === collection) notFound = false;
  }

  return notFound ? id : searchId;
}

function findPoemById(poems, searchId) {
  return poems.find((p) => p.id === searchId);
}

function checkPoemPageExists(poem, collection) {
  return collection ? poem && poem.collection : poem;
}
