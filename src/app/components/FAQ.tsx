import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QA = [
  {
    Question: "Why did we create Seamless Web?",
    Answer: `Starting a business is a challenge with your primary focus being to develop the best possible product or service. \n However, getting your business in the digital space presents an entirely different set of challenges. Entrepreneurs and business owners can feel overwhelmed having to juggle both of these demands. That’s where our team steps in to take on this challenge, enabling you to focus on other important business priorities.`,
  },
  {
    Question: "How do we help you?",
    Answer:
      "We conduct a comprehensive analysis of your current website to identify improvements that better the user experience as well as increasing customer conversions. This is done through better web design and leveraging analytics tools to optimize your website.",
  },
  {
    Question: "Who is behind Seamless Web?",
    Answer:
      " An international team who are experts in marketing, designing, and developing. These three areas are essential pillars to creating a successful website. Driven by passion and expertise in our respective fields, we have decided to come together to help businesses to take that next step into the digital space. ",
  },

  {
    Question:
      "What makes Seamless Web different from other web agencies and builders?",
    Answer:
      "At Seamless, we prioritize you—the client—above all else, believing by helping your business grow, ours will too. We believe in open communication and ongoing dialogue with our clients. From design decisions to updates on your new website, we keep you informed every step of the way. \n Unlike web builders, where you're often left to figure things out on your own, at Seamless we stand by your side. The Seamless team’s sole goal is to bring you success and won’t be satisfied until that goal is achieved. ",
  },
  {
    Question:
      "How will my website be after working with the Seamless Web Team?",
    Answer:
      "You will have a website that will reflect the quality and beauty of your product or service. With this new first impression and improved marketing, more people will find your website and have the inclination to follow through becoming a conversion. Doing everything on your own might seem cost-effective, but in reality, you are cutting out your future clients who either they couldn’t find your business or website or wasn’t sold on how it looks. There is already enough competition, why send more potential clients/customers their way? We would like the opportunity to be part your journey to success not one where asking yourself the question, ‘what if?’",
  },

  {
    Question: " When will my website be completed? ",
    Answer:
      "The timeline for completing your website depends on the complexity of the project and your specific requirements. By booking an appointment with us, we can better understand your needs and provide a detailed timeline tailored to your goals.",
  },

  {
    Question: " How much does a website cost? ",
    Answer:
      "The cost of a website varies depending on your specific needs and goals. To provide you with a detailed and accurate estimate, we recommend booking an appointment with us.",
  },
];

export default function FAQ({}) {
  return (
    <div className="flex  mt-8 lg:mt-28 w-full items-center gap-4 flex-col justify-center">
      <h1>FAQ:</h1>
      <div className="font-sans text-gray-800 tracking-[-6%] mx-8 text-center text-2xl">
        Because we don't want to leave you wondering
      </div>

      <div className="w-full mt-10 lg:mt-20 px-5 lg:px-20 text-xl">
        <Accordion className="font-sans z-10 w-full" type="single" collapsible>
          {QA.map((qa, index) => (
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="font-medium lg:text-2xl text-xl">
                {qa.Question}
              </AccordionTrigger>
              <AccordionContent className="text-xl whitespace-pre-line  lg:text-2xl">
                {qa.Answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
