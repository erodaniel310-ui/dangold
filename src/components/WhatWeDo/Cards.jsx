import { motion } from "framer-motion";
import eventImage from "../../assets/event.jpg";
import stageImage from "../../assets/4.jpg";
import marketingImage from "../../assets/marketing.jpg";
import securityImage from "../../assets/security.jpg"
import support from "../../assets/2.jpg"

void motion;

const whatsappMessage = encodeURIComponent(
  "Hello Dangold, I would like to book your service."
);
const whatsappLink = `https://api.whatsapp.com/send?phone=2348037485595&text=${whatsappMessage}`;

const cards = [
  {
    id: 1,
    layout: "right",
    title: "Event Planning & Coordination",
    description:
      "We manage your event from concept to completion so you enjoy a smooth, stress-free experience without worrying about logistics.",
    image: eventImage,
    imageAlt: "Event planning and coordination",
    points: [
      " Event timeline planning",
      "Vendor coordination",
      "Guest experience management",
'Program structure supervision',
'Corporate and private event coordination',
    ],
  },
  {
    id: 2,
    layout: "left",
    title: "Event Production & Stage Setup",
    description:
      "We design and organize professional stage and venue arrangements that create visually appealing and well-structured event environments.",
    image: stageImage,
    imageAlt: "Event security services",
    points: [
      "Stage layout coordination",
      "Venue setup supervision",
      " Equipment positioning support",
'Seating arrangement planning',
'Vendor setup alignment',
    ],
  },
  {
    id: 3,
    layout: "right",
    title: "Traditional Wedding Compere Services",
    description:
      "We professionally coordinate traditional engagement and wedding ceremonies with cultural accuracy, structured flow, and confident guest engagement.",
    image: marketingImage,
    imageAlt: "Business promotion and marketing",
    points: [
      "Bride & groom family coordination",
      "Cultural protocol guidance",
      " Ceremony flow management",
'Guest interaction and stage anchoring',
'Engagement program direction',
    ],
  },
{
    id: 4,
    layout: "left",
    title: "Event Security Services",
    description:
      "Our trained event security professionals provide structured security coordination to ensure safe, controlled, and successful events.",
    image: securityImage,
    imageAlt: "Event Security Services",
    points: [
      "Access control supervision",
      "Crowd control management",
      " VIP protection coordination",
' Venue safety support',
'Security personnel deployment',
    ],
  },
{
    id: 5,
    layout: "right",
    title: "Business Promotion & Brand Visibility Support",
    description:
      "We help businesses and event vendors increase visibility and attract the right audience through strategic digital promotion support.",
    image: support,
    imageAlt: "Business Promotion & Brand Visibility Support",
    points: [
      "Social media promotion support",
      " Flyer and content design",
      " Event awareness campaigns",
' Vendor positioning strategies',
'Digital marketing resource support',
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

function TextBlock({ card }) {
  const handleWhatsappClick = () => {
    window.location.href = whatsappLink;
  };

  return (
    <div className="max-w-xl rounded-[28px] border border-gray-100 bg-white/90 p-8 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.45)]">
      <h3 className="text-2xl font-semibold text-gray-800">{card.title}</h3>
      <p className="mt-3 text-sm leading-7 text-gray-500">{card.description}</p>
      <ul className="mt-6 space-y-3">
        {card.points.map((point) => (
          <li key={point} className="flex items-center gap-3 text-sm text-gray-700">
            <span className="h-2.5 w-2.5 flex-none rounded-full bg-blue-600" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        aria-label={`Book ${card.title} on WhatsApp`}
        onClick={handleWhatsappClick}
        className="relative z-10 mt-8 inline-flex cursor-pointer items-center gap-3 rounded-lg bg-[#25D366] px-4 py-2 text-md font-semibold text-white shadow-[0_16px_35px_-18px_rgba(37,211,102,0.95)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5b] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        <span>Book Us Now on WhatsApp</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19.1 4.9A9.9 9.9 0 0 0 3.4 16.8L2 22l5.4-1.4a9.9 9.9 0 0 0 4.7 1.2h.1A9.9 9.9 0 0 0 19.1 4.9Zm-6.9 15.2h-.1a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.2.8.9-3.1-.2-.3a8.2 8.2 0 1 1 7.1 4Zm4.5-6.1c-.2-.1-1.3-.6-1.5-.7s-.4-.1-.6.1-.7.7-.8.8-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.3 7.3 0 0 1-1.4-1.8c-.1-.2 0-.4.1-.5l.4-.4.3-.4c.1-.1.1-.3 0-.4s-.6-1.5-.8-2-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.2.9 2.3a9.4 9.4 0 0 0 3.6 3.2c2.1.9 2.1.6 2.5.6s1.3-.5 1.5-.9.2-.9.1-.9-.2-.1-.4-.2Z" />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default function Cards() {
  return (
    <section className="py-16 px-6 space-y-20 max-w-5xl mx-auto">
   
      {cards.map((card, i) => (
        <motion.div
          key={card.id}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className={`flex flex-col items-center gap-10 md:flex-row ${
            card.layout === "left" ? "md:flex-row-reverse" : ""
          }`}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="flex-1"
          >
            <div className="overflow-hidden rounded-[30px] border border-gray-100 bg-white p-3 shadow-[0_22px_55px_-30px_rgba(15,23,42,0.45)]">
              <img
                src={card.image}
                alt={card.imageAlt}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-72 w-full rounded-[22px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="flex-1"
          >
            <TextBlock card={card} />
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
