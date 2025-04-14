import { FaFacebook, FaInstagram, FaLeaf, FaTwitter } from "react-icons/fa";
import { links } from "./data.ts";
import {
  CopyrightText,
  FooterContainer,
  FooterLink,
  FooterSection,
  FooterTitle,
  LogoContainer,
  SocialContainer,
  SocialLink,
  StyledFooter
} from "./styles.ts";

/**
 * Footer component with navigation links and social media icons
 */
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
          <FooterTitle>Connect With Us</FooterTitle>
          <SocialContainer>
            <SocialLink
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={20} />
            </SocialLink>
            <SocialLink
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={20} />
            </SocialLink>
            <SocialLink
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </SocialLink>
          </SocialContainer>
        </FooterSection>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
