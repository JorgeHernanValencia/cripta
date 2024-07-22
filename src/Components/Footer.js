import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: black;
  color: yellow;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const CenterDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListItem = styled.li`
  list-style: none;
  &:hover {
    color: orange;
  }
`;

const IconLink = styled.a`
  color: yellow;
  font-size: 24px;
  &:hover {
    color: orange;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LeftDiv>
        <ul>
          <ListItem><a href="https://fad.com.co/fad.com/info.php">Sobre nosotros</a></ListItem>
          <ListItem><a href="https://fad.com.co/apps/">Otras aplicaciones</a></ListItem>
        </ul>
      </LeftDiv>
      <CenterDiv>
        <IconLink href="https://web.facebook.com/FabricaFAD/?locale=es_LA&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </IconLink>
        <IconLink href="https://wa.me/573196588760" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </IconLink>
      </CenterDiv>
      <RightDiv>
        <p>WhatsApp: 3196588760</p>
        <Logo src="https://fad.com.co/fad.com/img/fad.png" alt="Logo" />
      </RightDiv>
    </FooterContainer>
  );
};

export default Footer;
