export const ExperienceHero = () => {
  return (
    <section className="relative h-[50vh] text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">My Experiences</h1>
      <p className="max-w-xl mx-auto text-lg opacity-90">
        A look back at the journey that shaped my skills, from the most recent
        milestones to the very first steps.
      </p>
      <div
        className={
          "py-2 px-10 z-10 bg-primary absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full text-primary-foreground"
        }>
        Aujourd'hui
      </div>
    </section>
  );
};
