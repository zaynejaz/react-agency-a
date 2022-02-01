/** @jsx jsx */
import { useState, useCallback } from 'react';
import { keyframes } from '@emotion/core';
import { jsx, Box, Grid, Container, Flex, Text, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import Switch from 'components/switch';

// Pricing Plans
const starterPrice = 89.99;
const premiumPrice = 149.99;
const professionalPrice = 199.99;

const data = [
  {
    id: 1,
    title: 'Starter',
    subtitle: 'For the startup team who need core features',
    amount: {
      monthly: starterPrice,
      annual: (starterPrice * 12) + .11,
    },
    isRecommended: false,
    buttonText: 'Start Free Trial',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: '50 Team User Allowance',
      },
      {
        id: 2,
        isAvailable: true,
        title: `3TB of Data Storage Management`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Advanced Analytics and Recommendations`,
      },
      {
        id: 4,
        isAvailable: false,
        title: `24/7 Toll-Free Instant Support`,
      },
      {
        id: 5,
        isAvailable: false,
        title: `Customized Data Test Scenarios`,
      },
    ],
  },
  {
    id: 2,
    title: 'Premium',
    subtitle: 'For the more seasoned team looking for an edge',
    amount: {
      monthly: premiumPrice,
      annual: (premiumPrice * 12) + .11,
    },
    isRecommended: true,
    buttonText: 'Start Free Trial',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: '250 Team User Allowance',
      },
      {
        id: 2,
        isAvailable: true,
        title: `30TB of Data Storage Management`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Advanced Analytics and Recommendations`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `24/7 Toll-Free Instant Support`,
      },
      {
        id: 5,
        isAvailable: false,
        title: `Customized Data Test Scenarios`,
      },
    ],
  },


  {
    id: 3,
    title: 'Professional',
    subtitle: 'For the professional team aiming to change an industry',
    amount: {
      monthly: professionalPrice,
      annual: (professionalPrice * 12) + .11,
    },
    isRecommended: false,
    buttonText: 'Schedule Demo',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Unlimited Team User Allowance',
      },
      {
        id: 2,
        isAvailable: true,
        title: `100TB of Data Storage Management`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Customizable Analytics with Recommendations`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `24/7 Toll-Free Premier Support`,
      },
      {
        id: 5,
        
        isAvailable: true,
        title: `Customized Data Test Scenarios`,
      },
    ],
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handlePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Box as="section" id="pricing" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Logical pricing. Simple!"
          description="Choose the plan that suits your team"
        />
        <Flex sx={styles.priceSwitcher}>
          <Text as="span">Monthly Plan</Text>
          <Switch isMonthly={isMonthly} handlePlan={handlePlan} />
          <Text as="span">Annual Plan</Text>
        </Flex>
        <Box sx={styles.priceWrapper}>
          {data?.map((price, index) => (
            <PriceTable
              price={price}
              isAnnual={!isMonthly}
              key={`${isMonthly}-${index}`}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [11],
    pb: [11],
  },
  heading: {
    mb: 3,
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  priceSwitcher: {
    display: 'flex',
    alignItems: 'center',
    margin: [
      '35px auto 50px',
      null,
      null,
      '0 auto 30px',
      null,
      '60px auto 50px',
    ],
    maxWidth: 300,
    p: 2,
    span: {
      color: 'text',
      fontWeight: 500,
      outline: 0,
      p: 0,
      minHeight: 'auto',
    },
  },
  priceWrapper: {
    display: ['block', null, null, 'flex'],
    alignItems: 'center',
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
