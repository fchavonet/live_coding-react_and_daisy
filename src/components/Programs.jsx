import fullStack from "../assets/images/programs-full_stack.webp";
import machinLearning from "../assets/images/programs-machine_learning.webp";
import arVr from "../assets/images/programs-ar_vr.webp";

function Programs() {
  return (
    <section id="programs-section" className="w-full py-16 px-4 lg:py-24 bg-base-200">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-24">
        <h2 className="text-6xl font-semibold text-center">Programs</h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="card h-150 bg-base-100 w-96 rounded-xl shadow-sm">
            <figure>
              <img src={fullStack} alt="Full-Stack illustration" />
            </figure>

            <div className="card-body">
              <h2 className="card-title">
                Full-Stack Web Development
              </h2>

              <p>
                Streaming sites. Online stores. Government services. Our own website. All of these are powered by a combination of front-end and back-end web technologies. With our Full-Stack Web Development specialization, you will get an in depth education of the most popular web technologies and practical experience with developing useful web products. The Full-Stack Web Development program is ideal for people who want to understand the whole picture of web development.
              </p>

              <div className="card-actions justify-end">
                <div className="badge text-white rounded-2xl bg-violet-800">web-development</div>
                <div className="badge text-white rounded-2xl bg-violet-800">frontend</div>
                <div className="badge text-white rounded-2xl bg-violet-800">backend</div>
              </div>
            </div>
          </div>

          <div className="card h-150 bg-base-100 w-96 rounded-xl shadow-sm">
            <figure>
              <img src={machinLearning} alt="Machin Learning illustration" />
            </figure>

            <div className="card-body">
              <h2 className="card-title">
                Machine Learning
              </h2>

              <p>
                Machine Learning is the technology behind the most exciting innovations today. Self driving cars, voice-controlled personal assistance, AI to help doctors diagnose diseases: All of these were developed with the help of Machine Learning software engineers. If you enjoy math, and have an eye for mixing intuition with problem solving, our Machine Learning curriculum might be the path for you.
              </p>

              <div className="card-actions justify-end">
                <div className="badge text-white rounded-2xl bg-violet-800">deep-learning</div>
                <div className="badge text-white rounded-2xl bg-violet-800">data-science</div>
              </div>
            </div>
          </div>

          <div className="card h-150 bg-base-100 w-96 rounded-xl shadow-sm">
            <figure>
              <img src={arVr} alt="AR / VR illustration" />
            </figure>

            <div className="card-body">
              <h2 className="card-title">
                Augmented Reality & Virtual Reality
              </h2>

              <p>
                Augmented Reality and Virtual Reality (AR/VR) is more than the latest gaming technology. With AR/VR, students can tour the pyramids of Egypt, doctors can practice lifesaving procedures, or you can even virtually test out furniture in your own living room. AR/VR will drive new ways for all of us to experience and share the world, and you will be ready to be a part of this wave. If you love art, education, games, or storytelling, our Augmented Reality & Virtual Reality program might be the right fit for you.
              </p>

              <div className="card-actions justify-end">
                <div className="badge text-white rounded-2xl bg-violet-800">virtual-reality</div>
                <div className="badge text-white rounded-2xl bg-violet-800">immersive-experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;