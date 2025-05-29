import React from 'react';
import type { Email } from '../../../../Constants/emailsData';


interface EmailItemProps {
  email: Email;
}

const EmailItem: React.FC<EmailItemProps> = ({ email }) => {
  return (
    <div className="border-b p-4 hover:bg-gray-50 cursor-pointer">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">{email.sender}</h3>
          <p className="text-sm text-gray-600">{email.subject}</p>
        </div>
        <div className="text-xs text-gray-500">{email.folder}</div>
      </div>
    </div>
  );
};

export default EmailItem;
