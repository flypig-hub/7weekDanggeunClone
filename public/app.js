const { createElement: h } = React;

function Tag({ label }) {
  return h("span", { className: "tag" }, label);
}

function OrbitBadge({ text, className }) {
  return h("div", { className: `orbit-badge ${className || ""}`.trim() }, text);
}

function SkillPanel({ group }) {
  return h(
    "article",
    { className: "skill-panel" },
    h("h3", null, group.title),
    h(
      "div",
      { className: "tag-list" },
      group.items.map((item) => h(Tag, { key: item, label: item }))
    )
  );
}

function ProjectShowcase({ project, index }) {
  return h(
    "article",
    { className: "project-card" },
    h(
      "div",
      { className: "project-top" },
      h("p", { className: "project-index" }, `0${index + 1}`),
      h("p", { className: "period" }, project.period)
    ),
    h("h3", null, project.name),
    h("p", { className: "summary" }, project.summary),
    h(
      "div",
      { className: "tag-list" },
      project.stack.map((tech) => h(Tag, { key: tech, label: tech }))
    ),
    h(
      "ul",
      null,
      project.achievements.map((point) => h("li", { key: point }, point))
    )
  );
}

function App() {
  return h(
    "main",
    { className: "portfolio" },
    h("div", { className: "bg-aurora bg-aurora-1" }),
    h("div", { className: "bg-aurora bg-aurora-2" }),
    h(
      "section",
      { className: "hero" },
      h(
        "div",
        { className: "hero-left glass" },
        h("p", { className: "eyebrow" }, "Creative Portfolio / 提出資料"),
        h("h1", null, profile.name),
        h("p", { className: "target" }, profile.target),
        h("p", { className: "intro" }, profile.intro),
        h(
          "div",
          { className: "contacts" },
          h("a", { href: `mailto:${profile.contact.email}` }, "Email"),
          h("a", { href: profile.contact.github, target: "_blank", rel: "noreferrer" }, "GitHub")
        )
      ),
      h(
        "div",
        { className: "hero-right glass" },
        h("p", { className: "mini-title" }, "Tech Orbit"),
        h(
          "div",
          { className: "orbit-wrap" },
          h("div", { className: "core" }, "LECC"),
          h(OrbitBadge, { text: "React", className: "b1" }),
          h(OrbitBadge, { text: "Node", className: "b2" }),
          h(OrbitBadge, { text: "AWS", className: "b3" }),
          h(OrbitBadge, { text: "Git", className: "b4" })
        ),
        h(
          "div",
          { className: "kpis" },
          h("div", null, h("strong", null, "03"), h("span", null, "핵심 프로젝트")),
          h("div", null, h("strong", null, "07+"), h("span", null, "주요 기술")),
          h("div", null, h("strong", null, "100%"), h("span", null, "협업 중심 개발"))
        )
      )
    ),
    h(
      "section",
      { className: "glass section" },
      h("h2", null, "Stack Radar"),
      h("div", { className: "skills-grid" }, skillGroups.map((group) => h(SkillPanel, { key: group.title, group })))
    ),
    h(
      "section",
      { className: "section" },
      h("h2", null, "Project Highlights"),
      h("div", { className: "projects-grid" }, projects.map((project, index) => h(ProjectShowcase, { key: project.name, project, index })))
    ),
    h(
      "section",
      { className: "glass section" },
      h("h2", null, "Why Me"),
      h("ul", { className: "strength-list" }, strengths.map((item) => h("li", { key: item }, item)))
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
