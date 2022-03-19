import React from 'react';
import useScrollToTop from '../../hooks/useScrollToTop';
import PageTitle from '../../components/PageTitle';

import ContactUs from '../../components/Section/ContactUs';
import FrequentQeustions from '../../components/Section/FrequentQuestions';

function HelpCenter() {
  useScrollToTop();

  return (
    <div className="help-page mt-12">
      <div className="container">
        <PageTitle className="mb-6">Help Center</PageTitle>
        <p className="text-light-gray-400 text-[18px] mb-9">
          These are the most frequent ask questions.
        </p>
        <FrequentQeustions />
      </div>
      <ContactUs />
    </div>
  );
}

export default HelpCenter;
