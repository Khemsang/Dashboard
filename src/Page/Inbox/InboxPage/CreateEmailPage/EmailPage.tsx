
import { useState } from "react";

const EmailPage = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSend = () => {
    alert(`Sending Email to: ${to}\nSubject: ${subject}\nBody: ${body}`);
  
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-6">Compose New Email</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">To:</label>
        <input
          type="email"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="recipient@example.com"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Subject:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Subject"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full border rounded px-3 py-2 h-40"
          placeholder="Write your message here..."
        />
      </div>
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  );
};

export default EmailPage;
