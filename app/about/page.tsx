import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { siteData } from "@/data/siteData";

export default function AboutPage() {
  return (
    <main>

      <section className="page-hero">

        <div className="container narrow">

          <span className="section-kicker">
            About Astro NextGen Digital Solutions
          </span>

          <h1>
            Technology should make
            business easier.
          </h1>

          <p>
            Astro NextGen Digital Solutions is a software
            and IT solutions company focused on
            building useful digital products for
            businesses.
          </p>

        </div>

      </section>


      <section className="section about-story">

        <div className="container about-grid">

          <div>

            <span className="section-kicker">
              Our philosophy
            </span>

            <h2>
              Good technology starts with a
              clear understanding of the problem.
            </h2>

          </div>

          <div>

            <p>
              We believe technology projects work
              best when business goals, user needs,
              and technical decisions are aligned
              from the start.
            </p>

            <p>
              Our role is to translate real-world
              requirements into software, websites,
              integrations, and systems that people
              can actually use and organizations can
              confidently operate.
            </p>

          </div>

        </div>

      </section>


      <section className="section principles-section">

        <div className="container">

          <div className="section-heading">

            <div>

              <span className="section-kicker">
                What matters to us
              </span>

              <h2>
                Principles behind
                every project.
              </h2>

            </div>

          </div>


          <div className="principles-grid">

            {siteData.principles.map(
              (item) => (

                <div
                  className="principle"
                  key={item}
                >

                  <CheckCircle2 size={19} />

                  <span>
                    {item}
                  </span>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      <section className="section compact-cta">

        <div className="container">

          <div className="simple-cta">

            <div>

              <span className="section-kicker">
                Work with us
              </span>

              <h2>
                Have a technology challenge?
              </h2>

            </div>

            <Link
              href="/contact"
              className="button button-primary"
            >
              Get in touch
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}