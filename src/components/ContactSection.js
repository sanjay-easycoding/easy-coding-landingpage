import React, { useState } from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  padding: 10rem 2rem; /* 100px 20px */
  background: rgb(245, 247, 251);
  
  @media (max-width: 76.8rem) { /* 768px */
    padding: 8rem 1.5rem; /* 80px 15px */
  }

  @media (max-width: 48rem) {
    padding: 6rem 1.2rem;
  }
`;

const ContactContainer = styled.div`
  background: #1e293b; /* Dark background */
  padding: 8rem 4rem; /* 80px 40px */
  border-radius: 2.4rem; /* 24px */
  max-width: 140rem; /* 1400px */
  margin: 0 auto;
  text-align: center;
  
  @media (max-width: 96rem) { /* 960px */
    padding: 6rem 3rem; /* 60px 30px */
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    padding: 6rem 2rem; /* 60px 20px */
  }
  
  @media (max-width: 48rem) { /* 480px */
    padding: 4rem 1.2rem; /* 40px 12px */
    border-radius: 1.6rem; /* 16px */
  }
`;

const Header = styled.div`
  margin-bottom: 6rem; /* 60px */
  
  @media (max-width: 76.8rem) { /* 768px */
    margin-bottom: 4rem; /* 40px */
  }
`;

const Eyebrow = styled.p`
  font-size: 1.3rem; /* 13px */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #e11d48;
  margin-bottom: 1.6rem; /* 16px */
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 1.2rem; /* 12px */
  }
`;

const MainHeading = styled.h2`
  font-size: 4.8rem; /* 48px */
  font-weight: 700;
  line-height: 1.1;
  color: white;
  margin-bottom: 2rem; /* 20px */
  
  @media (max-width: 96rem) { /* 960px */
    font-size: 4.2rem; /* 42px */
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 3.6rem; /* 36px */
  }
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 2.8rem; /* 28px */
  }
`;

const Description = styled.p`
  font-size: 1.6rem; /* 16px */
  line-height: 1.6;
  color: #cbd5e1;
  max-width: 60rem; /* 600px */
  margin: 0 auto;
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 1.4rem; /* 14px */
    max-width: 50rem; /* 500px */
  }
`;

const BookingCard = styled.div`
  background: #2d3748;
  border-radius: 1.2rem; /* 12px */
  padding: 2.4rem; /* 24px */
  max-width: 40rem; /* 400px */
  margin: 0 auto 8rem auto;
  width: 100%;
  
  @media (max-width: 76.8rem) { /* 768px */
    margin-bottom: 6rem;
    max-width: 36rem; /* 360px */
    padding: 2rem; /* 20px */
  }

  @media (max-width: 48rem) { /* 480px */
    max-width: 100%;
    padding: 1.6rem;
    margin-bottom: 4rem;
  }
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem; /* 20px */
  padding: 0 0.4rem; /* 0 4px */

  @media (max-width: 48rem) {
    padding: 0;
    margin-bottom: 1.6rem;
  }
`;

const MonthYear = styled.h3`
  font-size: 1.6rem; /* 16px */
  font-weight: 500;
  color: #cbd5e1;
  margin: 0;
`;

const CalendarNavButtons = styled.div`
  display: flex;
  gap: 0.8rem; /* 8px */
`;

const CalendarNavButton = styled.button`
  background: transparent;
  border: none;
  color: #94a3b8;
  font-size: 1.6rem; /* 16px */
  cursor: pointer;
  padding: 0.4rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #cbd5e1;
  }
`;

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.4rem;
  margin-bottom: 1rem; /* 10px */

  @media (max-width: 48rem) {
    gap: 0.2rem;
  }
`;

const WeekDay = styled.div`
  font-size: 1.2rem; /* 12px */
  font-weight: 500;
  color: #64748b;
  text-align: center;
  padding: 0.8rem 0; /* 8px 0 */

  @media (max-width: 48rem) {
    font-size: 1.1rem;
    padding: 0.6rem 0;
  }
`;

const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.4rem;
  margin-bottom: 3rem; /* 30px */

  @media (max-width: 48rem) {
    gap: 0.2rem;
    margin-bottom: 2rem;
  }
