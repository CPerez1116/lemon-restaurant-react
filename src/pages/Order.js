import { salads, entrees, desserts } from "../data/menuItems";

function Order() {
  return (
    <main className="order-page">
      <section className="order-header">
        <h1>Order Online</h1>
      </section>

      <div className="order-layout">
        <section className="order-menu">
          <section className="order-section">
            <h2>Salads</h2>

            <div className="order-list">
              {salads.map((item) => (
                <article className="order-item-card" key={item.name}>
                  <img src={item.image} alt={item.alt} />

                  <div className="order-item-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <span>{item.price}</span>
                  </div>

                  <button>Add</button>
                </article>
              ))}
            </div>
          </section>

          <section className="order-section">
            <h2>Entrees</h2>

            <div className="order-list">
              {entrees.map((item) => (
                <article className="order-item-card" key={item.name}>
                  <img src={item.image} alt={item.alt} />

                  <div className="order-item-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <span>{item.price}</span>
                  </div>

                  <button>Add</button>
                </article>
              ))}
            </div>
          </section>

          <section className="order-section">
            <h2>Desserts</h2>

            <div className="order-list">
              {desserts.map((item) => (
                <article className="order-item-card" key={item.name}>
                  <img src={item.image} alt={item.alt} />

                  <div className="order-item-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <span>{item.price}</span>
                  </div>

                  <button>Add</button>
                </article>
              ))}
            </div>
          </section>
        </section>

        <aside className="order-cart">
          <h2>Your Cart</h2>
          <p>Your cart is empty.</p>
          <button>Place Order</button>
        </aside>
      </div>
    </main>
  );
}

export default Order;
