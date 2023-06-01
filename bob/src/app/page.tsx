import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      Bob
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
