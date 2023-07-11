import HomeContact from "@/components/home/home-contact";
import HomeFaq from "@/components/home/home-faq";
import HomeWelcome from "@/components/home/home-welcome";
import HomeHero from "../components/home/home-hero";
import HomeClients from "../components/home/home-clients";
import HomeBlog from "../components/home/home-blog";
import {Metadata} from "next";
import AnimatePresenceWrapper from "@/components/utils/AnimatePresenceWrapper";

export const metadata: Metadata = {
    applicationName: "Turntabl Website",
    title: "Turntabl Home Page",
    description:
        "The next revolution in software engineering. From our offices in Ghana and London, we build best-in-class software for the world's biggest enterprises",
    publisher: "Turntabl",
    authors: [{name: "Turntabl"}],
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
        "Home",
    ],
};

export default function Home() {
    return (
        <AnimatePresenceWrapper>
            <>
                <HomeHero></HomeHero>
                <HomeWelcome></HomeWelcome>
                <HomeClients></HomeClients>
                <HomeFaq></HomeFaq>
                <HomeContact></HomeContact>
                <HomeBlog></HomeBlog>
            </>
        </AnimatePresenceWrapper>
    );
}