`;

const CalendarDay = styled.button`
  background: ${props => props.isSelected ? '#ef4444' : 'transparent'};
  border: none;
  border-radius: 0.6rem; /* 6px */
  color: ${props => props.isSelected ? 'white' : props.isDisabled ? '#475569' : '#cbd5e1'};
  font-size: 1.4rem; /* 14px */
  font-weight: 500;
  padding: 1rem; /* 10px */
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  aspect-ratio: 1;
  
  &:hover {
    background: ${props => props.isDisabled ? 'transparent' : props.isSelected ? '#dc2626' : '#475569'};
  }

  @media (max-width: 48rem) {
    font-size: 1.3rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
  }

  @media (max-width: 36rem) {
    font-size: 1.2rem;
    padding: 0.6rem;
  }
`;

const TimeSlotSection = styled.div`
  margin-top: 2rem;
`;

const TimeSlotHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem; /* 16px */

  @media (max-width: 48rem) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const DateLabel = styled.h4`
  font-size: 1.4rem; /* 14px */
  font-weight: 500;
  color: #cbd5e1;
  margin: 0;
`;

const TimeFormatToggle = styled.div`
  display: flex;
  gap: 0.8rem; /* 8px */

  @media (max-width: 48rem) {
    width: 100%;
    justify-content: flex-end;
  }
`;

const ToggleButton = styled.button`
  background: ${props => props.isActive ? '#4b5563' : 'transparent'};
  border: 0.1rem solid #4b5563;
  border-radius: 0.4rem; /* 4px */
  color: #cbd5e1;
  font-size: 1.2rem; /* 12px */
  font-weight: 500;
  padding: 0.4rem 0.8rem; /* 4px 8px */
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #4b5563;
  }
`;

const TimeSlotList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem; /* 8px */

  @media (max-width: 48rem) {
    gap: 0.6rem;
  }
`;

const TimeSlot = styled.button`
  background: transparent;
  border: 0.1rem solid #475569;
  border-radius: 0.6rem; /* 6px */
  color: #cbd5e1;
  font-size: 1.4rem; /* 14px */
  font-weight: 500;
  padding: 1.2rem; /* 12px */
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  width: 100%;
  
  &:hover {
    background: #374151;
    border-color: #6b7280;
  }

  @media (max-width: 48rem) {
    font-size: 1.3rem;
    padding: 1rem;
  }
`;

const OldSchoolSection = styled.div`
  margin-bottom: 6rem; /* 60px */

  @media (max-width: 48rem) {
    margin-bottom: 4rem;
  }
`;

const OldSchoolHeading = styled.h3`
  font-size: 2.4rem; /* 24px */
  font-weight: 600;
  color: white;
  margin-bottom: 1.6rem; /* 16px */
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 2rem; /* 20px */
  }
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem; /* 40px */
  
  @media (max-width: 48rem) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ContactItem = styled.a`


  display: flex;
  align-items: center;
  gap: 1rem; /* 10px */
  color: #e11d48;
  text-decoration: none;
     font-size: 1.2rem;
letter-spacing: 0.3em;
  font-weight: 600;
  transition: color 0.3s ease;
  
  &:hover {
    color: #f43f5e;
  }
  
  &::before {
    content: '${props => props.icon}';
    font-size: 2rem; /* 20px */
  }
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 1.4rem; /* 14px */
  }
`;

const CompanyLogos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem; /* 30px */
  flex-wrap: wrap;
  opacity: 0.6;
  
  @media (max-width: 48rem) { /* 480px */
    gap: 2rem; /* 20px */
  }
`;

const CompanyLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem; /* 8px */
  color: #94a3b8;
  font-size: 1.4rem; /* 14px */
  font-weight: 600;
  
  &::before {
    content: '${props => props.icon}';
    font-size: 2.4rem; /* 24px */
  }
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 1.2rem; /* 12px */
    
    &::before {
      font-size: 2rem; /* 20px */
    }
  }
`;

const ContactGrid = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  
  @media (max-width: 76.8rem) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: 48rem) {
    padding: 0;
    max-width: 100%;
  }
`;

const ContactForm = styled.form`
  background: #2d3748;
  border-radius: 1.2rem;
  padding: 4rem 3rem;
  margin: 6rem 0 8rem 0;
  width: 100%;
  
  @media (max-width: 76.8rem) {
    padding: 3rem 2rem;
  }

  @media (max-width: 48rem) {
    padding: 2rem 1.6rem;
    margin: 4rem 0 6rem 0;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 2.4rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 48rem) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
    margin-bottom: 2rem;
  }
`;

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  color: #cbd5e1;
  width: 14rem;
  flex-shrink: 0;
  text-align: left;
  
  @media (max-width: 48rem) {
    width: 100%;
    font-size: 1.3rem;
  }
