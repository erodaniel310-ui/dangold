import { motion } from "framer-motion";

void motion;

const teamMembers = [
  { name: "Cloe Marens", role: "President", initials: "CM" },
  { name: "John Rooster", role: "Marketing", initials: "JR" },
  { name: "Will Turner", role: "Marketing", initials: "WT" },
  { name: "Nicolas Stainer", role: "Finance", initials: "NS" },
  { name: "George Hrook", role: "Finance", initials: "GH" },
  { name: "Emily Hopson", role: "Marketing", initials: "EM" },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-medium mb-3"
        >
          Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 max-w-xl mx-auto mb-12 text-sm leading-relaxed"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos
          quaerat sapiente nam, id vero.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
              className="text-left"
            >
              {/* Replace this div with an <img> when you have photos */}
              <div className="w-full aspect-[3/3.5] rounded-xl bg-gray-100 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-lg font-medium">
                  {member.initials}
                </div>
              </div>
              <p className="mt-3 font-medium text-sm text-gray-900">{member.name}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-500 mt-1 mb-2">
                {member.role}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem excepturi corporis qui doloribus perspiciatis ipsa
                modi accusantium repellat.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
