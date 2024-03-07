import { Metadata } from "next";

export const metadata: Metadata = {
  title: ":bitspace",
  description: "Bitspace is a dynamic and innovative organization that provides a platform for young and talented coders to showcase their skills by creating and contributing to open-source projects.",
  openGraph: {
      title: ":bitspace",
      description: "Bitspace is a dynamic and innovative organization that provides a platform for young and talented coders to showcase their skills by creating and contributing to open-source projects.",
      type: "website",
      url: "https://www.bitspace.org.in",
      siteName: ":bitspace",
    },
    twitter: {
        card: "summary_large_image",
        site: "@bitspaceorg",
    },
    robots: "all"

};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-5xl">Site Under Construction</h1>
    </main>
  );
}
