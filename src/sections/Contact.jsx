import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles, 
  AlertCircle, 
  ExternalLink, 
  Clock 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon } from '../components/Icons';
import { useLanguage } from '../context/LanguageContext';
import { sounds } from '../utils/sound';

export default function Contact() {
  const { data, lang } = useLanguage();
  const { contact } = data;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const socialIcons = {
    GitHub: GithubIcon,
    LinkedIn: LinkedinIcon,
    Telegram: TelegramIcon,
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = contact.errors.name;
    }
    if (!formData.email.trim()) {
      errs.email = contact.errors.email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = contact.errors.email;
    }
    if (!formData.message.trim()) {
      errs.message = contact.errors.message;
    } else if (formData.message.trim().length < 10) {
      errs.message = contact.errors.message;
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sounds.playClick();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      sounds.playSuccess();
      setFormData({
        name: '',
        email: '',
        subject: 'Internship',
        message: '',
      });
    }, 1200);
  };

  const handleCopyEmail = () => {
    sounds.playClick();
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    sounds.playSuccess();
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs font-mono text-violet-300">
            <Mail className="w-3.5 h-3.5" />
            <span>{contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            {contact.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-light">
            {contact.subheading}
          </p>
        </div>

        {/* Contact Layout: Info Cards (5 cols) + Interactive Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct channels and social links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Email Card */}
            <div className="p-6 rounded-3xl glass-panel border border-violet-500/30 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-violet-400">
                  {contact.directInquiries}
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
              </div>

              <div>
                <div className="text-xs text-slate-400 font-mono">{contact.emailLabel}</div>
                <div className="text-base sm:text-lg font-semibold text-white mt-1 break-all">
                  {contact.email}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-violet-600/20 hover:bg-violet-600/40 border border-violet-500/40 text-xs font-medium text-violet-200 flex items-center justify-center gap-2 transition-all"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>{contact.copiedEmail}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{contact.copyEmail}</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${contact.email}`}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                  title="Email"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-violet-400" />
                  {contact.locationText}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {contact.responseTime}
                </span>
              </div>
            </div>

            {/* Social Network Channels */}
            <div className="p-6 rounded-3xl glass-panel-subtle border border-white/10 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400">
                {contact.socialProfiles}
              </h3>

              <div className="space-y-2.5">
                {contact.socials.map((soc) => {
                  const Icon = socialIcons[soc.name] || ExternalLink;
                  return (
                    <a
                      key={soc.name}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sounds.playClick()}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-violet-500/40 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-obsidian-900 border border-white/10 flex items-center justify-center text-violet-400 group-hover:text-white group-hover:bg-violet-600 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                            {soc.name}
                          </div>
                          <div className="text-xs text-slate-400 font-mono">
                            {soc.handle}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-violet-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl glass-panel-elevated border border-violet-500/20 shadow-2xl shadow-purple-950/40 relative">
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-950/80">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    {contact.successTitle}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md font-light">
                    {contact.successDesc}
                  </p>
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setIsSubmitted(false);
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold transition-colors"
                  >
                    {contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <h3 className="text-lg font-display font-bold text-white">
                      {contact.formTitle}
                    </h3>
                    <span className="text-xs font-mono text-violet-400">
                      {contact.responseTime}
                    </span>
                  </div>

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      {contact.nameLabel} <span className="text-violet-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={contact.namePlaceholder}
                      className={`w-full px-4 py-3 rounded-xl bg-obsidian-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-white/10 focus:border-violet-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      {contact.emailFieldLabel} <span className="text-violet-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={contact.emailPlaceholder}
                      className={`w-full px-4 py-3 rounded-xl bg-obsidian-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-white/10 focus:border-violet-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      {contact.topicLabel}
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors"
                    >
                      {contact.topics.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      {contact.messageLabel} <span className="text-violet-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={contact.messagePlaceholder}
                      className={`w-full px-4 py-3 rounded-xl bg-obsidian-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-white/10 focus:border-violet-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xl shadow-purple-950/60 hover:shadow-purple-600/40 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{contact.submittingBtn}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{contact.submitBtn}</span>
                      </>
                    )}
                  </button>

                  <div className="text-[11px] font-mono text-center text-slate-500 pt-1">
                    Direct delivery to {contact.email}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
