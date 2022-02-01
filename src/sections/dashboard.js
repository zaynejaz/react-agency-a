/** @jsx jsx */
import { useRef, useEffect, useState } from 'react';
import { rgba } from 'polished';
import { jsx, Box, Container } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import TabTitle from 'components/tabs/tab-title';
import TabContent from 'components/tabs/tab-content';
import Currency from 'components/icons/currency';
import Cog from 'components/icons/cog';
import PieChart from 'components/icons/pie-chart';
import Suitcase from 'components/icons/suitcase';
import BarChart from 'components/icons/bar-chart';
import dashboard from 'assets/images/dashboard.png';
import dashboard2 from 'assets/images/dashboard2.png';
import dashboard3 from 'assets/images/dashboard3.png';
import dashboard4 from 'assets/images/dashboard4.png';
import dashboard5 from 'assets/images/dashboard5.png';

const data = [
  {
    id: 1,
    tabPane: [
      {
        icon: <Currency />,
        title: 'Budget Overview',
      },
    ],
    tabContent: [
      {
        image: dashboard,
        title: `View your finances that boost your bottom-line's performance`,
        description: `Access accurate estimations of future revenues and expenses, enabling you to plan for future expenses or resource allocation for specific periods, allowing you to focus on what you need when you need it.`,
        readMore: '#introduce-quality',
      },
    ],
  },
  {
    id: 2,
    tabPane: [
      {
        icon: <Cog />,
        title: 'Create & adjust',
      },
    ],
    tabContent: [
      {
        image: dashboard2,
        title: `Mastering the basics of collaboration like never before`,
        description: `The clear way to share complex information. Explain a task's purpose. Brainstorm open-mindedly. Evaluate the ideas together. Make a decision. Evaluate the results.`,
        readMore: '#introduce-quality',
      },
    ],
  },
  {
    id: 3,
    tabPane: [
      {
        icon: <PieChart />,
        title: 'Analytical Reports',
      },
    ],
    tabContent: [
      {
        image: dashboard3,
        title: `Reports offering both information and analysis, but also include recommendations`,
        description: `Analytical reporting tailored for you business reports that uses qualitative and quantitative data to analyze as well as evaluate a business strategy or process while empowering your team to make data-driven decisions based on evidence and analytics`,
        readMore: '#introduce-quality',
      },
    ],
  },
  {
    id: 4,
    tabPane: [
      {
        icon: <Suitcase />,
        title: 'Business Optimization',
      },
    ],
    tabContent: [
      {
        image: dashboard4,
        title: `Reduce costs that leading to higher profits and succeed against your competition`,
        description: `Smarter analysis through improved data modeling, machine learning and artificial intelligence will help identify best-fit digital tools and innovative approaches that improve efficiency, productivity and performance of any organization`,
        readMore: '#introduce-quality',
      },
    ],
  },
  {
    id: 5,
    tabPane: [
      {
        icon: <BarChart />,
        title: 'Custom Dashboard',
      },
    ],
    tabContent: [
      {
        image: dashboard5,
        title: `Customize your dashboards and widgets for the best account overview`,
        description: `Every view in Analytics comes with a default "My Dashboard." While the default Dashboard may suffice, the real usefulness of Dashboards lies in your ability to create and customize them the way you want to give you an overview of the dimensions and metrics you care about most`,
        readMore: '#introduce-quality',
      },
    ],
  },
];

const Dashboard = () => {
  const containerRef = useRef();
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });
  useEffect(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
    });
  }, [containerRef]);

  return (
    <Box as="section" sx={styles.section}>
      <Container ref={containerRef} />
      <Box sx={{ pl: containerOffset.left + 30, ...styles.container }}>
        <Tabs
          sx={styles.tabs}
          animated={{ tabPane: true }}
          defaultActiveKey="2"
        >
          {data?.map((tab) => (
            <TabPane key={tab?.id} tab={<TabTitle tab={tab.tabPane} />}>
              <TabContent tabContent={tab?.tabContent} />
            </TabPane>
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default Dashboard;

const styles = {
  section: {
    backgroundColor: '#353448',
    pt: [9, null, null, 11, 10, 12, null],
    pb: [9, null, null, null, 0],
  },
  container: {
    maxWidth: ['none !important'],
    pr: [6, null, null, 0],
  },
  tabs: {
    border: 0,
    color: 'white',
    '.rc-tabs-nav': {
      mb: [8, null, null, 7, 10, null, 12],
    },
    '.rc-tabs-nav-wrap': {
      '::before': {
        backgroundColor: rgba('#fff', 0.1),
        content: ['none', null, null, `''`],
        height: 1,
        position: 'absolute',
        left: 0,
        top: 51,
        width: '100%',
      },
      '::after': {
        borderColor: ['primary'],
      },
    },
    '.rc-tabs-nav-list': {
      display: ['flex'],
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      '+ .rc-tabs-tab': {
        ml: [5, null, null, 5, 8, 12],
        // mt: [0, null, null, 0],
      },
      'svg g, svg path': {
        transition: '0.3s ease-in-out 0s',
      },
    },
    '.rc-tabs-tab-btn': {
      alignItems: 'center',
      display: ['flex', null, null, 'block'],
      outline: '0 none',
      fontSize: [null, null, null, 15, 2],
    },
    '.rc-tabs-tab-active': {
      'svg g, svg path': {
        fill: 'primary',
        opacity: 1,
      },
      h5: {
        color: 'primary',
      },
    },
    '.rc-tabs-ink-bar': {
      backgroundColor: 'primary',
      borderRadius: 5,
      bottom: [47],
      display: ['none', null, null, 'block'],
    },
    '.rc-tabs-tabpane': {
      outline: '0 none',
    },
  },
};
