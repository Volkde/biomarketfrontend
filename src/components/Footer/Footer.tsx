import { links } from "./data.ts";
import { FaLeaf, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { 
  StyledFooter, 
  FooterContainer,
  FooterSection,
  FooterTitle,
  FooterLink,
  SocialContainer,
  SocialLink,
  LogoContainer,
  CopyrightText
} from "./styles.ts";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterSection>
          <LogoContainer>
            <FaLeaf size={24} />
            <span>FarmVibe</span>
          </LogoContainer>
          <CopyrightText>
            &copy; {currentYear} FarmVibe. All rights reserved.
          </CopyrightText>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          {links.map(({ text, path }) => (
            <FooterLink key={path} to={path}>
              {text}
            </FooterLink>
          ))}
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Categories</FooterTitle>
          <FooterLink to="/products?category=fruits">Fruits & Vegetables</FooterLink>
          <FooterLink to="/products?category=dairy">Dairy & Eggs</FooterLink>
          <FooterLink to="/products?category=bakery">Bakery</FooterLink>
          <FooterLink to="/products?category=meat">Meat & Fish</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Connect With Us</FooterTitle>
          <SocialContainer>
            <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} />
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </SocialLink>
          </SocialContainer>
        </FooterSection>
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;
