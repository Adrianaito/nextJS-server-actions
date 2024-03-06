import { Suspense } from "react";
import { Messages } from "@components/messages";
import { AddMessage } from "@components/addMessage";
import { AddMessage as ServerActionMessage } from "@components/addMessageServerAction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 p-24">
      <h1 className="text-xl">Ugly app to test server actions! 🫢　</h1>
      <Suspense fallback={<p>Loading with Amazing Suspense from React!</p>}>
        <Messages />
      </Suspense>
      <AddMessage />
      <ServerActionMessage />
    </main>
  );
}
