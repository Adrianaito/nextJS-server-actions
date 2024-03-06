export async function Messages() {
  // simulate  delay to show the amazing Suspense from React s2!
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // server components can be async and fetch data directly
  const response = await fetch("http://localhost:8000/messages", {
    // add tags to the request to be able to track it in the server
    next: {
      tags: ["getMessages"],
    },
  });
  const data = await response.json();

  return (
    <ul>
      {data.map((item: any) => (
        <li key={item.id}>{item.message}</li>
      ))}
    </ul>
  );
}
