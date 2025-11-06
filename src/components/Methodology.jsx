function Methodology() {
  return (
    <section id="methodology-section" className="w-full py-16 px-4 lg:py-24">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-24">
        <h2 className="text-6xl font-semibold text-center">Methodology</h2>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="timeline-start mb-10 lg:text-end">
              <div className="text-lg font-black">Learn by doing</div>
              <p>
                Project-based learning is a proven, alternative learning methodology to the traditional teacher-led lecture and memorization educational method.
              </p>
            </div>

            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="timeline-end mb-10">
              <div className="text-lg font-black">Learn from others</div>
              <p>
                Peer learning is an educational practice in which you interact with your fellow students to reach your educational goals.
              </p>
            </div>

            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="timeline-start lg:text-end">
              <div className="text-lg font-black">Learn how to learn</div>

              <p>
                At Holberton School, we don’t teach you how to code or give the answers to the problems. In the real world, that’s not how it works.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Methodology;