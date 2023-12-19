import React, { useRef } from "react";
import styled from "styled-components";
import InputMask from "react-input-mask";

const FormContainer = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius:5px;
`

const InputArea = styled.div `
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 150px;
    padding: 0px;
    border; 1px solid #bbb;
    border-radius: 5px;
    height; 40px;
`

const Label = styled.label`
    font-size: 14px;
`

const Button = styled.button`
    font-weight: bold;
    cursor:pointer;
    border-radius:5px;
    border-none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
    margin-top: 5px;
    padding: 5px;
    &:hover {
        background-color: black;
    }
`
//onEdit é uma função que vai ser utilizada 
const Form = ({onEdit}) =>{
    const ref = useRef()
    return(
        <FormContainer ref={ref}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome"></Input>
            </InputArea>
            <InputArea>
                <Label>Email</Label>
                <Input name="email" type="email"></Input>
            </InputArea>
            <InputArea>
                <Label>Telefone</Label>
                <InputMask mask="(99)99999-9999" maskChar="_" name="fone">
                    {(inputProps) => <Input {...inputProps} />}
                </InputMask>
            </InputArea>
            <InputArea>
                <Label>Data de Nascimento</Label>
                <Input name="data-nasc" type="date"></Input>
            </InputArea>
            <Button>Salvar</Button>
        </FormContainer>
    )
}

export default Form