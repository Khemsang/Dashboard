// Types
export interface ChatMessage {
  sender: string;
  text: string;
  time: string;
}

export interface User {
  id: number;
  name: string;
  profilePic: string;
  lastMessage: string;
  messages: ChatMessage[];
}

// 15 Users with detailed messages
export const activeConversations: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    profilePic: 'https://i.pravatar.cc/150?img=1',
    lastMessage: 'Catch up soon!',
    messages: [
      { sender: 'Alice Johnson', text: 'Hey! How are you?', time: '9:00 AM' },
      { sender: 'You', text: 'I’m good, thanks! You?', time: '9:02 AM' },
      { sender: 'Alice Johnson', text: 'Doing well! Catch up soon!', time: '9:05 AM' }
    ]
  },
  {
    id: 2,
    name: 'Bob Smith',
    profilePic: 'https://i.pravatar.cc/150?img=2',
    lastMessage: 'Will do, thanks!',
    messages: [
      { sender: 'Bob Smith', text: 'Did you check the report?', time: '10:15 AM' },
      { sender: 'You', text: 'Yes, looks good.', time: '10:17 AM' },
      { sender: 'Bob Smith', text: 'Great! Will send it then.', time: '10:18 AM' },
      { sender: 'You', text: 'Will do, thanks!', time: '10:19 AM' }
    ]
  },
  {
    id: 3,
    name: 'Carol Danvers',
    profilePic: 'https://i.pravatar.cc/150?img=3',
    lastMessage: 'Got it. Thanks!',
    messages: [
      { sender: 'Carol Danvers', text: 'Meeting at 2 PM?', time: '11:00 AM' },
      { sender: 'You', text: 'Yes, confirmed.', time: '11:01 AM' },
      { sender: 'Carol Danvers', text: 'Got it. Thanks!', time: '11:02 AM' }
    ]
  },
  {
    id: 4,
    name: 'David Lee',
    profilePic: 'https://i.pravatar.cc/150?img=4',
    lastMessage: 'Can we reschedule?',
    messages: [
      { sender: 'David Lee', text: 'I have a conflict at 3.', time: '1:00 PM' },
      { sender: 'You', text: 'Can we move to 4?', time: '1:01 PM' },
      { sender: 'David Lee', text: 'Perfect. Thanks!', time: '1:02 PM' },
      { sender: 'You', text: 'No problem.', time: '1:03 PM' },
      { sender: 'David Lee', text: 'Can we reschedule?', time: '1:04 PM' }
    ]
  },
  {
    id: 5,
    name: 'Eve Torres',
    profilePic: 'https://i.pravatar.cc/150?img=5',
    lastMessage: 'Sure, sounds fun!',
    messages: [
      { sender: 'You', text: 'Want to join the movie night?', time: '2:30 PM' },
      { sender: 'Eve Torres', text: 'Sure, sounds fun!', time: '2:31 PM' }
    ]
  },
  {
    id: 6,
    name: 'Frank Castle',
    profilePic: 'https://i.pravatar.cc/150?img=6',
    lastMessage: 'Let me know when you’re free.',
    messages: [
      { sender: 'Frank Castle', text: 'Can we talk later?', time: '3:00 PM' },
      { sender: 'You', text: 'Of course, anytime.', time: '3:02 PM' },
      { sender: 'Frank Castle', text: 'Let me know when you’re free.', time: '3:05 PM' }
    ]
  },
  {
    id: 7,
    name: 'Grace Hopper',
    profilePic: 'https://i.pravatar.cc/150?img=7',
    lastMessage: 'Looking forward to it!',
    messages: [
      { sender: 'Grace Hopper', text: 'Let’s meet tomorrow.', time: '4:00 PM' },
      { sender: 'You', text: 'Sounds good.', time: '4:01 PM' },
      { sender: 'Grace Hopper', text: 'Looking forward to it!', time: '4:02 PM' }
    ]
  },
  {
    id: 8,
    name: 'Henry Ford',
    profilePic: 'https://i.pravatar.cc/150?img=8',
    lastMessage: 'Cool, see you there.',
    messages: [
      { sender: 'You', text: 'Event is at 5 PM sharp.', time: '4:45 PM' },
      { sender: 'Henry Ford', text: 'Cool, see you there.', time: '4:46 PM' }
    ]
  },
  {
    id: 9,
    name: 'Ivy Chen',
    profilePic: 'https://i.pravatar.cc/150?img=9',
    lastMessage: 'Let’s discuss later.',
    messages: [
      { sender: 'Ivy Chen', text: 'The document needs revision.', time: '5:00 PM' },
      { sender: 'You', text: 'I’ll take a look now.', time: '5:02 PM' },
      { sender: 'Ivy Chen', text: 'Let’s discuss later.', time: '5:05 PM' }
    ]
  },
  {
    id: 10,
    name: 'Jack Ma',
    profilePic: 'https://i.pravatar.cc/150?img=10',
    lastMessage: 'Thanks for the help!',
    messages: [
      { sender: 'Jack Ma', text: 'Can you help with this bug?', time: '5:30 PM' },
      { sender: 'You', text: 'Sure, show me.', time: '5:31 PM' },
      { sender: 'Jack Ma', text: 'Thanks for the help!', time: '5:32 PM' }
    ]
  },
  {
    id: 11,
    name: 'Karen Gillan',
    profilePic: 'https://i.pravatar.cc/150?img=11',
    lastMessage: 'Nice to hear!',
    messages: [
      { sender: 'Karen Gillan', text: 'How’s your day?', time: '6:00 PM' },
      { sender: 'You', text: 'Pretty good, productive.', time: '6:01 PM' },
      { sender: 'Karen Gillan', text: 'Nice to hear!', time: '6:02 PM' }
    ]
  },
  {
    id: 12,
    name: 'Leo Messi',
    profilePic: 'https://i.pravatar.cc/150?img=12',
    lastMessage: 'Vamos!',
    messages: [
      { sender: 'Leo Messi', text: 'Training today?', time: '6:30 PM' },
      { sender: 'You', text: 'Yes! Let’s go hard!', time: '6:31 PM' },
      { sender: 'Leo Messi', text: 'Vamos!', time: '6:32 PM' }
    ]
  },
  {
    id: 13,
    name: 'Mia Wong',
    profilePic: 'https://i.pravatar.cc/150?img=13',
    lastMessage: 'Will do!',
    messages: [
      { sender: 'Mia Wong', text: 'Don’t forget to bring snacks.', time: '7:00 PM' },
      { sender: 'You', text: 'Got it. Chips and drinks?', time: '7:01 PM' },
      { sender: 'Mia Wong', text: 'Will do!', time: '7:02 PM' }
    ]
  },
  {
    id: 14,
    name: 'Nathan Drake',
    profilePic: 'https://i.pravatar.cc/150?img=14',
    lastMessage: 'Ready when you are.',
    messages: [
      { sender: 'You', text: 'The treasure map is ready.', time: '7:30 PM' },
      { sender: 'Nathan Drake', text: 'Ready when you are.', time: '7:31 PM' }
    ]
  },
  {
    id: 15,
    name: 'Olivia Benson',
    profilePic: 'https://i.pravatar.cc/150?img=15',
    lastMessage: 'Send them over and I’ll give you feedback.',
    messages: [
      { sender: 'Olivia Benson', text: 'Can you review my notes?', time: '8:00 PM' },
      { sender: 'You', text: 'Sure, send them over and I’ll give you feedback.', time: '8:05 PM' }
    ]
  }
];

