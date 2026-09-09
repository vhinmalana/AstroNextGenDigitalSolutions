import Link from "next/link";

import {
  ArrowRight,
  Code2,
  Globe2,
  Network,
  ShoppingCart,
  Workflow,
  ShieldCheck,
} from "lucide-react";

import { siteData } from "@/data/siteData";

const icons = [
  Globe2,
  Code2,
  ShoppingCart,
  Network,
  Workflow,
  ShieldCheck,
];

export default function SolutionsPage() {
  return (
    <main>

      <section className="page-hero">

        <div className="container narrow">

          <span className="section-kicker">
            Solutions
          </span>

          <h1>
            Technology built around
            your business.
          </h1>

          <p>
            Practical software and digital solutions
            for organizations that want to work smarter,
            serve customers better, and grow with
            confidence.
          </p>

        </div>

      </section>


      <section className="section">

        <div className="container solution-list">

          {siteData.services.map(
            (service, index) => {

              const Icon = icons[index];

              return (
                <article
                  className="solution-row"
                  key={service.title}
                >

                  <div className="solution-index">
                    {service.number}
                  </div>

                  <div className="solution-icon">
                    <Icon size={25} />
                  </div>

                  <div className="solution-copy">

                    <h2>
                      {service.title}
                    </h2>

                    <p>
                      {service.description}
                    </p>

                  </div>

                  <ArrowRight
                    className="solution-arrow"
                    size={21}
                  />

                </article>
              );
            }
          )}

        </div>

      </section>


      <section className="section compact-cta">

        <div className="container">

          <div className="simple-cta">

            <div>

              <span className="section-kicker">
                Need something specific?
              </span>

              <h2>
                Let&apos;s design the
                right solution.
              </h2>

            </div>

            <Link
              href="/contact"
              className="button button-primary"
            >
              Start a conversation
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}