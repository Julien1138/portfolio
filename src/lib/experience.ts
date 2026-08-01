// Julien started his engineering career in September 2009 (post-internship,
// first role at Safran). Computed at build time so the figure never needs
// manual updating.
const CAREER_START = new Date(2009, 8, 1);

export function getYearsOfExperience(now: Date = new Date()): number {
  let years = now.getFullYear() - CAREER_START.getFullYear();
  const hasHadAnniversaryThisYear =
    now.getMonth() > CAREER_START.getMonth() ||
    (now.getMonth() === CAREER_START.getMonth() && now.getDate() >= CAREER_START.getDate());
  if (!hasHadAnniversaryThisYear) years -= 1;
  return years;
}
