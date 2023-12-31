import React, { useState } from 'react';
import './style.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

function Header() {
  return (
    <header>
      <h1>Welcome!</h1>
    </header>
  );
}
function Nav() {
  return (
    <nav>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  );
}
function Article() {
  const [open, setOpen] = useState(false); //기본값 false, setOpen true시 open도 true
  return (
    <article>
      <h2>welcome</h2>
      hello Web! 이 웹은 react를 연습하기 위해 만든 것 입니다.
      <br />
      <ButtonGroup>
        <Button variant="outlined" onClick={()=>{
          setOpen(true); //Create버튼 클릭시 setOpen(useState) true로
        }}>Create</Button> 
        <Button variant="outlined">Update</Button>
      </ButtonGroup>
      <Button variant="outlined">Delete</Button>

      <Dialog open={open}>
        <DialogTitle>Create</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Hello create!!
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined">Create</Button>
          <Button variant="outlined" onClick={()=>{
            setOpen(false); //Cancle버튼 클릭시 setOpen(useState) false로
        }}>Cancle</Button>
        </DialogActions>
      </Dialog>
    </article>
  );
}
export default function App() {
  return (
    <Container fixed>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </Container>
  );
}
