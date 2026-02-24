const { createElement: h } = React;

function Tag({ label }) {
  return h("span", { className: "tag" }, label);
}

function SkillSection({ group }) {
  return h(
    "article",
    { className: "card" },
    h("h3", null, group.title),
    h(
      "div",
      { className: "tag-list" },
      group.items.map((item) => h(Tag, { key: item, label: item }))
    )
  );
}

function ProjectCard({ project }) {
  return h(
    "article",
    { className: "card project" },
    h("div", { className: "row" }, h("h3", null, project.name), h("p", { className: "period" }, project.period)),
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
    { className: "container" },
    h(
      "header",
      { className: "hero" },
      h("p", { className: "eyebrow" }, "Portfolio / ポートフォリオ"),
      h("h1", null, profile.name),
      h("p", { className: "target" }, profile.target),
      h("p", { className: "intro" }, profile.intro),
      h(
        "div",
        { className: "contacts" },
        h("a", { href: `mailto:${profile.contact.email}` }, profile.contact.email),
        h("a", { href: profile.contact.github, target: "_blank", rel: "noreferrer" }, "GitHub")
      )
    ),
    h("section", null, h("h2", null, "Tech Stack"), h("div", { className: "grid" }, skillGroups.map((group) => h(SkillSection, { key: group.title, group })))),
    h("section", null, h("h2", null, "Projects"), h("div", { className: "stack" }, projects.map((project) => h(ProjectCard, { key: project.name, project })))),
    h(
      "section",
      null,
      h("h2", null, "Strengths"),
      h("ul", { className: "card" }, strengths.map((item) => h("li", { key: item }, item)))
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
