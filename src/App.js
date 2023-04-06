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

let arr = [
  { id: 1, title: "Dağ1", par: "Açıklama 1" },
  { id: 2, title: "Dağ2", par: "Açıklama 2" },
  { id: 3, title: "Dağ3", par: "Açıklama 3" },
  { id: 4, title: "Dağ4", par: "Açıklama 4" },
];

//const kare = (sayi) => sayi * sayi;
const App = () => {
  const [title, setTitle] = useState("");
  const [paragraf, setParagraf] = useState("");
  const [list, setList] = useState(arr);
  const [lesson, setLesson] = useState([]);
  const click = () => {
    setTitle("");
    setParagraf("");
    const copyList = [...list];
    copyList.push({
      id: 5,
      title,
      par: paragraf,
    });
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
            <Card title={title} par={par} lesson={lesson} index={i} />{" "}
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
