import conImage from "../img/con.jpeg";
const ContactSection = () => {
  return (
    <section id="contact">
      <div
        className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center px-12"
        style={{ backgroundImage: `url(${conImage})` }}
      ></div>
    </section>
  );
};

export default ContactSection;
