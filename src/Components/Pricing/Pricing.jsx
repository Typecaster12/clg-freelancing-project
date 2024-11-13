// PricingSection.js

import styled from 'styled-components';
import { FaRocket, FaGem, FaStar } from 'react-icons/fa';
import './Pricing.css';

const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  background-color: #f8f9fa;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const PricingCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 300px;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #007bff;
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Price = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin: 0.5rem 0 1rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const FeatureItem = styled.li`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #555;
`;

const PricingSection = () => {
    return (

        <>
        <div className="price__title">
            Pricing Information
        </div>
            <PricingContainer>
                <PricingCard>
                    <IconWrapper><FaRocket /></IconWrapper>
                    <PlanName>Starter</PlanName>
                    <Price>$19/mo</Price>
                    <FeatureList>
                        <FeatureItem>Basic Support</FeatureItem>
                        <FeatureItem>5 Projects</FeatureItem>
                        <FeatureItem>Community Access</FeatureItem>
                    </FeatureList>
                </PricingCard>

                <PricingCard>
                    <IconWrapper><FaGem /></IconWrapper>
                    <PlanName>Pro</PlanName>
                    <Price>$49/mo</Price>
                    <FeatureList>
                        <FeatureItem>Priority Support</FeatureItem>
                        <FeatureItem>Unlimited Projects</FeatureItem>
                        <FeatureItem>Access to Pro Resources</FeatureItem>
                    </FeatureList>
                </PricingCard>

                <PricingCard>
                    <IconWrapper><FaStar /></IconWrapper>
                    <PlanName>Enterprise</PlanName>
                    <Price>$99/mo</Price>
                    <FeatureList>
                        <FeatureItem>Dedicated Support</FeatureItem>
                        <FeatureItem>Custom Integrations</FeatureItem>
                        <FeatureItem>Team Management</FeatureItem>
                    </FeatureList>
                </PricingCard>
            </PricingContainer>
        </>

    );
};

export default PricingSection;

