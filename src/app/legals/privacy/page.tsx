import Link from "next/link"
import { H3,P,H4 } from "../../../components/LegalComponents"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "The page dedicated to Privacy Policy for our website",
  openGraph: {
    title: "Privacy Policy",
    description:
      "The page dedicated to Privacy Policy for our website",
    type: "website",
    url: "https://www.bitspace.org.in/legals/privacy",
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
                <h1 className="font-bold text-4xl text-white text-center">Privacy Policy</h1>
                <span className="text-white text-center py-2">Last edited on <b>18/06/2024</b></span>
            </div>
            <div className="px-12 md:px-24 mt-12 mb-4" id="overview">
                <H3>Overview</H3>
                <P>This website is maintained, and administered by <b>:bitspace</b>. Throughout the site, the terms &quot;bitspace&quot;, &quot;Bitspace&quot;, &quot;we&quot;, &quot;us&quot; and &quot;our&quot; refer to <b>:bitspace</b>. We refer to those who visit our website and those who use our web and mobile applications collectively as &quot;users&quot; or &quot;clients&quot;. We are committed to protecting the privacy and security of the personal information which we may collect from the users or website visitors (referred to as you or your). This Privacy Policy describes the specific policies and procedures we use to collect, utilise and disclose and share with others.</P>
                <P>Bitspace is a dynamic and innovative organization that provides a platform for young and talented coders to showcase their skills by creating and contributing to open-source projects. We know, and understand the importance of privacy and security, and we assure that we DO NOT collect any information without the users consent, and we NEITHER have the intention NOR the implementation to share any of the information illegally.</P>
            </div>
            <div className="px-12 md:px-24 my-4" id="collected-information">
                <H3>Information we collect</H3>
                <H4>Contact Information</H4>
                <P>We use your personal information from your GitHub account, such as profile photo, name, and email address, for the profile page, when used to create an account on our website. </P>
                <H4>Payment and Billing</H4>
                <P>We might collect your billing name, address and payment method, in case of paid events (if any). Payment is usually handled through a payment partner. We <b>NEVER</b> collect your card details or other details regarding the account used for payment. The payment account information will be obtained and processed by our online payment partner, during the time of registration of a paid event.
                </P>
                <H4>Log Files</H4>
                <P>Bitspace follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the Privacy Policy Generator.</P>
                <H4>Cookies</H4>
                <P>Like any other website, :bitspace uses &quot;cookies&quot;. These cookies are used to store information including visitors preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users experience by customizing our web page content based on visitors browser type and/or other information. Additionally, cookies are used to store the user session after logging in through GitHub account</P>
            </div>
            <div className="px-12 md:px-24 my-4" id="processing">
                <H3>Processing your Information</H3>
                <P><b>In Short:</b> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</P>
                <P>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</P>
                <ol className="px-4">
                        <li><b>1.</b> <b>To facilitate account creation and authentication</b> and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
                        <li><b>2.</b> <b>To save or protect an individual’s vital interests.</b> We may process your information when necessary to save or protect an individual’s vital interests, such as to prevent harm.</li>
                        <li><b>3.</b> <b>To send messages to the subscribed users</b>, through their email address and sometimes through their mobile number. The users can prefer not to disclose the mobile number. The mail address will be collected from your GitHub account.</li>
                </ol>
            </div>
            <div className="px-12 md:px-24 my-4" id="consent">
                <H3>How we protect your information</H3>
                <P>We implement proper data collection, storage and processing practices and security measures to ensure protection against unauthorized access, alteration, disclosure or destruction of your personal information, access tokens, transaction information and data stored in our server. We do update our security measures frequently, such that they are up to date, and are resistant to current threats and vulnerabilities.</P>
            </div>
            <div className="px-12 md:px-24 my-4" id="consent">
                <H3>Consent</H3>
                <P>By using our website, you hereby consent to our <b>Privacy Policy</b> and agree to its <Link href="/legals/terms" className="font-bold no-underline hover:underline">Terms and Conditions</Link></P>
            </div>
        </section>
    )
}
