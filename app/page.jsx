"use client";

import { useMemo, useState } from "react";

export default function YapakCampaignWebsite() {
  const priorities = [
    { title: "Education & Human Capital", text: "Expanding access to stronger schools, skills training, and practical learning opportunities for young people across Verre Constituency." },
    { title: "Agriculture & Livelihoods", text: "Supporting farmers, local traders, and community livelihoods with practical representation, advocacy, and development-focused programs." },
    { title: "Infrastructure & Community Development", text: "Advocating for better roads, water access, rural development, and projects that improve everyday life in Verre communities." },
    { title: "Youth & Women Empowerment", text: "Creating inclusive opportunities that support young people and women through empowerment, participation, and targeted community programs." }
  ];

  const updates = [
    { title: "Campaign Structure in Progress", date: "Campaign Update", text: "The campaign is building a strong people-centered platform focused on listening, representation, and meaningful community engagement across Verre Constituency." },
    { title: "Grassroots Engagement", date: "Field Activity", text: "Preparations continue for wider engagement with elders, youth groups, women leaders, and grassroots stakeholders in Verre." },
    { title: "People-First Representation", date: "Message", text: "Hon. Abdullahi Umar Yapak stands for service, practical representation, and a development-focused voice for the constituency." }
  ];

  const stats = [
    { label: "Constituency", value: "Verre" },
    { label: "Focus", value: "Service" },
    { label: "Reach", value: "Grassroots" },
    { label: "Vision", value: "Progress" }
  ];

  const manifestoPillars = [
    { title: "Accessible Representation", text: "Leadership that listens, stays close to the people, and speaks clearly for the needs of Verre Constituency." },
    { title: "Education & Skills", text: "Promoting better learning outcomes, practical training, and youth capacity development across communities." },
    { title: "Agricultural Support", text: "Advocating for programs, infrastructure, and attention that strengthen farming and rural productivity." },
    { title: "Women Inclusion", text: "Encouraging stronger participation, support systems, and development opportunities for women." },
    { title: "Community Infrastructure", text: "Supporting roads, water, electricity, and projects that improve local living conditions." },
    { title: "Youth Opportunity", text: "Backing initiatives that expand skills, entrepreneurship, participation, and hope for younger generations." }
  ];

  const testimonials = [
    { name: "Community Voice", text: "A leader should be close to the people, and this campaign is built around listening and practical representation." },
    { name: "Grassroots Perspective", text: "Verre needs a representative who understands the people and is committed to service, development, and steady engagement." },
    { name: "Supporter View", text: "This platform reflects a serious intention to put community needs, progress, and accountability first." }
  ];

  const gallery = [
    "/yapak-hero.jpg", "/yapak-profile.jpg", "/yapak-hero.jpg",
    "/yapak-profile.jpg", "/yapak-hero.jpg", "/yapak-profile.jpg"
  ];

  const faqItems = [
    { q: "What office is Hon. Abdullahi Umar Yapak contesting for?", a: "He is positioned as Member Representing Verre Constituency." },
    { q: "What does the campaign stand for?", a: "The campaign stands for service, grassroots representation, community development, empowerment, and practical progress." },
    { q: "How can I support the campaign?", a: "You can volunteer, help with mobilization, share campaign updates, and support community-level outreach." }
  ];

  const [formData, setFormData] = useState({ name: "", phone: "", ward: "", role: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const formspreeEndpoint = "https://formspree.io/f/xkoqvode";

  const volunteerSummary = useMemo(() => {
    return `Volunteer Interest%0AName: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0AWard/LGA: ${encodeURIComponent(formData.ward)}%0ARole: ${encodeURIComponent(formData.role)}%0AMessage: ${encodeURIComponent(formData.message)}`;
  }, [formData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const next = {};
    if (!formData.name.trim()) next.name = "Name is required";
    if (!formData.phone.trim()) next.phone = "Phone number is required";
    if (!formData.ward.trim()) next.ward = "Ward / LGA is required";
    if (!formData.role.trim()) next.role = "Please select a role";
    return next;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          candidate: "Hon. Abdullahi Umar Yapak",
          office: "Member Representing Verre Constituency",
          constituency: "Verre Constituency",
          ...formData,
        }),
      });
      if (!response.ok) throw new Error("Submit failed");
      setSubmitted(true);
    } catch {
      alert("Submission failed. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img src="/apc-logo.png" alt="Party logo" className="h-14 w-14 rounded-2xl border border-slate-200 bg-white object-cover shadow-sm" />
            <div>
              <div className="text-xl font-bold tracking-tight">Yapak for Verre</div>
              <div className="text-sm text-slate-600">Full Campaign Website</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#about" className="hover:text-black">About</a>
            <a href="#priorities" className="hover:text-black">Agenda</a>
            <a href="#manifesto" className="hover:text-black">Manifesto</a>
            <a href="#updates" className="hover:text-black">Updates</a>
            <a href="#profile" className="hover:text-black">Profile</a>
            <a href="#gallery" className="hover:text-black">Gallery</a>
            <a href="#testimonials" className="hover:text-black">Voices</a>
            <a href="#faq" className="hover:text-black">FAQ</a>
            <a href="#volunteer" className="hover:text-black">Volunteer</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-sky-900 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
            <div className="relative z-10 flex flex-col justify-center">
              <div className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/90">Campaign Platform • Verre Constituency</div>
              <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">Hon. Abdullahi Umar Yapak</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">A people-focused platform for service, grassroots representation, and meaningful development across Verre Constituency.</p>
              <div className="mt-4 text-2xl font-semibold text-white">Progress for Verre, Voice for the People</div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#volunteer" className="rounded-2xl bg-red-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-red-700">Join the Campaign</a>
                <a href="#priorities" className="rounded-2xl border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20">View Agenda</a>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="mt-1 text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10">
              <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-2xl">
                <img src="/yapak-hero.jpg" alt="Hon. Abdullahi Umar Yapak" className="h-full min-h-[520px] w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">About the Candidate</div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">A campaign built around service, presence, and community trust</h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">Hon. Abdullahi Umar Yapak is presented through a campaign platform focused on practical representation, community connection, and development-driven service for Verre Constituency.</p>
                <p className="mt-4 text-lg leading-8 text-slate-600">This website is structured as a full campaign presence with a clean public image, development agenda, manifesto, updates, volunteer system, gallery, and community-facing communication channels.</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Quick Profile</div>
                <div className="mt-6 space-y-4 text-slate-700">
                  <div><div className="text-sm text-slate-500">Candidate</div><div className="font-semibold">Hon. Abdullahi Umar Yapak</div></div>
                  <div><div className="text-sm text-slate-500">Office</div><div className="font-semibold">Member Representing Verre Constituency</div></div>
                  <div><div className="text-sm text-slate-500">Constituency</div><div className="font-semibold">Verre Constituency</div></div>
                  <div><div className="text-sm text-slate-500">Platform Style</div><div className="font-semibold">Full Campaign Website</div></div>
                  <div><div className="text-sm text-slate-500">Focus</div><div className="font-semibold">Service • Development • Representation</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="priorities" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Development Agenda</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Core priorities for Verre Constituency</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {priorities.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="manifesto" className="bg-white border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Campaign Manifesto</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">A people-first plan for stronger representation</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {manifestoPillars.map((pillar) => (
                <div key={pillar.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-xl font-bold tracking-tight">{pillar.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="updates" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Campaign Updates</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Latest from the platform</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {updates.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="text-sm font-semibold text-red-600">{item.date}</div>
                  <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="profile" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <img src="/yapak-profile.jpg" alt="Yapak profile" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Why Yapak</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">A platform designed for trust, visibility, and strong public messaging</h2>
              <ul className="mt-8 space-y-4 text-lg leading-8 text-slate-700">
                <li>• Strong visual campaign identity with clear representation goals.</li>
                <li>• Community-facing website structure for updates, engagement, and volunteer participation.</li>
                <li>• Room to add real biography, achievements, endorsements, and public service record.</li>
                <li>• Designed to grow into a complete political campaign presence for Verre Constituency.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-white border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Media Gallery</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Campaign visuals and public moments</h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {gallery.map((src, index) => (
                <div key={`${src}-${index}`} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
                  <img src={src} alt={`Campaign gallery ${index + 1}`} className="h-72 w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Community Voices</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Supportive perspectives around the campaign</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-lg font-bold">{item.name}</div>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Frequently Asked Questions</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Quick answers for visitors and supporters</h2>
            </div>
            <div className="mt-10 space-y-4">
              {faqItems.map((item) => (
                <div key={item.q} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="text-lg font-bold">{item.q}</div>
                  <p className="mt-3 leading-7 text-slate-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="volunteer" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Volunteer</div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Join the campaign movement</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">Support the campaign as a mobilizer, ward volunteer, media supporter, youth team member, or community organizer.</p>
                <div className="mt-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="font-semibold">Suggested roles</div>
                  <ul className="mt-4 space-y-3 text-slate-600">
                    <li>Polling Unit Mobilizer</li>
                    <li>Ward Team Volunteer</li>
                    <li>Youth Outreach Support</li>
                    <li>Women Mobilization Support</li>
                    <li>Media & Digital Volunteer</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="text-xl font-bold">Volunteer Sign-Up Form</div>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                    <div>
                      <input name="name" value={formData.name} onChange={handleChange} placeholder="Full name" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3" />
                      {errors.name ? <div className="mt-1 text-sm text-red-600">{errors.name}</div> : null}
                    </div>
                    <div>
                      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3" />
                      {errors.phone ? <div className="mt-1 text-sm text-red-600">{errors.phone}</div> : null}
                    </div>
                    <div>
                      <input name="ward" value={formData.ward} onChange={handleChange} placeholder="Ward / LGA" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3" />
                      {errors.ward ? <div className="mt-1 text-sm text-red-600">{errors.ward}</div> : null}
                    </div>
                    <div>
                      <select name="role" value={formData.role} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3">
                        <option value="">Select volunteer role</option>
                        <option>Mobilizer</option>
                        <option>Ward Team</option>
                        <option>Youth Team</option>
                        <option>Women Team</option>
                        <option>Media Support</option>
                      </select>
                      {errors.role ? <div className="mt-1 text-sm text-red-600">{errors.role}</div> : null}
                    </div>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Short note or message" className="min-h-[130px] rounded-2xl border border-slate-300 bg-white px-4 py-3" />
                    <button className="rounded-2xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800">Submit Interest</button>
                  </form>
                ) : (
                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800">Your interest has been submitted successfully.</div>
                    <div className="grid gap-3">
                      <a href={`https://wa.me/2347039861004?text=${volunteerSummary}`} className="rounded-2xl bg-green-600 px-5 py-3 text-center font-semibold text-white hover:bg-green-700">Send via WhatsApp</a>
                      <a href={`mailto:campaign@example.com?subject=Volunteer Interest - Yapak&body=${volunteerSummary}`} className="rounded-2xl border border-slate-300 px-5 py-3 text-center font-semibold hover:bg-white">Send via Email</a>
                      <button onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", ward: "", role: "", message: "" }); }} className="rounded-2xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700">Submit Another Response</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Contact</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Get in touch with the campaign</h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">Add the official phone, email, office, and social accounts here once your uncle's final campaign details are ready.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-sm">
              <div className="space-y-5 text-sm">
                <div><div className="text-slate-400">Office</div><div className="mt-1 text-base">Update with official campaign office</div></div>
                <div><div className="text-slate-400">Email</div><div className="mt-1 text-base">campaign@example.com</div></div>
                <div><div className="text-slate-400">Phone</div><div className="mt-1 text-base">Add official number</div></div>
                <div><div className="text-slate-400">Campaign Message</div><div className="mt-1 text-base">Service • Development • Representation</div></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
