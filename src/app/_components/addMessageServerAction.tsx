// server actions:

import { revalidateTag } from "next/cache";
import { SubmitButton } from "@components/submitButton";

// try disabling the js in the browser and see that the form still works 🤯

export async function AddMessage() {
  async function habdleCreateMessage(form: FormData) {
    // this is a server action, it will be executed on the server
    // it's like creating an api route inside the component
    "use server";

    console.log(form.get("message")); // this will be printed on the server
    const message = form.get("message");

    if (!message) {
      return;
    }

    // simulate a delay to show the loading state
    await new Promise((resolve) => setTimeout(resolve, 2000));

    await fetch("http://localhost:8000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    // revalidate the getMessages tag (check the messages component for more info)
    revalidateTag("getMessages");
  }

  return (
    <form className="flex gap-4" action={habdleCreateMessage}>
      <input
        type="text"
        id="message"
        name="message"
        placeholder="write your message here"
        className="p-2 border border-gray-300 rounded-md w-96 text-black"
      />
      <SubmitButton />
    </form>
  );
}
