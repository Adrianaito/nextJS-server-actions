// before server actions:

"use client";

// clients components interface is created in the server and the js will
// be sent to the client and hydrated (injected) into the page
// you can test adding a message and only see the new message in the list when you refresh the page.
// this could be solved by lifting up the state to page level in this case and passing the state to message and addMessage components
// or by using a tool like React Query

import { FormEvent, useState } from "react";

export function AddMessage() {
  const [message, setMessage] = useState("");

  function habdleCreateMessage(event: FormEvent) {
    event.preventDefault();
    fetch("http://localhost:8000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
  }

  return (
    <form className="flex gap-4" onSubmit={habdleCreateMessage}>
      <input
        type="text"
        id="message"
        name="message"
        placeholder="write your message here"
        value={message}
        onChange={(event) => setMessage(event.target.value)} // [2]
        className="p-2 border border-gray-300 rounded-md w-96 text-black"
      />
      <button type="submit">Add Message</button>
    </form>
  );
}
