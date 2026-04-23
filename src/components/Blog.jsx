import { useEffect, useState } from "react";
import * as contentful from "contentful";
import { AnimatePresence, motion } from "framer-motion";
console.log("Vite Config Check:", import.meta.env.VITE_CONTENTFUL_SPACE_ID);

void motion;

const client = contentful.createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
});


const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.08,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function BlogCard({ post, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.01 }}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/70 bg-white p-4 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.45)] transition-shadow hover:shadow-[0_24px_60px_-30px_rgba(37,99,235,0.45)]"
    >
      <div className="mb-4 aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
        {post.image ? (
          <motion.img
            src={post.image}
            alt={post.title}
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_58%)] text-sm font-medium uppercase tracking-[0.28em] text-slate-400">
            No Image
          </div>
        )}
      </div>
      <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-600">
        <span className="h-2 w-2 rounded-full bg-blue-500" />
        <span>{post.date}</span>
      </div>
      <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-700">
        {post.title || "Untitled Post"}
      </h3>
      <p className="mb-5 flex-1 text-sm leading-6 text-slate-500">
        {post.excerpt || "No summary available."}
      </p>
      <div className="flex items-center justify-between text-xs font-medium text-slate-500">
        <span>{post.author}</span>
   
      </div>
    </motion.div>
  );
}

function BlogSkeletonCard({ index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="overflow-hidden rounded-[28px] border border-slate-200/70 bg-white p-4 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.25)]"
    >
      <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200">
        <motion.div
          className="absolute inset-y-0 -left-1/3 w-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent"
          animate={{ x: ["0%", "260%"] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.12 }}
        />
      </div>
      <div className="mb-3 h-3 w-24 rounded-full bg-slate-200" />
      <div className="mb-2 h-6 w-3/4 rounded-full bg-slate-200" />
      <div className="mb-2 h-4 w-full rounded-full bg-slate-100" />
      <div className="mb-5 h-4 w-5/6 rounded-full bg-slate-100" />
      <div className="h-4 w-28 rounded-full bg-slate-200" />
    </motion.div>
  );
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await client.getEntries({
          content_type: "blogPost",
        });

        if (response.items) {
          const formatted = response.items.map((item) => ({
            id: item.sys.id,
            title: item.fields.title,
            author: item.fields.author || "Admin",
            date: item.fields.date
              ? new Date(item.fields.date).toLocaleDateString()
              : new Date(item.sys.createdAt).toLocaleDateString(),
            excerpt: item.fields.excerpt,
            image: item.fields.image?.fields?.file?.url
              ? `https:${item.fields.image.fields.file.url}?w=900&h=675&fit=fill&fm=webp&q=75`
              : null,
          }));

          setPosts(formatted);
          setHasError(false);
        }
      } catch {
        setHasError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section
        id="blog"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 font-sans"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Live from Contentful
          </p>
          <h2 className="text-3xl font-bold text-slate-900">Loading Blog Posts</h2>
          <p className="mt-3 text-sm text-slate-500">
            Pulling in the latest stories and preparing the layout.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[0, 1, 2].map((index) => (
            <BlogSkeletonCard key={index} index={index} />
          ))}
        </motion.div>
      </section>
    );
  }

  return (
    <motion.section
      id="blog"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 font-sans"
    >
      <motion.div variants={cardVariants} custom={0} className="mb-12 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Latest Stories
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {hasError ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 py-10 text-center"
          >
            <p className="text-slate-600">Unable to load blog posts right now.</p>
            <p className="mt-2 text-sm text-slate-400">Please check back shortly.</p>
          </motion.div>
        ) : posts.length > 0 ? (
          <motion.div
            key="posts"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {posts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 py-10 text-center"
          >
            <p className="text-slate-600">No published posts found.</p>
            <p className="mt-2 text-sm text-slate-500">
              Make sure your posts are <strong>Published</strong> in Contentful.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
