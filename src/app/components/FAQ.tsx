import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QA = [
  {
    Question: "Why did we create Seamless Web?",
    Answer:
      "Creating a business is a challenge where your focus is on building the best possible product or service. Getting your business in the digital space is a whole other challenge in itself. Entrepreneurs and business owners can feel overwhelmed juggling both tasks. We step in as a team to remove that burden by getting your business up and running online.",
  },
  {
    Question: "How do we help you?",
    Answer:
      "We analyze your current website and find improvements to better the user experience and increase customer conversions. This is achieved through better web design and using software and tools to analyze website data.",
  },
  {
    Question: "Who is behind Seamless Web?",
    Answer:
      "An international team gifted in marketing, designing, and developing. These three areas are key to creating a successful website. We are passionate about what we do and have come together to help businesses take the next step by upgrading their website and marketing strategy.",
  },
  {
    Question: "When will my website be completed?",
    Answer:
      "The timeline depends on a case-by-case basis. If you book an appointment with us, we can provide a more detailed estimate for your specific project.",
  },
];

export default function FAQ({}) {
  return (
    <div className="flex mt-8 lg:mt-28 w-full items-center gap-4 flex-col justify-center">
      <h1>FAQ:</h1>
      <div className="font-sans text-gray-800 tracking-[-6%] mx-8 text-center text-2xl">
        Quick questions to answer because you don’t have to wonder
      </div>

      <div className="w-full mt-10 lg:mt-20 px-5 lg:px-20 text-xl">
        <Accordion className="font-sans w-full" type="single" collapsible>
          {QA.map((qa, index) => (
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="font-medium lg:text-2xl text-xl">
                {qa.Question}
              </AccordionTrigger>
              <AccordionContent className="text-xl  lg:text-2xl">
                {qa.Answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
