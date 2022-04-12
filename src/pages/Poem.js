import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Box, Divider } from "@mui/material";
import { poems } from "../assets/data/poems/poems";

export default function Poem() {
  const [text, setText] = useState("");
  const [poem, setPoem] = useState({});
  let paramId = useParams().poemId;

  useEffect(() => {
    const poem = poems.find((item) => item.id === parseInt(paramId));
    setPoem(poem);

    async function getText() {
      let data = await fetch(poem.text)
        .then((response) => response.text())
        .then((text) => text);
      setText(data);
    }
    getText();
  }, [paramId]);

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
          </div>
          <Divider />
        </Container>
      ) : (
        ""
      )}
    </>
  );
}
