/* eslint-disable max-len */
import React from 'react';
import SectionTitle from './Title';

type Props = {
  withLabel?: boolean;
  withMoreDetails?: boolean;
}

function WhyChooseUs({
  withLabel = false,
  withMoreDetails = false,
}: Props) {
  return (
    <section className="why-choose-us">
      {withLabel && (
        <SectionTitle className="mb-6">Why Choose Us</SectionTitle>
      )}
      <div className="flex justify-between gap-x-20">
        {[
          {
            title: 'Cheapest Fees on the Market',
            paragraph: 'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
          },
          {
            title: 'Decentralized',
            paragraph: 'Powered by cutting edge, secure smart contracts',
          },
          {
            title: 'Community driven',
            paragraph: 'We value community feedback and source the best artists possible ',
          },
        ].map((item, index) => (
          <div className="w-1/3 bg-light-gray-50 dark:bg-black-800 px-3 py-10 rounded-3xl flex flex-col items-center" key={JSON.stringify(item)}>
            <img src={`/icons/why-choose-us/${index + 1}.svg`} alt="" />
            <p className="text-2xl font-semibold mt-8 mb-6">{item.title}</p>
            <p className="text-center px-6">{item.paragraph}</p>
          </div>
        ))}
      </div>
      {withMoreDetails && (
        <div className="py-72 flex flex-col items-center">
          <img src="/icons/why-choose-us/below.png" alt="" />
          <p className="text-3xl my-6">Powered by MuesliSwap</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nulla volutpat, dictumst non, vitae aliquet enim et ut. Facilisis risus.</p>
        </div>
      )}
    </section>
  );
}

export default WhyChooseUs;