`;

const InputWrapper = styled.div`
  flex: 1;
  width: 100%;
`;

const FormTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 3rem;
  text-align: center;
`;

// Special case for the message input group to align with text area
const MessageInputGroup = styled(InputGroup)`
  align-items: flex-start;
  
  ${Label} {
    margin-top: 1.2rem;
  }
  
  @media (max-width: 48rem) {
    ${Label} {
      margin-top: 0;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  background: #1e293b;
  border: 1px solid #475569;
  border-radius: 0.6rem;
  color: white;
  font-size: 1.4rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #e11d48;
    box-shadow: 0 0 0 2px rgba(225, 29, 72, 0.2);
  }
  
  &::placeholder {
    color: #64748b;
  }

  @media (max-width: 48rem) {
    font-size: 1.3rem;
    padding: 1rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1.2rem;
  background: #1e293b;
  border: 1px solid #475569;
  border-radius: 0.6rem;
  color: white;
  font-size: 1.4rem;
  min-height: 12rem;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #e11d48;
    box-shadow: 0 0 0 2px rgba(225, 29, 72, 0.2);
  }
  
  &::placeholder {
    color: #64748b;
  }

  @media (max-width: 48rem) {
    font-size: 1.3rem;
    padding: 1rem;
    min-height: 10rem;
  }
`;

