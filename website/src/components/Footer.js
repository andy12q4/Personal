import styled from 'styled-components';

const FooterWrapper = styled.footer`
position: fixed; // or use absolute if you want it to scroll with the content
bottom: 0;
left: 0;
right: 0;
background: transparent; // No background color
color: white;
z-index: 1000;
`;

const FooterList = styled.ul`
  list-style: none;
  display: flex;
  & > li:not(:last-child) {
    margin-right: 15px;
  }
`;

const Footer = () => {
    return (
        <FooterWrapper>
         
            <nav>
                <FooterList>
                  
                </FooterList>
            </nav>
        </FooterWrapper>
    );
};

export default Footer;
