import {
  Suspense,
  lazy,
  useEffect,
  useRef,
  useState,
} from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const WhatWeDo = lazy(() => import("./components/WhatWeDo/WhatWeDo"));
const About = lazy(() => import("./components/About/About"));
const Team = lazy(() => import("./components/About/Team"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Blog = lazy(() => import("./components/Blog"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function SectionPlaceholder({ id, title, className = "" }) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-6xl scroll-mt-24 px-6 py-16 ${className}`}
      aria-label={`${title} loading`}
    >
      <div className="animate-pulse">
        <div className="mb-4 h-3 w-32 rounded-full bg-slate-200" />
        <div className="mb-10 h-10 w-64 rounded-full bg-slate-200" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.2)]"
            >
              <div className="mb-5 h-40 rounded-2xl bg-slate-200" />
              <div className="mb-3 h-5 w-3/4 rounded-full bg-slate-200" />
              <div className="mb-2 h-4 w-full rounded-full bg-slate-100" />
              <div className="h-4 w-5/6 rounded-full bg-slate-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterPlaceholder() {
  return (
    <section className="bg-gray-900 px-6 pt-16 pb-8 text-gray-400">
      <div className="mx-auto max-w-6xl animate-pulse">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="space-y-4">
              <div className="h-4 w-24 rounded-full bg-white/10" />
              <div className="h-4 w-full rounded-full bg-white/10" />
              <div className="h-4 w-5/6 rounded-full bg-white/10" />
              <div className="h-4 w-2/3 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LazySection({
  children,
  fallback,
  rootMargin = "300px 0px",
}) {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) {
      return undefined;
    }

    const node = containerRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, shouldLoad]);

  return (
    <div ref={containerRef}>
      {shouldLoad ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <LazySection
        fallback={
          <SectionPlaceholder
            id="what-we-do"
            title="What We Do"
          />
        }
      >
        <WhatWeDo />
      </LazySection>
      <LazySection
        fallback={
          <SectionPlaceholder
            id="about"
            title="About"
          />
        }
      >
        <About />
      </LazySection>
      <LazySection
        fallback={
          <SectionPlaceholder
            id="our-team"
            title="Our Team"
          />
        }
      >
        <Team />
      </LazySection>
      <LazySection
        fallback={
          <SectionPlaceholder
            id="testimonials"
            title="Testimonials"
          />
        }
      >
        <Testimonials />
      </LazySection>
      <LazySection
        fallback={
          <SectionPlaceholder
            id="blog"
            title="Blog"
          />
        }
      >
        <Blog />
      </LazySection>
      <LazySection
        fallback={
          <SectionPlaceholder
            id="contact"
            title="Contact"
            className="pb-24"
          />
        }
      >
        <Contact />
      </LazySection>
      <LazySection fallback={<FooterPlaceholder />} rootMargin="150px 0px">
        <Footer />
      </LazySection>
    </>
  );
}
