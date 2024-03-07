import { Metadata } from "next";
import Main from "@/components/Main";
import Teaser from "@/components/Teaser";
import { isTeaser } from "@/libs/utils";

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
  return <>{isTeaser ? <Teaser /> : <Main />}</>;
}
