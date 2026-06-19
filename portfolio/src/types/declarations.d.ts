declare module '*.css';

declare module 'react-mailchimp-subscribe' {
  import { ComponentType } from 'react';

  interface MailchimpSubscribeProps {
    url: string;
  }

  const MailchimpSubscribe: ComponentType<MailchimpSubscribeProps>;
  export default MailchimpSubscribe;
}
