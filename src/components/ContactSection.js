import React, { useState } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { FiUser, FiMail, FiBriefcase, FiMessageSquare } from 'react-icons/fi';

const ContactWrapper = styled.section`
  padding: 10rem 2rem;
  
  @media (max-width: 76.8rem) {
    padding: 8rem 1.5rem;
  }

  @media (max-width: 48rem) {
    padding: 6rem 1.2rem;
  }
`;

const ContactContainer = styled.div`
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(1.6rem) saturate(180%);
  -webkit-backdrop-filter: blur(1.6rem) saturate(180%);
  box-shadow: 
    0 0.8rem 3.2rem rgba(0, 0, 0, 0.06),
    0 0.2rem 0.8rem rgba(0, 0, 0, 0.02);
  padding: 8rem 4rem;
  border-radius: 2.4rem;
  max-width: 140rem;
  margin: 0 auto;
  text-align: center;
  
  @media (max-width: 96rem) {
    padding: 6rem 3rem;
  }
  
  @media (max-width: 76.8rem) {
    padding: 6rem 2rem;
  }
  
  @media (max-width: 48rem) {
    padding: 4rem 1.2rem;
    border-radius: 1.6rem;
  }
`;

const Header = styled.div`
  margin-bottom: 6rem;
  
  @media (max-width: 76.8rem) {
    margin-bottom: 4rem;
  }
`;

const Eyebrow = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #f93177;
  margin-bottom: 1.6rem;
  
  @media (max-width: 76.8rem) {
    font-size: 1.2rem;
  }
`;

const MainHeading = styled.h2`
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 1.1;
  color: #1e293b;
  margin-bottom: 2rem;
  
  @media (max-width: 96rem) {
    font-size: 4.2rem;
  }
  
  @media (max-width: 76.8rem) {
    font-size: 3.6rem;
  }
  
  @media (max-width: 48rem) {
    font-size: 2.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 60rem;
  margin: 0 auto;
  
  @media (max-width: 76.8rem) {
    font-size: 1.4rem;
    max-width: 50rem;
  }
`;

const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
  max-width: 80rem;
  margin: 0 auto;
  text-align: left;

  @media (min-width: 76.8rem) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem 3.2rem;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 76.8rem) {
    grid-column: ${props => (props.span2 ? 'span 2' : 'span 1')};
  }
`;

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 1rem;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputIcon = styled.div`
  position: absolute;
  top: ${props => props.textarea ? '2.4rem' : '50%'};
  left: 2rem;
  transform: ${props => props.textarea ? 'none' : 'translateY(-50%)'};
  color: #94a3b8;
  font-size: 1.8rem;
  pointer-events: none;
`;

const Input = styled.input`
  padding: 1.6rem 2rem 1.6rem 5rem;
  border-radius: 1.2rem;
  border: 1px solid rgb(196,196,196);
  background-color: #eaeaea;
  font-size: 1.6rem;
  color: #1e293b;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #1a6ebc;
    box-shadow: 0 0 0 4px rgba(26, 110, 188, 0.1);
  }
`;

const Textarea = styled.textarea`
  padding: 1.6rem 2rem 1.6rem 5rem;
  border-radius: 1.2rem;
  border: 1px solid rgb(196,196,196);
  background-color: #eaeaea;
  font-size: 1.6rem;
  color: #1e293b;
  transition: border-color 0.2s, box-shadow 0.2s;
  resize: vertical;
  min-height: 15rem;
  width: 100%;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #1a6ebc;
    box-shadow: 0 0 0 4px rgba(26, 110, 188, 0.1);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 76.8rem) {
    grid-column: span 2;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #00a5ff 0%, #0077cc 100%);
  color: #fff;
  border: none;
  padding: 1.6rem 3.2rem;
  border-radius: 999px;
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 24px 0 rgba(0, 165, 255, 0.25), 0 1.5px 0 #0077cc;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 25rem;

  &:hover {
    background: linear-gradient(135deg, #0094e6 0%, #005fa3 100%);
    box-shadow: 0 12px 32px 0 rgba(0, 165, 255, 0.35), 0 2px 0 #005fa3;
    transform: translateY(-2px);
  }
`;

const ContactSection = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    });
  };

  return (
    <ContactWrapper id="letsTalk">
      <ContactContainer>
        <Header>
          <Eyebrow>{t.contact.eyebrow}</Eyebrow>
          <MainHeading>{t.contact.title}</MainHeading>
          <Description>{t.contact.description}</Description>
        </Header>
        
        <FormWrapper onSubmit={handleSubmit}>
          <Field>
            <Label htmlFor="name">Full Name</Label>
            <InputWrapper>
              <InputIcon><FiUser /></InputIcon>
              <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="e.g. John Doe" />
            </InputWrapper>
          </Field>
          <Field>
            <Label htmlFor="email">Email Address</Label>
            <InputWrapper>
              <InputIcon><FiMail /></InputIcon>
              <Input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="e.g. john.doe@example.com" />
            </InputWrapper>
          </Field>
          <Field span2>
            <Label htmlFor="company">Company (Optional)</Label>
            <InputWrapper>
              <InputIcon><FiBriefcase /></InputIcon>
              <Input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} placeholder="e.g. Acme Inc." />
            </InputWrapper>
          </Field>
          <Field span2>
            <Label htmlFor="message">Your Message</Label>
            <InputWrapper>
              <InputIcon textarea><FiMessageSquare /></InputIcon>
              <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required placeholder="How can we help you?"></Textarea>
            </InputWrapper>
          </Field>
          <ButtonWrapper>
            <Button type="submit">Send Message</Button>
          </ButtonWrapper>
        </FormWrapper>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default ContactSection; 