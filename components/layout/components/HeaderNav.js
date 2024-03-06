import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const HeaderNav = () => {
  const Router = useRouter();

  return (
    <HeaderNavWrapper>
      <Link passHref href={'/'}><HeaderNavLinks active={Router.pathname == "/" ? true : false} >
        Campaigns
      </HeaderNavLinks></Link>
      <Link passHref href={'/createcampaign'}><HeaderNavLinks active={Router.pathname == "/createcampaign" ? true : false} >
        Create Campaign
      </HeaderNavLinks></Link>
      <Link passHref href={'/dashboard'}><HeaderNavLinks active={Router.pathname == "/dashboard" ? true : false} >
        Dashboard
      </HeaderNavLinks></Link>
    </HeaderNavWrapper>
  )
}

const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgDiv};
  padding: 6px;
  height: 50%;
  border-radius: 10px;
  padding: 10px 0px;
  border: 1px solid #1B1A55;
  transition: all 0.3s;
  &:hover{
    background-color: #fff;
    box-shadow: -5px 5px #1B1A55;
    /* margin-left: 10px; */
    color: #1B1A55;
  }

  `

const HeaderNavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.active ? props.theme.bgSubDiv : props.theme.bgDiv };
  height: 100%;
  font-family: 'montserrat';
  margin: 5px;
  /* border-radius: 10px; */
  /* padding: 5px 10px 5px 10px; */
  padding: 18px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 15px;
  color: #1B1A55;
  text-decoration: none;
  
`

export default HeaderNav