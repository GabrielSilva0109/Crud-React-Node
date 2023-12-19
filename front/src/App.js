import GlobalStyle from "./styles/global";
import styled from 'styled-components'
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import FormContainer from "./components/Form"
import Grid from "./components/Grid";
import { useState } from 'react'
import axios from 'axios'

const Container = styled.div `
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

`

const Title = styled.h2``


function App() {
  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800")
      setUsers(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)))
    } catch (error) {
      toast.error(error)
    }
  }
  
  return (
    <>
    <Container>
      <Title>Usuários</Title>
    </Container>
    <FormContainer></FormContainer>
    <Grid></Grid>
    <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;