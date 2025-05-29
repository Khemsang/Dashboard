import React from 'react';
import type { Email } from '../../../../Constants/inbox';
import EmailItem from '../EmailItem/EmailItem';
import { emailsData } from '../../../../Constants/emailsData';

interface EmailListProps {
  emails: Email[];
}

const EmailList: React.FC<EmailListProps> = ({ emails }) => {
  return (
    <div className="w-full">
      {emails.map((email) => (
        <EmailItem key={email.id} email={emailsData} />
      ))}
    </div>
  );
};

export default EmailList;
