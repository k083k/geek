import AnimatePresenceWrapper from "@/components/utils/AnimatePresenceWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  applicationName: "Turntabl Website",
  title: "Turntabl Privacy Policy",
  description:
    "We Are Turntabl, Providing Innovative Software Engineering Solutions To Businesses All Over the World",
  publisher: "Turntabl",
  authors: [{ name: "Turntabl" }],
  keywords: [
    "Turntabl",
    "Tech",
    "Solution",
    "Technology",
    "Ghana",
    "Finance",
    "Software",
    "Digital",
    "Africa",
    "Privacy",
  ],
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#efefef" },
  ],
};

export default function Privacy() {
  return (
    <AnimatePresenceWrapper>
      <div className="container mx-auto px-12 py-8 text-lg">
        <h2 className="text-5xl font-bold mb-4">turntabl Privacy Policy</h2>
        <h4 className="text-xl mb-8">Effective Date: October 2021</h4>
        <div className="content">
          <p className="mb-4">
            When you visit our website or subscribe to and use the Services, you
            voluntarily share certain personal information (which may identify
            you directly or indirectly) with us. When you use the Services,
            certain information about your devices and Services usage is
            automatically collected through cookies and other tracking
            technologies.
            <br />
            <br />
            This privacy policy describes how we collect, use, and share your
            personal and technical information and how you can exercise your
            privacy rights. If you have any questions about the policy, please
            email us at info@turntabl.io
            <br />
            <br />
            We use your information to provide and improve the Services. By
            using the Services, you agree to the collection and use of
            information in accordance with this policy and the turntabl Terms of
            Service, accessible from turntabl.io
          </p>
        </div>

        <div className="content">
          <h2 className="text-4xl font-bold mb-4">
            Information Collection and Use
          </h2>
          <h3 className="text-2xl font-bold mb-2">Personal Information</h3>
          <p className="mb-4">
            When you set up an account and use our Services, we may ask you to
            provide us with certain personally identifiable information that can
            be used to contact or identify you. This personal information may
            include, but is not limited to:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li className={"mb-4"}>
              Business contact information (e.g., email and physical addresses,
              first and last name, telephone number, company name, title).
            </li>
            <li className={"mb-4"}>
              Marketing information (e.g., contact preferences).
            </li>
            <li className={"mb-4"}>Account log-in credentials.</li>
            <li className={"mb-4"}>
              Customer support data (e.g., troubleshooting, help query
              communications).
            </li>
            <li className={"mb-4"}>
              Payment information (e.g., billing address).
            </li>
          </ul>
          <p className="mb-4">
            We may use your personal information to contact you with
            newsletters, marketing or promotional materials, and other
            information that may be of interest to you. You may opt out of
            receiving any, or all, of these communications from us by following
            the unsubscribe link or the instructions provided in any email we
            send. We do not sell your personal information or your contact list.
          </p>
        </div>

        <div className="content">
          <h2 className="text-4xl font-bold mb-4">Usage Data</h2>
          <p className="mb-4">
            We may also collect information on how the Services are accessed and
            used. This usage data may include information such as:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li className={"mb-4"}>
              Your computer&apos;s Internet Protocol address (IP address),
              browser type, browser version.
            </li>
            <li className={"mb-4"}>
              The pages of our Services that you visit, the time and date of
              your visit, the time spent on those pages, unique device
              identifiers, and other diagnostic data.
            </li>
            <li className={"mb-4"}>Email campaign performance.</li>
          </ul>
        </div>

        <div className="content">
          <h2 className="text-4xl font-bold mb-4">
            Tracking &amp; Cookies Data
          </h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to track activity
            on our website and Services. Cookies are small data files placed on
            your computer or other internet-enabled device that enable the
            Services’ features and functionality. They allow us to record
            information when you visit or interact with our website and
            Services. Other tracking technologies, such as web beacons and
            pixels, work similarly to cookies, placing small data files on your
            device that monitor your website and Services activity. Examples of
            Cookies we use are:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li className={"mb-4"}>
              Session cookies. We use session cookies to operate our Services.
              Session-based cookies last only while your browser is open and are
              automatically deleted when you close your browser.
            </li>
            <li className={"mb-4"}>
              Persistent cookies. We use persistent cookies to remember your
              preferences and various settings. Persistent cookies last until
              you or your browser delete them or until they expire.
            </li>
            <li className={"mb-4"}>
              Security cookies. We use cookies to enable and support our
              security features and to help us detect malicious activity.
            </li>
            <li className={"mb-4"}>
              Third-party cookies. We may use third-party service providers to
              monitor and analyze the use of our Services. For example, we use
              Google Analytics to track and report on website traffic.
            </li>
          </ul>
          <p className="mb-4">
            You can instruct your browser to refuse cookies or to indicate when
            a cookie is being sent. However, if you do not accept cookies, you
            may not be able to use some portions of our Services. Our partners
            may use cookies to provide us with information about your
            interactions with their products, but the use of those third-party
            cookies would be subject to the service provider’s policies.
          </p>
        </div>

        <div className="content">
          <h2 className="text-4xl font-bold mb-4">Use of Information</h2>
          <p className="mb-4">
            turntabl uses your personal information for various purposes:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li className={"mb-4"}>
              To provide, maintain, and improve the Services.
            </li>
            <li className={"mb-4"}>
              To notify you about changes to the Services.
            </li>
            <li className={"mb-4"}>
              To allow you to participate in interactive features of the
              Services when you choose to do so.
            </li>
            <li className={"mb-4"}>To provide customer support.</li>
            <li className={"mb-4"}>
              To gather analysis or other data so we can improve the Services.
              To monitor the usage of our Services.
            </li>
            <li className={"mb-4"}>
              To detect, prevent, and address technical issues.
            </li>
            <li className={"mb-4"}>
              To provide you with news, special offers, and general information
              about other goods, services, and events which we offer that are
              similar to those that you have already purchased or enquired about
              unless you have opted not to receive such information.
            </li>
            <li className={"mb-4"}>
              To comply with legal requirements and to enforce compliance with
              our Terms of Service.
            </li>
          </ul>
        </div>

        <div className="content">
          <h2 className="text-4xl font-bold mb-4">Retention of Information</h2>
          <p className="mb-4">
            turntabl will retain your personal information only for as long as
            is necessary for the purposes set out in this privacy policy. When
            we no longer need to use your personal information and there is no
            need for us to keep it to comply with our legal or regulatory
            obligations, we will either remove it from our systems or
            depersonalize it so that we can’t identify you.
          </p>
        </div>

        <div className="content">
          <h2 className="text-4xl font-bold mb-4">Transfer of Information</h2>
          <p className="mb-4">
            Your information may be transferred to - and maintained on -
            computers located outside of your state, province, country, or other
            governmental jurisdiction where the data protection laws may differ
            from those of your jurisdiction.
          </p>
          <p className="mb-4">
            If you are located outside the United States and choose to provide
            personal information to us, please note that we transfer that
            information to the United States and process it there. Your use of
            the website and Services followed by your submission of such
            information represents your agreement to that transfer.
          </p>
          <p className="mb-4">
            turntabl will not transfer your personal information to an
            organization or a country unless there are adequate controls in
            place, including the security of your data and personal information.
          </p>
        </div>

        <div className="content">
          <h2 className="text-4xl font-bold mb-4">Disclosure of Information</h2>
          <p className="mb-4">
            turntabl may share your personal information as follows:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li className={"mb-4"}>
              If we are involved in a reorganization, merger, acquisition, or
              asset sale, your personal information may be transferred. We will
              provide notice before your personal information is transferred and
              becomes subject to a different Privacy Policy.
            </li>
            <li className={"mb-4"}>
              If required to do so by law or in response to valid requests by
              public authorities (e.g., a court or a government agency).
            </li>
            <li className={"mb-4"}>
              If we have a good faith belief that such action is necessary to
              protect the safety of turntabl subscribers or the public, the
              rights or property of turntabl, to prevent or investigate possible
              wrongdoing in connection with the Services, and to protect against
              legal
            </li>
          </ul>
        </div>

        <div className="content">
          <h2 className="text-4xl font-bold mb-4">Information Security</h2>
          <p className="mb-4">
            The security of your information is important to us, but remember
            that no method of transmission over the Internet or method of
            electronic storage is 100% secure. We use reasonable and appropriate
            physical, technical, and administrative safeguards to protect
            personal information from loss, misuse, unauthorized access, and
            destruction.
          </p>
        </div>

        <div className="content">
          <h2 className="text-3xl font-bold mb-4">
            &quot;Do Not Track&quot; Policy
          </h2>
          <h3 className="text-2xl font-bold mb-2">
            Our Policy on &quot;Do Not Track&quot; Signals under the California
            Online Protection Act (CalOPPA)
          </h3>
          <p className="mb-4">
            Our website and Services do not collect personal information about
            your online activities over time and across third-party websites or
            online services. Therefore, “do not track” signals transmitted from
            web browsers do not apply to our website or Services, and we do not
            alter any of our data collection and use practices upon receipt of
            such a signal. We do not support Do Not Track (&quot;DNT&quot;). Do
            Not Track is a preference you can set in your web browser to inform
            websites that you do not want to be tracked.
          </p>
          <p className="mb-4">
            You can enable or disable Do Not Track by visiting the Preferences
            or Settings page of your web browser.
          </p>
        </div>

        <div className="content">
          <h2 className="text-4xl font-bold mb-4">
            Residents of the European Economic Area
          </h2>
          <p className="mb-4">
            If you are a resident of the European Economic Area, Switzerland, or
            the United Kingdom, under the General Data Protection Regulation
            (GDPR), turntabl’s legal basis for processing and using personal
            information as described in this privacy policy derives from the
            following:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li className={"mb-4"}>
              To perform our Services contract with you
            </li>
            <li className={"mb-4"}>You have given us permission to do so</li>
            <li className={"mb-4"}>
              The processing is in our legitimate interest in making the
              Services safe and improving its function and features
            </li>
            <li className={"mb-4"}>For payment processing purposes</li>
            <li className={"mb-4"}>To comply with the law</li>
          </ul>
        </div>

        <div className="content">
          <h2 className="text-4xl font-bold mb-4">
            Residents’ Rights under the GDPR
          </h2>
          <p className="mb-4">
            If you wish to be informed about what personal information we hold
            about you and if you want it to be removed from our systems, please
            email us at marketing@turntabl.io. In certain circumstances and
            depending on the country in which you reside, you may have the
            following data protection rights:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li className={"mb-4"}>
              The right to access, update or delete the information we have on
              you. You can access, update or request deletion of your Personal
              Data directly within your account settings section. If you are
              unable to perform these actions yourself, please contact us at
              marketing@turntabl.io to assist you.
            </li>
            <li className={"mb-4"}>
              The right of rectification. You have the right to have your
              information rectified if that information is inaccurate or
              incomplete.
            </li>
            <li className={"mb-4"}>
              The right to object. You have the right to object to our
              processing of your Personal Data.
            </li>
            <li className={"mb-4"}>
              The right of restriction. You have the right to request that we
              restrict the processing of your personal information.
            </li>
            <li className={"mb-4"}>
              The right to data portability. You have the right to be provided
              with a copy of the information we have on you in a structured,
              machine-readable, and commonly used format.
            </li>
            <li className={"mb-4"}>
              The right to withdraw consent. You also have the right to withdraw
              your consent at any time where turntabl relied on your consent to
              process your personal information.
            </li>
          </ul>
          <p className="mb-4">
            Please note that we may ask you to verify your identity before
            responding to such requests. You have the right to complain to a
            Data Protection Authority about our collection and use of your
            Personal Data. For more information, please contact your local data
            protection authority.
          </p>
        </div>

        <div className="content">
          <h2 className="text-4xl font-bold mb-4">Service Providers</h2>
          <p className="mb-4">
            We may employ third-party companies and individuals to facilitate
            our Services (&quot;Service Providers&quot;), provide the Services
            on our behalf, perform Services-related services, or assist us in
            analyzing how our Services are used. These third parties have access
            to your personal information only to perform these tasks on our
            behalf and are obligated not to disclose or use it for any other
            purpose.
          </p>
        </div>

        <div className="content">
          <h2 className="text-4xl font-bold mb-4">Analytics</h2>
          <p className="mb-4">
            We may use the following third-party Service Providers to monitor
            and analyze the use of our Service:
          </p>
          <p className="mb-4">
            Google Analytics is a web analytics service offered by Google that
            tracks and reports website traffic. Google uses the data collected
            to track and monitor the use of our Service. This data is shared
            with other Google services. Google may use the collected data to
            contextualize and personalize the ads of its own advertising
            network. You can opt-out of having made your activity on the Service
            available to Google Analytics by installing the Google Analytics
            opt-out browser add-on. The add-on prevents the Google Analytics
            JavaScript (ga.js, analytics.js, and dc.js) from sharing information
            with Google Analytics about visits activity. For more information on
            the privacy practices of Google, please visit the Google Privacy
            &amp; Terms web page:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>
          </p>
        </div>

        <div className="content">
          <h2 className="text-3xl font-bold mb-4">Links to Other Sites</h2>
          <p className="mb-4">
            Our Services may contain links to other sites that are not operated
            by us. If you click a third-party link, you will be directed to that
            third party&apos;s site. We strongly advise you to review the
            privacy policy of every site you visit. We have no control over and
            assume no responsibility for the content, privacy policies, or
            practices of any third-party sites or services.
          </p>
        </div>

        <div className="content">
          <h2 className="text-4xl font-bold mb-4">Children&apos;s Privacy</h2>
          <p className="mb-4">
            Our Service does not address anyone under the age of 18. We do not
            knowingly collect personally identifiable information from anyone
            under the age of 18. If you are a parent or guardian and you are
            aware that your child has provided us with personal information,
            please contact us at marketing@turntabl.io. If we become aware that
            we have collected personal information from children without
            verification of parental consent, we take steps to remove that
            information from our servers.
          </p>
        </div>

        <div className="content">
          <h2 className="text-2xl font-bold mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update our privacy policy from time to time. We will notify
            you of any changes by posting the new privacy policy on this page.
            We will let you know via email and/or a prominent notice on our
            website or Services update the &quot;effective date&quot; at the top
            of the privacy policy. You are advised to review this policy
            periodically for any changes. Changes to this policy are effective
            when they are posted on this page.
          </p>
        </div>

        <div className="content">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this privacy policy, please contact
            us by email: info@turntabl.io
          </p>
        </div>
      </div>
    </AnimatePresenceWrapper>
  );
}
