import Globe from "./Globe";

function Campuses() {
  return (
    <section id="campuses-section" className="w-full pt-16 lg:pt-24">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        {/* Section title */}
        <h2 className="mb-16 lg:mb-20 text-6xl font-semibold text-center">Campuses</h2>

        {/* Campuses grid */}
        <div className="mb-16 grid grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Europe */}
          <div className="text-center">
            <h2 className="mb-2 text-xl font-bold text-holberton">Europe</h2>
            <ul className="text-xs">
              <li>Baku, AZ</li>
              <li>Tirana, AL</li>
              <li>Granada, ES</li>
              <li>Bordeaux, FR</li>
              <li>Dijon, FR</li>
              <li>Fréjus, FR</li>
              <li>Laval, FR</li>
              <li>Lille, FR</li>
              <li>Paris, FR</li>
              <li>Rennes, FR</li>
              <li>Thonon-les-Bains, FR</li>
              <li>Toulouse, FR</li>
            </ul>
          </div>

          {/* Africa */}
          <div className="text-center">
            <h2 className="mb-2 text-xl font-bold text-holberton">Africa</h2>
            <ul className="text-xs">
              <li>Cairo, EG</li>
              <li>Maseru, LS</li>
              <li>Port Louis, MU</li>
              <li>Tunis, TN</li>
              <li>Johannesburg, ZA</li>
            </ul>
          </div>

          {/* North America */}
          <div className="text-center">
            <h2 className="mb-2 text-xl font-bold text-holberton">North America</h2>
            <ul className="text-xs">
              <li>Guadalajara, MX</li>
              <li>Mérida, MX</li>
              <li>Mexico City, MX</li>
              <li>San Juan, PR</li>
              <li>Miami, US</li>
              <li>New York City, US</li>
            </ul>
          </div>

          {/* Latin America */}
          <div className="text-center">
            <h2 className="mb-2 text-xl font-bold text-holberton">Latin America</h2>
            <ul className="text-xs">
              <li>Barranquilla, CO</li>
              <li>Bogotá, CO</li>
              <li>Cali, CO</li>
              <li>Medellín, CO</li>
              <li>Quito, EC</li>
              <li>Guatemala City, GT</li>
              <li>Panama City, PA</li>
              <li>Lima, PE</li>
              <li>Montevideo, UY</li>
            </ul>
          </div>

          {/* Middle East & Pacific */}
          <div className="text-center">
            <h2 className="mb-2 text-xl font-bold text-holberton">Middle East & Pacific</h2>
            <ul className="text-xs">
              <li>Melbourne, AU</li>
              <li>Sydney, AU</li>
              <li>Beirut, LB</li>
              <li>Riyadh, SA</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Interactive globe */}
      <Globe />
    </section>
  );
}

export default Campuses;
