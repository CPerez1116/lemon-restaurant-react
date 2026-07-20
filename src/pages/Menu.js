import { salads, entrees, desserts } from "../data/menuItems";

function Menu() {
  return (
    <main className="menu-page">
      <section className="menu-header">
        <h1>Our Menu</h1>
        <p>Fresh Mediterranean dishes made with quality ingredients.</p>
      </section>

      <h2>Salads</h2>
      <div className="menu-grid">
        {salads.map((item) => (
          <article className="menu-card">
            <img src={item.image} alt={item.alt} />
            <div className="card-content">
              <div className="card-header">
                <h3>{item.name}</h3>
                <span className="card-price">{item.price}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <h2>Entrees</h2>
      <div className="menu-grid">
        {entrees.map((item) => (
          <article className="menu-card">
            <img src={item.image} alt={item.alt} />
            <div className="card-content">
              <div className="card-header">
                <h3>{item.name}</h3>
                <span className="card-price">{item.price}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <h2>Desserts</h2>
      <div className="menu-grid">
        {desserts.map((item) => (
          <article className="menu-card">
            <img src={item.image} alt={item.alt} />
            <div className="card-content">
              <div className="card-header">
                <h3>{item.name}</h3>
                <span className="card-price">{item.price}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Menu;
