import {
  Stack,
  Container,
  Button,
  Checkbox,
  Input,
  Textarea,
  Grid,
} from "@mantine/core";
import "./App.css";
import Card from "./Components/Card/index";
import { useState } from "react";

//const kare = (sayi) => sayi * sayi;
const App = () => {
  const [title, setTitle] = useState("");
  const [paragraf, setParagraf] = useState("");
  const [list, setList] = useState([
    { id: 1, title: "Dağ1", par: "Açıklama 1" },
    { id: 2, title: "Dağ2", par: "Açıklama 2" },
    { id: 3, title: "Dağ3", par: "Açıklama 3" },
  ]);

  const click = () => {
    setTitle("");
    setParagraf("");
    const copyList = [
      ...list,
      {
        id: 5,
        title,
        par: paragraf,
      },
    ];

    setList(copyList);
  };
  return (
    <Container>
      <h1>Başlık</h1>
      <h2>Kart Oluşturma Programı </h2>
      <Stack>
        <Input.Wrapper label="Başlık">
          <Input
            placeholder="Başlık Yazınız"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Input.Wrapper>

        <Textarea
          placeholder="Paragraf yazınız"
          label="Paragraf"
          value={paragraf}
          onChange={(e) => setParagraf(e.target.value)}
          withAsterisk
        />
        <Button variant="outline" onClick={click}>
          Kart Oluştur
        </Button>
      </Stack>
      <h2> Kartlar</h2>
      <p>Başlangıç</p>
      <Grid>
        {list.map(({ title, par }, i) => (
          <Grid.Col span={4} key={`index ${i}`}>
            <Card
              title={title}
              par={par}
              i={i}
              click={() => {
                let copyList = [...list];
                copyList.splice(i, 1);
                setList(copyList);
              }}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
