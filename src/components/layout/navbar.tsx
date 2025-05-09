import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="text-xl font-bold">
          SoundZone
        </Link>

        <div className="flex gap-6">
          <Link href="/genres" className="hover:underline">
            Genres
          </Link>
          <Link href="/blog-posts" className="hover:underline">
            Blog
          </Link>
          <Link href="/profile" className="hover:underline">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