const StepButton = styled.button`
  background: ${props => props.variant === 'back' ? 'transparent' : '#e11d48'};
  color: ${props => props.variant === 'back' ? '#cbd5e1' : 'white'};
  border: ${props => props.variant === 'back' ? '1px solid #475569' : 'none'};
  padding: 1.4rem 2.8rem;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  
  &:hover {
    background: ${props => props.variant === 'back' ? 'rgba(203, 213, 225, 0.1)' : '#be185d'};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 48rem) {
    padding: 1.2rem 2rem;
    font-size: 1.3rem;
    margin-top: 1.6rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-top: 3rem;

  @media (max-width: 48rem) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ContactSection = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeFormat, setTimeFormat] = useState('12h');
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const timeSlots = [
    { time12: '10:00 AM', time24: '10:00' },
    { time12: '2:00 PM', time24: '14:00' },
    { time12: '4:00 PM', time24: '16:00' }
  ];

  // Generate calendar days for the current month
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    const today = new Date();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      days.push({ day: null, isDisabled: true });
    }
    
    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isBeforeToday = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      
      days.push({
        day: day,
        isSelected: selectedDate === day,
        isToday: day === today.getDate() && 
                 month === today.getMonth() && 
                 year === today.getFullYear(),
        isDisabled: isBeforeToday
      });
    }
    
    // Add empty cells for remaining days to complete the grid
    const totalCells = Math.ceil((startingDay + daysInMonth) / 7) * 7;
    for (let i = days.length; i < totalCells; i++) {
      days.push({ day: null, isDisabled: true });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();

  const handlePrevMonth = () => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev.getFullYear(), prev.getMonth() - 1);
      // Don't allow going before current month
      if (newDate < new Date(new Date().getFullYear(), new Date().getMonth(), 1)) {
        return prev;
      }
      return newDate;
    });
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
    setSelectedDate(null);
  };

  const formatMonth = (date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  const handleDateSelect = (dayObj) => {
    if (!dayObj.isDisabled && dayObj.day) {
      setSelectedDate(dayObj.day);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    console.log('Selected Date:', selectedDate);
    console.log('Selected Time:', selectedTime);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setStep(1);
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <ContactWrapper id="letsTalk">
      <ContactContainer>
        <Header>
          <Eyebrow>LET'S TALK</Eyebrow>
          <MainHeading>Book a call with us!</MainHeading>
          <Description>
            {step === 1 
              ? "Choose your preferred date and time for a FREE discovery call."
              : "Please provide your details and we'll confirm your booking."}
          </Description>
        </Header>

        <ContactGrid>
          {step === 1 ? (
            <>
              <BookingCard>
                <CalendarHeader>
                  <MonthYear>{formatMonth(currentMonth)}</MonthYear>
                  <CalendarNavButtons>
                    <CalendarNavButton onClick={handlePrevMonth}>‹</CalendarNavButton>
                    <CalendarNavButton onClick={handleNextMonth}>›</CalendarNavButton>
                  </CalendarNavButtons>
                </CalendarHeader>
                
                <WeekDays>
                  {weekDays.map((day) => (
                    <WeekDay key={day}>{day}</WeekDay>
                  ))}
                </WeekDays>
                
                <CalendarDays>
                  {calendarDays.map((dayObj, index) => (
                    <CalendarDay
                      key={index}
                      isSelected={dayObj.isSelected}
                      isToday={dayObj.isToday}
                      isDisabled={dayObj.isDisabled}
                      onClick={() => handleDateSelect(dayObj)}
                    >
                      {dayObj.day}
                    </CalendarDay>
                  ))}
                </CalendarDays>

                <TimeSlotSection>
                  <TimeSlotHeader>
                    <DateLabel>
                      {selectedDate ? `${currentMonth.toLocaleString('default', { month: 'short' })} ${selectedDate}` : 'Select a date'}
                    </DateLabel>
                    <TimeFormatToggle>
                      <ToggleButton 
                        isActive={timeFormat === '12h'}
                        onClick={() => setTimeFormat('12h')}
                      >
                        12h
                      </ToggleButton>
                      <ToggleButton 
                        isActive={timeFormat === '24h'}
                        onClick={() => setTimeFormat('24h')}
                      >
                        24h
                      </ToggleButton>
                    </TimeFormatToggle>
                  </TimeSlotHeader>
                  
                  <TimeSlotList>
                    {timeSlots.map((slot) => (
                      <TimeSlot
                        key={slot.time12}
                        isSelected={selectedTime === slot.time12}
                        onClick={() => setSelectedTime(slot.time12)}
                      >
                        {timeFormat === '12h' ? slot.time12 : slot.time24}
                      </TimeSlot>
                    ))}
                  </TimeSlotList>
                </TimeSlotSection>

                <StepButton 
                  onClick={handleNext}
                  disabled={!selectedDate || !selectedTime}
                >
                  Next Step →
                </StepButton>
              </BookingCard>
            </>
          ) : (
            <ContactForm onSubmit={handleSubmit}>
              <FormTitle>Enter your details</FormTitle>
              
              <InputGroup>
                <Label htmlFor="name">Full Name</Label>
                <InputWrapper>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                </InputWrapper>
              </InputGroup>

              <InputGroup>
                <Label htmlFor="email">Email Address</Label>
                <InputWrapper>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                  />
                </InputWrapper>
              </InputGroup>

              <InputGroup>
                <Label htmlFor="phone">Phone Number</Label>
                <InputWrapper>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </InputWrapper>
              </InputGroup>

              <MessageInputGroup>
                <Label htmlFor="message">Message</Label>
                <InputWrapper>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    required
                  />
                </InputWrapper>
              </MessageInputGroup>

              <ButtonGroup>
                <StepButton type="button" variant="back" onClick={handleBack}>
                  ← Back
                </StepButton>
                <StepButton type="submit">
                  Confirm Booking
                </StepButton>
              </ButtonGroup>
            </ContactForm>
          )}
        </ContactGrid>

        <OldSchoolSection>
          <OldSchoolHeading>Prefer traditional contact methods?</OldSchoolHeading>
          <p style={{ color: '#cbd5e1', marginBottom: '2rem', fontSize: '1.4rem' }}>
            Feel free to reach out directly through email or phone
          </p>
          
          <ContactInfo>
            <ContactItem href="mailto:info@easy-coding.io" icon="📧">
              info@easy-coding.io
            </ContactItem>
            <ContactItem href="tel:+359897879980" icon="📞">
              +359 897 87 99 80
            </ContactItem>
          </ContactInfo>
        </OldSchoolSection>

        <CompanyLogos>
          <CompanyLogo icon="🏢">Nova Memorial</CompanyLogo>
          <CompanyLogo icon="🚚">Fast Delivery</CompanyLogo>
          <CompanyLogo icon="⚖️">legalGenius</CompanyLogo>
          <CompanyLogo icon="🔷">LogoDesign</CompanyLogo>
          <CompanyLogo icon="🔷">legalGenius</CompanyLogo>
          <CompanyLogo icon="⚖️">legalGenius</CompanyLogo>
        </CompanyLogos>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default ContactSection; 