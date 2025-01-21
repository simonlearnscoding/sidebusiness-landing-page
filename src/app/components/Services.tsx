import { Code, TrendUp, PenNib, ShoppingCart } from "@phosphor-icons/react";

export default function Services({ id }: { id: string }) {
  const services = [
    {
      name: "Code",
      icon: Code,
      bullets: [
        "Web Applications",
        "Mobile Apps",
        "AI Integration",
        "Cloud Integration",
        "CMS Integration",
        "Custom Solutions",
      ],
    },

    {
      name: "Design",
      icon: PenNib,
      bullets: [
        "User Interface - UI",
        "User Experience - UX",
        "Custom Webdesign",
        "Design Assets",
        "MVP Prototypes",
        "Design Audit",
      ],
    },
    {
      name: "Marketing",

      icon: TrendUp,
      bullets: [
        "SEO",
        "Branding",
        "Social Media",
        "Email Marketing",
        "Google Analytics",
        "CRO",
      ],
    },
    {
      name: "E-commerce",
      icon: ShoppingCart,
      bullets: [
        "Webflow",
        "Wordpress",
        "Shopify",
        "Copywriting",
        "Landing Page",
        "Web Application",
      ],
    },
  ];
  return (
    <section id={id} className="flex mt-10 flex-col">
      <div className="mt-5 md:max-w-2xl lg:max-w-3xl xl:max-w-5xl md:mx-auto mx-4 ">
        <h1 className=" text-white text-center  w-full  ">
          We Design, Build, And Brand it{" "}
          <span className="span pl-1">Seamlessly</span>
        </h1>
      </div>

      <div className="w-full  px-4 flex lg:px-20 gap-3  lg:gap-4 py-8 mt-4 lg:mt-24 overflow-x-auto whitespace-nowrap">
        {services.map((service) => (
          <Service
            Icon={service.icon}
            name={service.name}
            bullets={service.bullets}
            key={service.name}
          />
        ))}
      </div>
    </section>
  );
}

function Service({ Icon, name, bullets }) {
  return (
    <div className=" p-5 lg:p-8  flex hover:bg-gradient-to-tr hover:from-gray-900 hover:to-gray-800 transition-all   lg:flex-1 h-full   bg-gray-800 rounded-3xl border-solid border-[2px]  border-gray-900 hover:border-white   flex-col">
      <div className="flex text-white flex-col  items-start gap-8 lg:gap-6 ">
        <Icon size={32} />
        <div className=" font-sans font-medium text-4xl text-white ">
          {name}
        </div>
      </div>
      <ul className=" list-disc pl-8 mt-4 lg:mt-6">
        {bullets.map((bullet, index) => (
          <li key={index} className="font-sans  text-white text-2xl">
            {" "}
            {bullet}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
