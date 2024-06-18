import { Metadata } from "next"
import { H3,P,H4 } from "../../../components/LegalComponents"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "The page outlining the Terms and Conditions for using our website",
  openGraph: {
    title: "Privacy Policy",
    description:
      "The page outlining the Terms and Conditions for using our website",
    type: "website",
    url: "https://www.bitspace.org.in/legals/terms",
    siteName: ":bitspace",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bitspaceorg",
  },
  robots: "all",
}

export default function Page () {
    return (
        <section className="py-24">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center bg-accent px-16 md:px-24 py-24 my-4">
                <h1 className="font-bold text-4xl text-white text-center">Terms and Conditions</h1>
                <span className="text-white py-2 text-center">Last edited on <b>18/06/2024</b></span>
            </div>
            <div className="px-12 md:px-24 mt-12 mb-4">
                <P>Welcome to bitspace.org.in (the &quot;Website&quot;). The Website is maintained as a courtesy without any warranties or representations. By using the Website, you agree to comply with and be bound by the following terms and conditions of use (&quot;Terms&quot;). If you do not agree to these Terms, you should not use this Website.</P>
            </div>
            <div className="px-12 md:px-24 my-4">
                <H3>Ownership</H3>
                <P>All content on the website is and shall continue to be the property of <b>:bitspace</b> or its original owner. Under no circumstances will you acquire any ownership rights or other interest in this website. The images used, and logo marks are owned by Bitspace (&quot;:bitspace&quot;). The Website may also display the word and logo marks of third parties (&quot;Third-Party Marks&quot;), and any and all use or reproduction of Third-Party Marks is prohibited. The projects under Bitspace is made available under an open- source license (see below). All other content on the Website, including the Blog and Documents, (the &quot;Material&quot;) is made available for your noncommercial or personal use subject to the LICENSE below.</P>
            </div>
            <div className="px-12 md:px-24 my-4">
                <H3>License</H3>
                <P>The Projects of our organization, including this website, is for your personal or non-commercial use, and, has been licensed under <Link href="https://en.wikipedia.org/wiki/MIT_License" className="font-bold hover:underline">MIT License</Link>. The <Link href="https://github.com/bitspaceorg/.github/blob/main/LICENSE.md" className="text-accent font-bold hover:underline">LICENSE</Link> definition is available at our Github repository.</P>
            </div>
            <div className="px-12 md:px-24 my-4">
                <H3>Disclaimer</H3>
                <P>The disclaimer has been provided in a seperate page. You can check it out <Link href="/legals/disclaimer" className="font-bold hover:underline">HERE</Link> </P>
            </div>
            <div className="px-12 md:px-24 my-4">
                <H3>Limitation of Liability</H3>
                <P>Under no circumstances shall :bitspace be liable or responsible for damages or losses of any kind relating to your use of the Website. Your sole and exclusive remedy for dissatisfaction with the Website shall be to discontinue all use of the Website.</P>
            </div>
            <div className="px-12 md:px-24 my-4">
                <H3>Assumption of Risk</H3>
                <P>You are solely responsible for ensuring your use of the Website complies with all applicable laws and regulations. Data privacy laws are of particular importance when conducting user testing or developing our technical projects. It is advisable to consult with a licensed legal professional to ensure your activities are compliant with all applicable laws and regulations.</P>
            </div>
            <div className="px-12 md:px-24 my-4">
                <H3>Consent</H3>
                <P>By using our website, you hereby consent to our <Link href="/legals/privacy" className="font-bold no-underline hover:underline">Privacy Policy</Link> and agree to its <b>Terms and Conditions</b></P>
            </div>
        </section>
    )
}

