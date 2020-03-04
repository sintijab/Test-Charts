import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';
import Chart from '../../components/Chart';
import { TEST_TITLE, TEST_SUB_TITLE } from '../../constants/titles';
import { useWindowDimensions } from '../../utils/functions';

const ViewContainer = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { isMobile, isTablet } = useWindowDimensions();
  const hasSmallViewPorts = isMobile || isTablet;
  if (data && data.length) {
    const activeChartSection = data[activeTab] || [];
    const tabs = data.map((item, i) => {
      const index = `${item}-${i}`;
      const title = `Tab ${i + 1}`;
      const tabClassName = `${styles.report_nav_item}
        ${i === activeTab ? styles.report_nav_active : ''}`;
      return (
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: title }}
          key={index}
          className={tabClassName}
          role="presentation"
          onClick={() => setActiveTab(i)}
        />
      );
    });
    const legendInfo = activeChartSection.bullets.map((legend, i) => {
      const index = `${legend}-${i}`;
      return (
        <div key={index} className={styles.info_row}>
          {!!legend.icon && <i className={`fa ${legend.icon}`} />}
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: legend.text }}
            className={styles.info}
          />
        </div>
      );
    });
    if (hasSmallViewPorts) {
      return (
        <div className={styles.report}>
          <h1 className={styles.report_title}>{TEST_TITLE}</h1>
          <Chart
            data={activeChartSection}
            hasSmallViewPorts={hasSmallViewPorts}
          />
          <h3 className={styles.report_title}>{TEST_SUB_TITLE}</h3>
          {legendInfo}
          <div className={styles.report_nav}>
            {tabs}
          </div>
        </div>
      );
    }
    return (
      <div className={styles.report}>
        <div className={styles.report_info}>
          <h1 className={styles.report_title}>{TEST_TITLE}</h1>
          <div className={styles.report_nav}>
            {tabs}
          </div>
          <h3 className={styles.report_subtitle}>{TEST_SUB_TITLE}</h3>
          {legendInfo}
        </div>
        <Chart data={activeChartSection} />
      </div>
    );
  }
  return <div />;
};

export default ViewContainer;

ViewContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

ViewContainer.defaultProps = {
  data: [],
};
