import React from "react";
import "./mariaurora.css";
import logo from "../assets/img/logo.jpg";

const products = [
  {
    title: "Pasteles personalizados",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Panadería artesanal",
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Cupcakes boutique",
    image:
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=1400&q=80",
  },
];

const dailySpecials = [
  {
    day: "Lunes",
    title: "Cubilete de queso",
    description: "Costra crujiente rellena de queso crema.",
  },
  {
    day: "Martes",
    title: "Orejas",
    description: "Con chocolate y pistache.",
  },
  {
    day: "Miércoles",
    title: "Muffin de plátano",
    description: "Frost de queso crema y nuez.",
  },
  {
    day: "Jueves",
    title: "Cubilete de queso",
    description: "Costra crujiente rellena de queso crema.",
  },
  {
    day: "Viernes",
    title: "Roll de chocolate",
    description: "Frost de queso crema, nuez y caramelo con sal de mar.",
  },
  {
    day: "Sábado",
    title: "Bites de canela",
    description: "Deliciosos centros de dona, escarchados en canela y azúcar.",
  },
  {
    day: "Domingo",
    title: "Muffin de plátano",
    description: "Frost de queso crema y nuez.",
  },
];

export default function Mariaurora() {
  return (
    <div className="page">
      <header className="navbar">
        <div className="nav-inner">
          <div className="brand">
            <img src={logo} alt="Mariaurora logo" />
            <h1>Mariaurora</h1>
          </div>

          <nav className="nav-links">
            <a href="#productos">Productos</a>
            <a
              href="https://wa.me/528125838187?text=Hola,%20quiero%20hacer%20un%20pedido"
              className="cta"
              target="_blank"
              rel="noreferrer"
            >
              Ordenar
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-overlay">
          <p className="hero-tag">Panadería y repostería artesanal</p>
          <h2>Repostería artesanal</h2>
          <p className="hero-description">
            Elegante, personalizada y hecha con detalle
          </p>

          <a href="#productos" className="btn">
            Ver productos
          </a>
        </div>
      </section>

      <section className="special-banner">
        <div className="special-inner">
          <div className="special-heading">
            <span className="special-eyebrow">Algo especial para ti</span>
            <h2>Especial del día</h2>
            <p>Cada día una recomendación para antojar desde la primera vista.</p>
          </div>

          <div className="special-grid">
            <article className="special-card">
              <span className="special-day">Lunes</span>
              <strong>Cubilete de queso</strong>
            </article>

            <article className="special-card">
              <span className="special-day">Martes</span>
              <strong>Orejas</strong>
            </article>

            <article className="special-card">
              <span className="special-day">Miércoles</span>
              <strong>Muffin de plátano</strong>
            </article>

            <article className="special-card">
              <span className="special-day">Jueves</span>
              <strong>Cubilete de queso</strong>
            </article>

            <article className="special-card">
              <span className="special-day">Viernes</span>
              <strong>Roll de chocolate</strong>
            </article>

            <article className="special-card">
              <span className="special-day">Sábado</span>
              <strong>Bites de canela</strong>
            </article>

            <article className="special-card">
              <span className="special-day">Domingo</span>
              <strong>Muffin de plátano</strong>
            </article>
          </div>

          <a href="#productos" className="btn small">Ver menú</a>
        </div>
      </section>

      <section className="products" id="productos">
        {products.map((product) => (
          <article
            key={product.title}
            className="product-block"
            style={{ backgroundImage: `url(${product.image})` }}
          >
            <div className="product-dark-layer" />
            <div className="product-overlay">
              <span className="product-kicker">Mariaurora</span>
              <h3>{product.title}</h3>
              <a
                href={`https://wa.me/528125838187?text=Hola,%20me%20interesa%20${encodeURIComponent(
                  product.title
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Ordenar ahora
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="location-section">
        <div className="location-inner">
          
          <div className="location-info">
            <h3>Visítanos</h3>

            <p className="location-address">
              Av Paseo de los Leones 2864 <br/>
              Cumbres 4to Sector <br/>
              Monterrey, Nuevo León
            </p>

            <p className="location-hours">
              Martes a Viernes: 9:30am – 6:30pm <br/>
              Sábado: 9:30am – 4:00pm <br/>
              Domingo y Lunes: Cerrado
            </p>

            <a
              href="https://maps.google.com/?q=Paseo+de+los+Leones+2864+Monterrey"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Ver ubicación
            </a>
          </div>

          <div className="location-map">
            <iframe
              src="https://www.google.com/maps?q=Paseo+de+los+Leones+2864+Monterrey&output=embed"
              loading="lazy"
              title="Ubicación"
            />
          </div>

        </div>
      </section>

      <section className="cta-section">
        <p className="cta-mini">Pedidos por WhatsApp</p>
        <h3>Haz tu pedido ahora</h3>
        <p>
          Diseños personalizados, detalles elegantes y una experiencia más
          clara para tus clientes.
        </p>

        <a
          href="https://wa.me/528125838187?text=Hola,%20quiero%20hacer%20un%20pedido"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Ir a WhatsApp
        </a>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <h3>Mariaurora</h3>
            <p>Panadería y repostería artesanal hecha con detalle.</p>
          </div>

          <div className="footer-order">
            <h4>Ordena por</h4>
            <a
              href="https://www.ubereats.com/"
              target="_blank"
              rel="noreferrer"
              className="footer-order-btn"
            >
              Uber Eats
            </a>
          </div>

          <div className="footer-social">
            <h4>Síguenos</h4>
            <div className="footer-social-links">
              <a
                href="https://www.instagram.com/mariaurora"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Mariaurora. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}