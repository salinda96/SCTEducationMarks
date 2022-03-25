import React, { useEffect } from 'react'
import styled from 'styled-components';

const Container = styled.div`
   display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  background-size: cover;
  background-position: center;
`;

const Form = styled.div`
  background-color: white;
    padding: 0px 60px;
    border-radius: 10px;
`;
const Wrapper = styled.div`
  flex-direction: column;
`;

const Topic = styled.h2`
   color: rgb(77, 1, 77);
    text-align: center;
    margin-bottom: 10px;
`;
const FormInput = styled.div`
`;

const Button = styled.button`
    width: 100%;
    height: 50px;
    padding: 10px;
    border: none;
    background-color: rebeccapurple;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    margin-top: 15px;
    margin-bottom: 30px;
`;

const AddNew = () => {

    useEffect(()=>{
        console.log("first")
    });

  return (
    <Container>
      <Form>
        <Wrapper>
          <Topic> Student Marks</Topic>
          <FormInput></FormInput>
          <Button>Submit</Button>
          </Wrapper>
      </Form>
    </Container>
  )
}

export default AddNew