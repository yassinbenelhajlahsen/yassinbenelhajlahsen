const techRelations = {
  javascript: ["typescript", "nodejs", "react", "nestjsjs"],
  typescript: ["javascript", "react", "nodejs", "nestjs", "prisma", "expo"],
  python: ["fastapi", "sqlalchemy"],
  java: [],
  cpp: [],
  sql: ["postgresql", "mariadb", "sqlalchemy", "prisma"],
  react: ["typescript", "nodejs", "nestjsjs", "expo", "fastapi", "postgresql"],
  nestjsjs: ["react", "typescript"],
  expo: ["react", "typescript", "nodejs"],
  nodejs: [
    "javascript",
    "typescript",
    "expressjs",
    "nestjs",
    "postgresql",
    "redis",
  ],
  expressjs: ["nodejs", "javascript", "typescript", "postgresql", "redis"],
  nestjs: ["typescript", "nodejs", "postgresql", "prisma"],
  fastapi: ["python", "postgresql", "sqlalchemy"],
  sqlalchemy: ["python", "fastapi", "postgresql"],
  prisma: ["typescript", "nodejs", "nestjs", "postgresql"],
  postgresql: [
    "sql",
    "nodejs",
    "fastapi",
    "nestjs",
    "prisma",
    "sqlalchemy",
    "expressjs",
  ],
  redis: ["nodejs", "expressjs", "postgresql"],
  mariadb: ["sql"],
  git: ["github"],
  github: ["git", "cicd"],
  aws: ["cicd"],
  cicd: ["github", "aws"],
};

const stackEl = document.querySelector(".stack");
if (stackEl && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const allPills = [...stackEl.querySelectorAll(".pill[data-tech]")];

  stackEl.addEventListener(
    "mouseenter",
    (e) => {
      const pill = e.target.closest(".pill[data-tech]");
      if (!pill) return;
      const tech = pill.dataset.tech;
      const related = new Set([tech, ...(techRelations[tech] || [])]);
      allPills.forEach((p) => {
        if (related.has(p.dataset.tech)) {
          p.classList.remove("pill-dim");
          p.classList.add("pill-highlight");
        } else {
          p.classList.remove("pill-highlight");
          p.classList.add("pill-dim");
        }
      });
    },
    true,
  );

  stackEl.addEventListener(
    "mouseleave",
    (e) => {
      const pill = e.target.closest(".pill[data-tech]");
      if (!pill) return;
      allPills.forEach((p) => p.classList.remove("pill-dim", "pill-highlight"));
    },
    true,
  );
}
