import {auth} from "@/auth";

export default async function Page() {
    const session =await auth();
    console.log(session);
  return (
    <>
      <h1>Welcome to the feeds Page</h1>
    </>
  );
}
