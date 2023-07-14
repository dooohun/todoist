import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`

export const ContentInput = styled.input`
  border: none;
  height: 23px;
  &:focus {
    outline: none;
  }
`

export const DescriptionInput = styled.textarea`
  border: none;
  height: auto;
  resize: vertical;
  &:focus{
    outline: none;
  }
`
export const TodosContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 70vh;
  box-shadow: 2px 3px 5px 0px black;
  width: 800px;
  margin-top: 10px;
  overflow-wrap: break-word;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
`

export const TodoContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const TodoContent = styled.div`
  display: flex;
  align-items: center;
`

export const ContentTitle = styled.h2`
  margin: 2px;
`
export const ContentDescription = styled.p`
  margin: 5px;
`

export const DeleteImg = styled.img`
  height: 30px;
  width: 30px;
  margin: 2px;
`