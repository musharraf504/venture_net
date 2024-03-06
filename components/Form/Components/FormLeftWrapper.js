import styled from 'styled-components';
import { FormState } from '../Form';
import { useContext } from 'react';

const FormLeftWrapper = () => {
  const Handler = useContext(FormState);

  return (
    <FormLeft>
      <FormInput>
        <label>Campaign Title</label>
        <Input onChange={Handler.FormHandler} value={Handler.form.campaignTitle} placeholder='Campaign Title' name='campaignTitle'>
        </Input>
      </FormInput>
      <FormInput>
        <label>Story</label>
        <TextArea onChange={Handler.FormHandler} value={Handler.form.story} name="story" placeholder='Describe Your Story'>
        </TextArea>
      </FormInput>
    </FormLeft>
  )
}

const FormLeft = styled.div`
  width:48%;
  font-family:'montserrat';
  font-size: 20px;
`

const FormInput = styled.div`
  display:flex ;
  flex-direction:column;
  font-family:'poppins';
  margin-top:10px ;
  font-family:'montserrat';
`
const Input = styled.input`
  padding:15px;
  background-color:${(props) => props.theme.bgDiv} ;
  color:${(props) => props.theme.color} ;
  margin-top:4px;
  border:none ;
  border-radius:8px ;
  outline:none;
  font-size:20px;
  width:100% ;
  font-family:'montserrat';
  border: 1px solid #1B1A55;
  transition: all 0.3s;
  &:hover{
    background-color: #fff;
    box-shadow: -5px 5px #1B1A55;
    /* margin-left: 10px; */
    color: #1B1A55;
  }
`

const TextArea = styled.textarea`
  padding:15px;
  background-color:${(props) => props.theme.bgDiv} ;
  color:${(props) => props.theme.color} ;
  margin-top:4px;
  border:none;
  border-radius:10px ;
  outline:none;
  font-size:20px;
  max-width:100%;
  min-width:100%;
  overflow-x:hidden;
  min-height:200px ;
  font-family:'montserrat';
  border: 1px solid #1B1A55;
  transition: all 0.3s;
  &:hover{
    background-color: #fff;
    box-shadow: -5px 5px #1B1A55;
    /* margin-left: 10px; */
    color: #1B1A55;
  }
`

export default FormLeftWrapper;