import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      Alice
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
