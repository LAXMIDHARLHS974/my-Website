import techImage from "../img/tech.jpeg";
const TechSection = () => {
  return (
    <section id="tech">
      <div
        className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center px-12"
        style={{ backgroundImage: `url(${techImage})` }}
      ></div>
    </section>
  );
};

export default TechSection;
