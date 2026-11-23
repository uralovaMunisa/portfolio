import React, { useState } from 'react';
import {
  Layers,
  ExternalLink,
  Sparkles,
  Code2,
  Eye,
  ArrowRight,
  CheckCircle2,
  Globe
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { useLanguage } from '../context/LanguageContext';
import ProjectMockup from '../components/ProjectMockup';
import { sounds } from '../utils/sound';

export default function Projects({ onOpenProject }) {
  const { data, lang } = useLanguage();
  const { projects } = data;
  const [activeFilter, setActiveFilter] = useState('All');

  // Dynamic filter list based on language
  const filters = lang === 'uz'
    ? ['Barchasi', 'Veb-Ilovalar', 'Ijodiy & Media', 'Konsept & Dizayn']
    : ['All', 'Web Apps', 'Creative & Media', 'Concept & Design'];

  const filterMapping = {
    'Barchasi': 'All',
    'All': 'All',
    'Veb-Ilovalar': 'Veb-Ilovalar',
    'Web Apps': 'Web Apps',
    'Ijodiy & Media': 'Ijodiy & Media',
    'Creative & Media': 'Creative & Media',
    'Konsept & Dizayn': 'Konsept & Dizayn',
    'Concept & Design': 'Concept & Design',
  };

  const filteredProjects = (activeFilter === 'All' || activeFilter === 'Barchasi')
    ? projects.items
    : projects.items.filter(p => {
      if (activeFilter === 'Veb-Ilovalar' || activeFilter === 'Web Apps') {
        return p.category === 'Veb-Ilovalar' || p.category === 'Web Apps';
      }
      if (activeFilter === 'Ijodiy & Media' || activeFilter === 'Creative & Media') {
        return p.category === 'Ijodiy & Media' || p.category === 'Creative & Media';
      }
      if (activeFilter === 'Konsept & Dizayn' || activeFilter === 'Concept & Design') {
        return p.category === 'Konsept & Dizayn' || p.category === 'Concept & Design';
      }
      return true;
    });

  const getStatusClass = (status) => {
    if (status.includes('Live') || status.includes('Ishga')) {
      return 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40 shadow-sm shadow-emerald-900/30';
    }
    if (status.includes('Yakunlangan') || status.includes('Completed')) {
      return 'bg-cyan-950/70 text-cyan-300 border-cyan-500/30';
    }
    if (status.includes('Prototip') || status.includes('Prototype')) {
      return 'bg-purple-950/70 text-purple-300 border-purple-500/30';
    }
    return 'bg-amber-950/70 text-amber-300 border-amber-500/30';
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs font-mono text-violet-300">
              <Layers className="w-3.5 h-3.5" />
              <span>{projects.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              {projects.heading}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl font-light">
              {projects.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-obsidian-900/80 border border-white/10 overflow-x-auto">
            {filters.map((filter) => {
              const isSelected = activeFilter === filter ||
                ((activeFilter === 'All' || activeFilter === 'Barchasi') && (filter === 'All' || filter === 'Barchasi'));
              return (
                <button
                  key={filter}
                  onClick={() => {
                    sounds.playClick();
                    setActiveFilter(filter);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${isSelected
                      ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const statusClass = getStatusClass(project.status);

            return (
              <div
                key={project.id}
                className="rounded-3xl glass-panel-subtle border border-white/10 hover:border-violet-500/40 p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-purple-950/40"
              >
                <div className="space-y-5">
                  {/* Mockup Preview Area */}
                  <div
                    onClick={() => {
                      sounds.playClick();
                      onOpenProject(project);
                    }}
                    className="cursor-pointer relative overflow-hidden rounded-2xl"
                    title={projects.viewCase}
                  >
                    <ProjectMockup projectId={project.id} />

                    {/* Interactive hover overlay */}
                    <div className="absolute inset-0 bg-violet-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-2">
                      <span className="px-3.5 py-2 rounded-xl bg-white text-slate-950 text-xs font-semibold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5" />
                        <span>{projects.viewCase}</span>
                      </span>

                      {project.isLive && project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.stopPropagation();
                            sounds.playSuccess();
                          }}
                          className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform"
                          title={project.liveUrl}
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>{projects.liveDemo}</span>
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Badges & Meta */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-violet-400 font-medium">
                      {project.category}
                    </span>
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${statusClass} flex items-center gap-1.5`}>
                      {project.isLive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      )}
                      <span>{project.status}</span>
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3
                      onClick={() => {
                        sounds.playClick();
                        onOpenProject(project);
                      }}
                      className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-violet-300 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-light line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] font-mono px-2 py-1 rounded-lg bg-white/5 text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between gap-2.5">
                  {/* Live Demo Button (if real live deploy) */}
                  {project.isLive && project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sounds.playSuccess()}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/50 transition-all hover:-translate-y-0.5"
                      title={project.liveUrl}
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>{projects.liveDemo}</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        sounds.playClick();
                        onOpenProject(project);
                      }}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-violet-600/30 hover:bg-violet-600/60 border border-violet-500/40 text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5 text-violet-300" />
                      <span>{projects.viewCase}</span>
                    </button>
                  )}

                  {/* Details button (always available) */}
                  <button
                    onClick={() => {
                      sounds.playClick();
                      onOpenProject(project);
                    }}
                    className="p-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                    title={projects.viewCase}
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>

                  {/* GitHub Source Code */}
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sounds.playClick()}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                    title={projects.sourceCode}
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
