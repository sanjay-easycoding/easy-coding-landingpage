import React, { useState } from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  padding: 10rem 2rem; /* 100px 20px */
  background: rgb(245, 247, 251);
  
  @media (max-width: 76.8rem) { /* 768px */
    padding: 8rem 1.5rem; /* 80px 15px */
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
    padding: 4rem 1.5rem; /* 40px 15px */
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
  
  @media (max-width: 76.8rem) { /* 768px */
    margin-bottom: 6rem;
    max-width: 36rem; /* 360px */
    padding: 2rem; /* 20px */
  }
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem; /* 20px */
  padding: 0 0.4rem; /* 0 4px */
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
`;

const WeekDay = styled.div`
  font-size: 1.2rem; /* 12px */
  font-weight: 500;
  color: #64748b;
  text-align: center;
  padding: 0.8rem 0; /* 8px 0 */
`;

const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.4rem;
  margin-bottom: 3rem; /* 30px */
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
`;

const TimeSlotSection = styled.div`
  /* Time slots section */
`;

const TimeSlotHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem; /* 16px */
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
  
  &:hover {
    background: #374151;
    border-color: #6b7280;
  }
`;

const OldSchoolSection = styled.div`
  margin-bottom: 6rem; /* 60px */
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
  margin-bottom: 2rem; /* 20px */
   letter-spacing: 0.2em;
  @media (max-width: 48rem) { /* 480px */
    flex-direction: column;
    gap: 2rem; /* 20px */
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem; /* 10px */
  color: #e11d48;
  text-decoration: none;
     font-size: 1.2rem;

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

const ContactSection = () => {
  const [selectedDate, setSelectedDate] = useState(30);
  const [selectedTime, setSelectedTime] = useState('4:30pm');
  const [timeFormat, setTimeFormat] = useState('12h');

  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const timeSlots = ['4:30pm', '5:00pm', '5:30pm'];

  // Generate calendar days for January 2025
  const generateCalendarDays = () => {
    const days = [];
    const today = 30; // Current day highlighted in the image
    
    // Previous month days (empty or grayed out)
    for (let i = 0; i < 3; i++) {
      days.push({ day: '', isDisabled: true });
    }
    
    // Current month days
    for (let day = 1; day <= 31; day++) {
      days.push({
        day: day,
        isToday: day === today,
        isDisabled: day < today,
        isSelected: day === selectedDate
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();

  return (
    <ContactWrapper>
      <ContactContainer>
        <Header>
          <Eyebrow>LET'S TALK</Eyebrow>
          <MainHeading>Book a call today!</MainHeading>
          <Description>
            Book a FREE discovery call to discuss your project and challenges
            and find the best approach for executing it!
          </Description>
        </Header>

        <BookingCard>
          <CalendarHeader>
            <MonthYear>January 2025</MonthYear>
            <CalendarNavButtons>
              <CalendarNavButton>‹</CalendarNavButton>
              <CalendarNavButton>›</CalendarNavButton>
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
                onClick={() => !dayObj.isDisabled && dayObj.day && setSelectedDate(dayObj.day)}
              >
                {dayObj.day}
              </CalendarDay>
            ))}
          </CalendarDays>

          <TimeSlotSection>
            <TimeSlotHeader>
              <DateLabel>Thu 30</DateLabel>
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
              {timeSlots.map((time) => (
                <TimeSlot
                  key={time}
                  isSelected={selectedTime === time}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </TimeSlot>
              ))}
            </TimeSlotList>
          </TimeSlotSection>
        </BookingCard>

        <OldSchoolSection>
          <OldSchoolHeading>Wanna go old school? No problem!</OldSchoolHeading>
          <p style={{ color: '#cbd5e1', marginBottom: '2rem', fontSize: '1.4rem' }}>
            Feel free to shoot us an email or give us a call any time
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