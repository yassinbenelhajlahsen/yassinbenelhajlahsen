const techRelations = {
  // Languages
  javascript: ["typescript", "nodejs", "react", "expressjs"],
  typescript: ["javascript", "react", "nodejs", "nextjs", "nestjs", "prisma", "expo", "fastapi", "tailwindcss"],
  python: ["fastapi", "sqlalchemy", "pytest"],
  java: [],
  cpp: [],
  sql: ["postgresql", "mariadb", "prisma", "sqlalchemy"],

  // Frontend
  react: ["typescript", "javascript", "nodejs", "expressjs", "nextjs", "expo", "tailwindcss", "fastapi", "firebase"],
  nextjs: ["typescript", "react", "tailwindcss", "supabase", "postgresql", "prisma", "redis", "openai", "vitest", "playwright"],
  expo: ["react", "typescript", "nodejs", "expressjs", "openai", "jest"],
  tailwindcss: ["react", "typescript", "nextjs", "nodejs", "expressjs", "fastapi", "firebase", "postgresql"],

  // Backend
  nodejs: ["javascript", "typescript", "expressjs", "nestjs", "react", "postgresql", "redis", "prisma", "supabase"],
  expressjs: ["nodejs", "javascript", "typescript", "react", "postgresql", "redis", "prisma", "tailwindcss", "supabase"],
  nestjs: ["typescript", "nodejs", "postgresql", "prisma"],
  fastapi: ["python", "typescript", "react", "tailwindcss", "firebase", "stripe", "openai", "pytest"],
  sqlalchemy: ["python", "fastapi", "postgresql"],
  prisma: ["typescript", "nodejs", "expressjs", "nextjs", "postgresql", "redis", "supabase"],

  // Testing
  vitest: ["nextjs", "typescript", "tailwindcss", "supabase", "postgresql", "prisma", "redis", "openai"],
  pytest: ["python", "fastapi", "react", "typescript", "firebase", "stripe", "openai"],
  jest: ["react", "nodejs", "javascript", "expressjs", "expo", "typescript", "postgresql", "redis", "prisma", "tailwindcss", "supabase"],
  playwright: ["nextjs", "typescript", "tailwindcss", "supabase", "postgresql", "prisma", "redis", "openai"],

  // Databases
  postgresql: ["sql", "nodejs", "expressjs", "nextjs", "nestjs", "prisma", "sqlalchemy", "redis", "supabase"],
  redis: ["nodejs", "expressjs", "nextjs", "postgresql", "prisma", "supabase"],
  mariadb: ["sql"],
  firestore: ["firebase", "react", "typescript"],

  // Tools, Cloud & Platforms
  git: ["github"],
  github: ["git", "cicd"],
  aws: ["cicd"],
  cicd: ["github", "aws"],
  supabase: ["nextjs", "nodejs", "expressjs", "postgresql", "prisma", "redis", "typescript"],
  firebase: ["react", "typescript", "tailwindcss", "fastapi", "python", "stripe", "firestore"],
  vercel: ["react", "nextjs", "nodejs"],
  railway: ["nodejs", "expressjs", "postgresql"],
  stripe: ["fastapi", "python", "react", "typescript", "firebase", "openai"],
  openai: ["react", "nextjs", "nodejs", "expressjs", "expo", "typescript", "fastapi", "python", "postgresql", "redis"],
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
