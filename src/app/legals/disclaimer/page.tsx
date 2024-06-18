import { Metadata} from "next"
import Link from "next/link"
import { H3,P,H4 } from "../../../components/LegalComponents"


export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Legal Disclaimer of our website",
  openGraph: {
    title: "Disclaimer",
    description:
      "Legal Disclaimer of our website",
    type: "website",
    url: "https://www.bitspace.org.in/legals/disclaimer",
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
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center bg-accent px-16 md:px-24 py-24 mb-2">
                <h1 className="font-bold text-4xl text-white text-center">Disclaimer</h1>
                <span className="text-white text-center py-2">Last edited on <b>18/06/2024</b></span>
            </div>
            <div className="px-12 md:px-24 mt-12 mb-4">
                <P>This disclaimer outlines the terms and conditions governing the use of our website. By accessing and using our website, you accept and agree to the <Link href="/legals/privacy" className="font-bold hover:underline">Privacy Policy</Link>, <Link href="/legals/terms" className="font-bold hover:underline">Terms and Conditions</Link> and agree to be bound by this <b>Disclaimer</b>. Throughout this document, <b>:bitspace</b> will be refered to as &quot; Bitspace&quot;, &quot;bitspace&quot;, &quot;we&quot;, &quot;our&quot; or &quot;us&quot;.</P>
            </div>
            <div className="px-12 md:px-24 my-4">
                <H3>No Warranty or Guarantee</H3>
                <P>Bitspace has made every attempt to ensure the accuracy and reliability of the information provided on this website. However the information is provided &quot;as is&quot; <span className="text-black font-bold">without warranty of any kind</span>. Bitspace <span className="text-black font-bold">DOES NOT</span> accept any responsibility or liability for the accuracy, content, completeness, legality or reliability of the information contained on this website.</P>
            </div>
            <div className="px-12 md:px-24 my-4">
                <H3>External Links Disclaimer</H3>
                <P>The site may contain links to other websites, or you may be redirected to them, or contents belonging to other websites. Such external links are not investigated, monitored or checked for accuracy, completeness or validity by us. <b className="text-black">WE NEITHER PROVIDE WARRANTY, NOR ENDORSE, NOR GUARANTEE, NOR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION PROVIDED BY THIRD PARTY WEBSITES LINKED THROUGH THIS SITE. WE WILL NOT BE A PARTY, OR IN ANY WAY RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD PARTY PROVIDERS OF PRODUCT OR SERVICES.</b></P>
            </div>
        </section>
    )
}
