import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QA = [
  {
    Question: "Why did we create SeamlessWeb?",
    Answer:
      "To help those who are struggling with their current website or to help create one.",
  },
  {
    Question: "How do we help you?",
    Answer:
      "We analyze your website and find improvements in order to increase conversion, user experience, and superior designs.",
  },
  {
    Question: "Who is behind Seamless Web?",
    Answer:
      " An international team who are gifted in marketing, designing, and developing. ",
  },
];

export default function FAQ({}) {
  return (
    <div className="flex mt-8 w-full items-center gap-4 flex-col justify-center">
      <h1>FAQ:</h1>
      <div className="font-inter text-gray-800 tracking-[-6%] mx-8 text-center text-2xl">
        Quick questions to answer because you don’t have to wonder
      </div>

      <div className="w-full mt-10 px-5 text-xl">
        <Accordion className="font-sans w-full" type="single" collapsible>
          {QA.map((qa, index) => (
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="font-medium text-xl">
                {qa.Question}
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                {qa.Answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
