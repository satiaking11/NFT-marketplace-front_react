import React from 'react';

type Props = {
  className: String;
};

function SocialMediaLinks({ className }: Props) {
  return (
    <div className={` mt-3 flex items-center gap-x-8 ${className}`}>
      <img src="/icons/instagram.svg" alt="" />
      <img src="/icons/twitter.svg" alt="" />
      <img src="/icons/facebook.svg" alt="" />
      <img src="/icons/mail.svg" alt="" />
      <img src="/icons/discord.svg" alt="" />
    </div>
  );
}

export default SocialMediaLinks;
