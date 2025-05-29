// src/Constants/emailsData.ts
export interface Email {
  id: number;
  sender: string;
  subject: string;
  body: string;
  folder: string;
  date: string;
}

function generateDummyEmails(count: number): Email[] {
  const folders = ['Inbox', 'Starred', 'Snoozed', 'Sent'];
  const senders = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Williams', 'Charlie Brown', 'Emily Davis', 'Frank Miller'];
  const subjects = ['Meeting', 'Project Update', 'Lunch Plan', 'Invoice', 'Follow-up', 'Vacation', 'Feedback'];
  const today = new Date();

  return Array.from({ length: count }, (_, index) => {
    const sender = senders[Math.floor(Math.random() * senders.length)];
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const folder = folders[Math.floor(Math.random() * folders.length)];
    const date = new Date(today.getTime() - index * 86400000).toISOString().split('T')[0]; // YYYY-MM-DD

    return {
      id: index + 1,
      sender,
      subject: `${subject} ${index + 1}`,
      body: `This is the body of email ${index + 1} regarding ${subject.toLowerCase()}.`,
      folder,
      date,
    };
  });
}

export const emailsData: Email[] = generateDummyEmails(50);
