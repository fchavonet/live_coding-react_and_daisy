function About() {
  return (
    <section id="about-section" className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://cdn.prod.website-files.com/6105315644a26f77912a1ada/610543ccefee0d4e7fa3f1bf_Holberton_Tulsa_1117.jpg)",
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content mt-12 text-neutral-content text-center">
        <div className="flex flex-col justify-center itemas-center gap-8">
          <h1 className="text-5xl font-bold text-shadow-lg">
            Become a Software Engineer
          </h1>

          <p className="max-w-md mx-auto text-shadow-lg">
            Holberton School is a Computer Science school founded in Silicon Valley to address the gap in the education system for aspiring software engineers.
          </p>

          <a href="#" className="btn w-auto self-center text-white rounded border-none bg-violet-800 shadow-lg">
            Discover the methodology
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;