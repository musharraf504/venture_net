import styled from 'styled-components';

const HeaderLogo = () => {
  return (
    <Logo>VentureNet</Logo>
  )
}

const Logo = styled.h1`
  font-weight: normal;
  font-size: 40px;
  margin-left: 11px;
  font-weight: 600;
  font-family: 'montserrat';
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 30px;
  /* letter-spacing: 3px; */
  border: 1px solid #1B1A55;
  cursor: pointer;
  transition: all 0.3s;
  &:hover{
    background-color: #fff;
    box-shadow: -5px 5px #1B1A55;
    /* margin-left: 10px; */
    color: #1B1A55;
  }
`

export default HeaderLogo