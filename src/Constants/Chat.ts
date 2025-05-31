// Types
export interface ChatMessage {
  sender: string;
  text: string;
  time: string;
}

export interface User {
  id: string;
  name: string;
  profilePic: string;
  lastMessage: string;
  messages: ChatMessage[];
}

// 30 Users with detailed messages
export const activeConversations: User[] = [
  {
    id: '1',
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
    id: '2',
    name: 'Bob Smith',
    profilePic: 'https://i.pravatar.cc/150?img=2',
    lastMessage: 'See you at the meeting.',
    messages: [
      { sender: 'Bob Smith', text: 'Are you coming to the meeting?', time: '10:30 AM' },
      { sender: 'You', text: 'Yes, I’ll be there.', time: '10:32 AM' },
      { sender: 'Bob Smith', text: 'Great! See you then.', time: '10:35 AM' }
    ]
  },
  {
    id: '3',
    name: 'Olivia Benson',
    profilePic: 'https://i.pravatar.cc/150?img=15',
    lastMessage: 'Send them over and I’ll give you feedback.',
    messages: [
      { sender: 'Olivia Benson', text: 'Can you review my notes?', time: '8:00 PM' },
      { sender: 'You', text: 'Sure, send them over and I’ll give you feedback.', time: '8:05 PM' }
    ]
  },
  {
    id: '16',
    name: 'Ethan Hunt',
    profilePic: 'https://i.pravatar.cc/150?img=16',
    lastMessage: 'Mission accomplished!',
    messages: [
      { sender: 'Ethan Hunt', text: 'Mission update?', time: '11:00 AM' },
      { sender: 'You', text: 'Mission accomplished!', time: '11:05 AM' },
      { sender: 'Ethan Hunt', text: 'Excellent work.', time: '11:07 AM' }
    ]
  },
  {
    id: '17',
    name: 'Sophie Turner',
    profilePic: 'https://i.pravatar.cc/150?img=17',
    lastMessage: 'Excited to see you!',
    messages: [
      { sender: 'Sophie Turner', text: 'Let’s catch up tonight.', time: '6:00 PM' },
      { sender: 'You', text: 'Sounds great! Excited to see you.', time: '6:05 PM' }
    ]
  },
  {
    id: '18',
    name: 'Chris Evans',
    profilePic: 'https://i.pravatar.cc/150?img=18',
    lastMessage: 'Let’s do this!',
    messages: [
      { sender: 'Chris Evans', text: 'Ready to start?', time: '1:00 PM' },
      { sender: 'You', text: 'Let’s do this!', time: '1:02 PM' }
    ]
  },
  {
    id: '19',
    name: 'Emma Watson',
    profilePic: 'https://i.pravatar.cc/150?img=19',
    lastMessage: 'Let me know your thoughts.',
    messages: [
      { sender: 'Emma Watson', text: 'I sent you the draft.', time: '2:00 PM' },
      { sender: 'You', text: 'Got it! Let me know your thoughts.', time: '2:03 PM' }
    ]
  },
  {
    id: '20',
    name: 'Tom Hanks',
    profilePic: 'https://i.pravatar.cc/150?img=20',
    lastMessage: 'Looking forward to it!',
    messages: [
      { sender: 'Tom Hanks', text: 'Want to catch up tomorrow?', time: '3:00 PM' },
      { sender: 'You', text: 'Sure! Looking forward to it.', time: '3:05 PM' }
    ]
  },
  {
    id: '21',
    name: 'Zendaya',
    profilePic: 'https://i.pravatar.cc/150?img=21',
    lastMessage: 'Let’s connect soon.',
    messages: [
      { sender: 'Zendaya', text: 'When’s a good time to chat?', time: '4:00 PM' },
      { sender: 'You', text: 'Let’s connect soon.', time: '4:05 PM' }
    ]
  },
  {
    id: '22',
    name: 'Robert Downey Jr.',
    profilePic: 'https://i.pravatar.cc/150?img=22',
    lastMessage: 'Great idea!',
    messages: [
      { sender: 'Robert Downey Jr.', text: 'What’s your idea?', time: '5:00 PM' },
      { sender: 'You', text: 'Let’s create something amazing.', time: '5:03 PM' },
      { sender: 'Robert Downey Jr.', text: 'Great idea!', time: '5:05 PM' }
    ]
  },
  {
    id: '23',
    name: 'Gal Gadot',
    profilePic: 'https://i.pravatar.cc/150?img=23',
    lastMessage: 'Let me know!',
    messages: [
      { sender: 'Gal Gadot', text: 'Are you free this weekend?', time: '6:00 PM' },
      { sender: 'You', text: 'Let me check my schedule.', time: '6:05 PM' }
    ]
  },
  {
    id: '24',
    name: 'Ryan Reynolds',
    profilePic: 'https://i.pravatar.cc/150?img=24',
    lastMessage: 'Let’s chat tomorrow.',
    messages: [
      { sender: 'Ryan Reynolds', text: 'Busy today?', time: '7:00 PM' },
      { sender: 'You', text: 'A bit. Let’s chat tomorrow.', time: '7:05 PM' }
    ]
  },
  {
    id: '25',
    name: 'Mila Kunis',
    profilePic: 'https://i.pravatar.cc/150?img=25',
    lastMessage: 'See you soon!',
    messages: [
      { sender: 'Mila Kunis', text: 'Can’t wait for our trip!', time: '8:00 PM' },
      { sender: 'You', text: 'Me too! See you soon.', time: '8:03 PM' }
    ]
  },
  {
    id: '26',
    name: 'Leonardo DiCaprio',
    profilePic: 'https://i.pravatar.cc/150?img=26',
    lastMessage: 'Sounds perfect!',
    messages: [
      { sender: 'Leonardo DiCaprio', text: 'Dinner plans?', time: '9:00 PM' },
      { sender: 'You', text: 'Yes, sounds perfect!', time: '9:05 PM' }
    ]
  },
  {
    id: '27',
    name: 'Margot Robbie',
    profilePic: 'https://i.pravatar.cc/150?img=27',
    lastMessage: 'Catch up soon!',
    messages: [
      { sender: 'Margot Robbie', text: 'How’s your day going?', time: '10:00 PM' },
      { sender: 'You', text: 'Busy, but let’s catch up soon.', time: '10:05 PM' }
    ]
  },
  {
    id: '28',
    name: 'Chris Hemsworth',
    profilePic: 'https://i.pravatar.cc/150?img=28',
    lastMessage: 'Let’s hit the gym!',
    messages: [
      { sender: 'Chris Hemsworth', text: 'Ready for the workout?', time: '11:00 PM' },
      { sender: 'You', text: 'Always! Let’s hit the gym.', time: '11:05 PM' }
    ]
  },
  {
    id: '29',
    name: 'Scarlett Johansson',
    profilePic: 'https://i.pravatar.cc/150?img=29',
    lastMessage: 'Talk later!',
    messages: [
      { sender: 'Scarlett Johansson', text: 'Gotta run, talk later?', time: '11:30 PM' },
      { sender: 'You', text: 'Sure, talk later!', time: '11:35 PM' }
    ]
  },
  {
    id: '30',
    name: 'Dwayne Johnson',
    profilePic: 'https://i.pravatar.cc/150?img=30',
    lastMessage: 'Looking forward to it!',
    messages: [
      { sender: 'Dwayne Johnson', text: 'See you at the event.', time: '11:50 PM' },
      { sender: 'You', text: 'Looking forward to it!', time: '11:55 PM' }
    ]
  }
];

// Create a map of userId -> messages for easy lookup
export const chatMessages: { [userId: string]: ChatMessage[] } = {};

activeConversations.forEach((user) => {
  chatMessages[user.id] = user.messages;
});
