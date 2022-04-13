import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Box, Divider } from "@mui/material";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import { poems } from "../assets/data/poems/poems";
import PageNotFound from "../pages/PageNotFound";

export default function Poem() {
  const [text, setText] = useState("");
  const [poem, setPoem] = useState({});
  let navigate = useNavigate();
  let paramId = parseInt(useParams().poemId);
  let nextPoemExists =
    poems.find((poem) => poem.id === paramId + 1) !== undefined;

  useEffect(() => {
    const poem = poems.find((item) => item.id === paramId);
    setPoem(poem);

    async function getText() {
      let data = await fetch(poem.text)
        .then((response) => response.text())
        .then((text) => text);
      setText(data);
    }
    getText();
  }, [paramId]);

  function goToPrevPoem() {
    navigate(`/poems/${paramId - 1}`);
  }

  function goToNextPoem() {
    navigate(`/poems/${paramId + 1}`);
  }

  function goToAllPoems() {
    navigate(`/poems`);
  }

  return (
    <>
      {poem ? (
        <Container maxWidth="sm">
          <div key={poem.poemId}>
            <Box sx={{ mb: "2em" }}>
              <div className={`poem-title ${poem.color}`}>
                <h2>{poem.title}</h2>
                <h4 className="poem-collection">{poem.collection}</h4>
              </div>
            </Box>
            <div className="poem-text">{text}</div>
            <span className="nav-arrows">
              {paramId - 1 !== 0 ? (
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
