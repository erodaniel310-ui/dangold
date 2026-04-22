import { motion } from "framer-motion";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";

void motion;

const teamMembers = [
  {
    name: "ROTIMI OBE",
    role: "Team Lead - Security & Event Coordination | Business Promotion & Visibility Support",
    image: img1,
    description:
      "Provides strategic leadership for event operations, venue security coordination, and business promotion support. Oversees planning structure, execution standards, and visibility strategies that help clients achieve safe, well-organized, and impactful events.",
  },
  {
    name: "OLUWATOYIN OBE",
    role: "Lead Wedding Compere & Event Coordinator",
    image: img2,
    description:
      "Specializes in traditional weddings and cultural ceremonies, ensuring proper event flow, family protocol coordination, and confident guest engagement. Brings professionalism, cultural accuracy, and structured coordination to every ceremony.",
  },
  {
    name: "DANIEL ADESHINA",
    role: "Event Production Supervisor",
    
    description:
      "Responsible for logistics planning, vendor coordination, stage setup supervision, and overall event structure execution. Ensures seamless delivery from preparation through completion with attention to detail and operational efficiency.",
  },
];

export default function Team() {
  return (
    <motion.section
      id="our-team"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 text-center"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-3xl font-medium"
        >
          Our Team
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
              className="overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-gray-100"
            >
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-[3/3.5] w-full object-cover"
              />
              <div className="space-y-3 p-5">
                <p className="text-sm font-medium text-gray-900">{member.name}</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-500">
                  {member.role}
                </p>
                <p className="text-sm leading-6 text-gray-600">
                  {member.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
