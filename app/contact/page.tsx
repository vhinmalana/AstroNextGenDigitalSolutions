import {
  ArrowRight,
  Mail,
  MapPin,
} from "lucide-react";

import { siteData } from "@/data/siteData";

export default function ContactPage() {
  return (
    <main>

      <section className="page-hero">

        <div className="container narrow">

          <span className="section-kicker">
            Contact
          </span>

          <h1>
            Let&apos;s build something useful.
          </h1>

          <p>
            Share a little about your project,
            challenge, or idea. We&apos;ll help you
            figure out the next step.
          </p>

        </div>

      </section>


      <section className="section contact-section">

        <div className="container contact-grid">

          <div className="contact-info">

            <div className="contact-item">

              <Mail size={21} />

              <div>

                <span>
                  Email
                </span>

                <strong>
                  {siteData.company.email}
                </strong>

              </div>

            </div>


            <div className="contact-item">

              <MapPin size={21} />

              <div>

                <span>
                  Location
                </span>

                <strong>
                  {siteData.company.location}
                </strong>

              </div>

            </div>

          </div>


          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >

            <label>

              Name

              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
              />

            </label>


            <label>

              Email

              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                required
              />

            </label>


            <label>

              What can we help with?

              <select
                name="service"
                defaultValue=""
              >

                <option
                  value=""
                  disabled
                >
                  Select a service
                </option>

                <option>
                  Web Development
                </option>

                <option>
                  Software Development
                </option>

                <option>
                  POS Solution
                </option>

                <option>
                  Systems Integration
                </option>

                <option>
                  IT Solution
                </option>

                <option>
                  Other
                </option>

              </select>

            </label>


            <label>

              Message

              <textarea
                name="message"
                rows={6}
                placeholder="Tell us about your project..."
                required
              />

            </label>


            <button
              type="submit"
              className="button button-primary"
            >
              Send inquiry
              <ArrowRight size={17} />
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}