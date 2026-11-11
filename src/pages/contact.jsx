import {
  Mail,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  Globe,
} from "lucide-react";
import { Link } from "react-router";

const Contact = () => {
  const email = "tiwarisusheel2022@gmail.com";

  return (
    <section className="min-h-screen bg-[#0c0c0f] px-5 pb-20 pt-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
         <Link
          to="/"
          className="mb-8 inline-flex text-sm text-gray-400 transition hover:text-orange-400"
        >
          ← Back to Home
        </Link>
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-sm font-medium text-orange-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
            Open to Opportunities
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Looking for My Next
            <span className="mt-2 block text-orange-400">
              Frontend Opportunity.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            I’m currently open to frontend developer opportunities where I can
            contribute my React.js experience, build meaningful products, and
            continue growing as a developer.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <a
             href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
             target="_blank"
             rel="noreferrer"
            className="group rounded-3xl border border-white/10 bg-[#141416] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-400/40 sm:p-9"
          >
            <div className="flex items-start justify-between">
              <div className="rounded-2xl border border-orange-400/20 bg-orange-400/10 p-4">
                <Mail className="h-7 w-7 text-orange-400" />
              </div>

              <ArrowUpRight className="h-5 w-5 text-gray-500 transition group-hover:text-orange-400" />
            </div>

            <h2 className="mt-7 text-xl font-semibold">
              Contact Me
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              For frontend developer opportunities and professional inquiries.
            </p>

            <p className="mt-5 break-all text-sm font-medium text-orange-300">
              {email}
            </p>
          </a>

          {/* Location */}
          <div className="rounded-3xl border border-white/10 bg-[#141416] p-7 transition duration-300 hover:border-orange-400/30 sm:p-9">
            <div className="w-fit rounded-2xl border border-orange-400/20 bg-orange-400/10 p-4">
              <MapPin className="h-7 w-7 text-orange-400" />
            </div>

            <h2 className="mt-7 text-xl font-semibold">
              Location & Availability
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Based in India and available for remote frontend opportunities.
            </p>

            <p className="mt-5 text-sm font-medium text-orange-300">
              Open to Remote & On-site Roles
            </p>
          </div>

        </div>

        {/* Social Links */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#191715] to-[#141416] p-7 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-orange-400" />

                <h2 className="text-2xl font-bold">
                  Professional Profiles
                </h2>
              </div>

              <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
                Take a look at my projects, source code, and professional
                background.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">

              <a
                href="https://github.com/tiwarisusheel"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium transition hover:border-orange-400/40 hover:text-orange-300"
              >
                <Globe size={18} />
                GitHub
                <ArrowUpRight size={15} />
              </a>

              <a
                href="https://www.linkedin.com/in/susheel-tiwari-3b4a2069/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium transition hover:border-orange-400/40 hover:text-orange-300"
              >
                <Globe size={18} />
                LinkedIn
                <ArrowUpRight size={15} />
              </a>

            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500">
            Thank you for visiting my portfolio.
            <span className="ml-1 text-orange-400">
              I’m open to the right opportunity.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;