import styled from 'styled-components';
import { FormState } from '../Form';
import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import {TailSpin} from 'react-loader-spinner'
import {create as IPFSHTTPClient} from 'ipfs-http-client';

const projectId = process.env.NEXT_PUBLIC_IPFS_ID
const projectSecret = process.env.NEXT_PUBLIC_IPFS_KEY
const auth = 'Basic ' + Buffer.from(projectId + ":" + projectSecret).toString('base64')

const client = IPFSHTTPClient({
  host:'ipfs.infura.io',
  port:5001,
  protocol: 'https',
  headers: {
    authorization: auth
  }
})

const FormRightWrapper = () => {
  const Handler = useContext(FormState);

  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const uploadFiles = async (e) => {
    e.preventDefault();
    setUploadLoading(true);

    if(Handler.form.story !== "") {
      try {
        const added = await client.add(Handler.form.story);
        Handler.setStoryUrl(added.path)
      } catch (error) {
        toast.warn(`Error Uploading Story`);
      }
    }


      if(Handler.image !== null) {
          try {
              const added = await client.add(Handler.image);
              Handler.setImageUrl(added.path)
          } catch (error) {
            toast.warn(`Error Uploading Image`);
          }
      }

      setUploadLoading(false);
      setUploaded(true);
      Handler.setUploaded(true);
      toast.success("Files Uploaded Sucessfully")
}

  return (
    <FormRight>
      <FormInput>
        <FormRow>
          <RowFirstInput>
            <label>Required Amount</label>
            <Input onChange={Handler.FormHandler} value={Handler.form.requiredAmount} name="requiredAmount" type={'number'} placeholder='Required Amount'></Input>
          </RowFirstInput>
          <RowSecondInput>
            <label>Choose Category</label>
            <Select onChange={Handler.FormHandler} value={Handler.form.category} name="category">
              <option>Education</option>
              <option>Health</option>
              <option>Animal</option>
            </Select>
          </RowSecondInput>
        </FormRow>
      </FormInput>
      {/* Image */}
      <FormInput>
        <label>Select Image</label>
        <Image alt="dapp" onChange={Handler.ImageHandler} type={'file'} accept='image/*'>
        </Image>
      </FormInput>
      {uploadLoading == true ? <Button><TailSpin color='#fff' height={20} /></Button> :
        uploaded == false ? 
        <Button onClick={uploadFiles}>
          Upload Files to IPFS
        </Button>
        : <Button style={{cursor: "no-drop"}}>Files uploaded Sucessfully</Button>
      }
      <Button onClick={Handler.startCampaign}>
        Start Campaign
      </Button>
    </FormRight>
  )
}

const FormRight = styled.div`
  width:45%;
  font-size: 20px;
`

const FormInput = styled.div`
  display:flex ;
  flex-direction:column;
  font-family:'montserrat';
  margin-top:10px ;
  font-size: 20px;
`

const FormRow = styled.div`
  display: flex;
  justify-content:space-between;
  width:100% ;
  font-family:'montserrat';
  /* font-size: 20px; */
`

const Input = styled.input`
  padding:15px;
  background-color:${(props) => props.theme.bgDiv} ;
  color:${(props) => props.theme.color} ;
  margin-top:4px;
  border:none ;
  border-radius:10px ;
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

const RowFirstInput = styled.div`
  display:flex ;
  flex-direction:column ;
  width:45% ;
  font-family:'montserrat';
  /* font-size: 20px; */
  
`

const RowSecondInput = styled.div`
  display:flex ;
  flex-direction:column ;
  width:45% ;
  font-family:'montserrat';
`

const Select = styled.select`
  padding:15px;
  background-color:${(props) => props.theme.bgDiv} ;
  color:${(props) => props.theme.color} ;
  margin-top:4px;
  border:none ;
  border-radius:10px ;
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

const Image = styled.input`
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
    cursor: pointer;
  }

  &::-webkit-file-upload-button {
    padding: 15px ;
    background-color: ${(props) => props.theme.bgSubDiv} ;
    color: ${(props) => props.theme.color} ;
    outline:none ;
    border:none ;
    font-weight:bold ;
    font-family:'montserrat';
    cursor: pointer;
  }  
`

const Button = styled.button`
  display: flex;
  justify-content:center;
  width:100% ;
  padding:15px ;
  color:#fff ;
  background-color:#1B1A55 ;
  /* background-image:
      linear-gradient(180deg, #00b712 0%, #5aff15 80%) ; */
  border:none;
  margin-top:30px ;
  cursor: pointer;
  font-weight:bold ;
  font-size:20px ;
  font-family:'montserrat';
  border-radius: 10px;
  border: 1px solid #1B1A55;
  transition: all 0.3s;
  &:hover{
    background-color: #fff;
    box-shadow: -5px 5px #1B1A55;
    /* margin-left: 10px; */
    color: #1B1A55;
  }
  
`

export default FormRightWrapper