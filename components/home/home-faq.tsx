import { faqs } from "@/core/shared/constants";
import FaqAccordion from "./faq-accordion";

export default function HomeFaq() {
  return (
    <section className="home-faq py-14 bg-white">
      <div className="content padding-x container mx-auto gap-x-10 gap-y-5 flex flex-col md:flex-row md:justify-center">
        <div className="home-faq-text">
          <h3 className="leading-none">Frequently asked questions</h3>
          <p className="py-3">Contact us for more info</p>
        </div>
        <div className="home-faq-questions max-w-[750px] w-full divide-y">
          {faqs.map((faq, index) => {
            return (
              <FaqAccordion
                key={index}
                answer={faq.answer}
                question={faq.question}
                number={`0${index + 1}`}
              ></FaqAccordion>
            );
          })}
        </div>
      </div>
    </section>
  );
}
