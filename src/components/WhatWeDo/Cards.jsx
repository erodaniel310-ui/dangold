import { motion } from "framer-motion";
import eventImage from "../../assets/event.jpg";
import securityImage from "../../assets/security.jpg";
import marketingImage from "../../assets/marketing.jpg";

void motion;

const cards = [
  {
    id: 1,
    layout: "right",
    title: "Event Planning & Coordination",
    description:
      "We turn your ideas into well-organized and memorable events. From weddings and corporate functions to private celebrations, we handle planning, vendor coordination, and full event execution.",
    author: { name: "Dangold Multi-Services", role: "Event Experts", initials: "DM" },
    comment:
      "We focus on delivering smooth, stress-free events so clients can enjoy every moment without worrying about the details.",
    accentColor: "#1D4ED8", // blue
    image: eventImage,
    imageAlt: "Event planning and coordination",
  },
  {
    id: 2,
    layout: "left",
    title: "Event Security Services",
    description:
      "Our trained professionals provide reliable security services including crowd control, VIP protection, and venue safety to ensure every event runs safely and successfully.",
    author: { name: "Dangold Multi-Services", role: "Security Team", initials: "DM" },
    comment:
      "With structured planning and professional execution, we create a safe environment for both hosts and guests.",
    accentColor: "#7C3AED", // purple
    image: securityImage,
    imageAlt: "Event security services",
  },
  {
    id: 3,
    layout: "right",
    title: "Business Promotion & Digital Marketing",
    description:
      "We help businesses grow their visibility through social media promotion, flyer design, and targeted marketing strategies that attract the right audience.",
    author: { name: "Dangold Multi-Services", role: "Marketing Team", initials: "DM" },
    comment:
      "Our goal is to position your brand for growth and connect you with the audience that matters.",
    accentColor: "#F97316", // orange
    image: marketingImage,
    imageAlt: "Business promotion and marketing",
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
  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
      <div className="border-l-4 pl-3" style={{ borderColor: card.accentColor }}>
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white"
            style={{ backgroundColor: card.accentColor }}
          >
            {card.author.initials}
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-700">{card.author.name}</p>
            <p className="text-xs text-gray-400">{card.author.role}</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">{card.comment}</p>
      </div>
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
          className={`flex flex-col md:flex-row items-center gap-10 ${
            card.layout === "left" ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Illustration */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex-1 flex justify-center"
          >
            <div
              className="w-full max-w-md overflow-hidden rounded-3xl border border-gray-200 bg-white p-3 shadow-lg"
              style={{ boxShadow: `0 18px 50px -24px ${card.accentColor}` }}
            >
              <img
                src={card.image}
                alt={card.imageAlt}
                className="h-72 w-full rounded-2xl object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="flex-1">
            <TextBlock card={card} />
          </div>
        </motion.div>
      ))}
    </section>
  );
}
