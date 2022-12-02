import Link from "next/link";

export default function Thanks() {
  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-xl">Thanks for using Nindle!</p>
      <Link className="flex" href="/">
        Back to home
      </Link>
    </div>
  );
}
