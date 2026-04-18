import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <>
    <h1>Welcome page</h1>
    <Link href="/home">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/register">SignUP</Link>
    </>
  );
}
