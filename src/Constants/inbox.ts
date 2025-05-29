// constants.ts

export type Email = {
  sender: string;
  subject: string;
  date: string;
  starred: boolean;
};

export const emailsData: Email[] = [
  {
    sender: "Musharof Chowdhury",
    subject: "Some note & Lorem Ipsum available alteration in some form.",
    date: "17 Oct, 2024",
    starred: true,
  },
  {
    sender: "Naimur Rahman",
    subject: "Lorem Ipsum available alteration in some form.",
    date: "25 Nov, 2024",
    starred: false,
  },
  {
    sender: "Juhan Ahamed",
    subject: "Lorem Ipsum available alteration in some form.",
    date: "25 Nov, 2024",
    starred: false,
  },
  {
    sender: "Mahbub Hasan",
    subject: "Lorem Ipsum available alteration in some form.",
    date: "19 Dec, 2024",
    starred: false,
  },
  {
    sender: "Shafiq Hammad",
    subject: "Lorem Ipsum available alteration in some form.",
    date: "20 Dec, 2024",
    starred: false,
  },
  {
    sender: "John Doe",
    subject: "Additional email for testing pagination.",
    date: "01 Jan, 2025",
    starred: false,
  },
  {
    sender: "Jane Smith",
    subject: "Another message to test pagination.",
    date: "02 Jan, 2025",
    starred: false,
  },
];
