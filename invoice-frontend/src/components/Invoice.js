import React, { useState } from "react";

export default function VillageMarketTracker() {
  const [crop, setCrop] = useState("");
  const [market, setMarket] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));

  const [prices, setPrices] = useState([
    { id: 1, crop: "Tomato", market: "Local Market", price: 30, quantity: "10 kg", date: "2025-12-20" },
    { id: 2, crop: "Potato", market: "Market A", price: 25, quantity: "5 kg", date: "2025-12-20" },
  ]);

  const addPrice = () => {
    if (!crop || !market || !price) return;
    const newPrice = {
      id: Date.now(),
      crop,
      market,
      price,
      quantity,
      date,
    };
    setPrices([newPrice, ...prices]);
    setCrop(""); setMarket(""); setPrice(""); setQuantity(""); setDate(new Date().toISOString().substr(0,10));
  };

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 20, fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>🌾 Village Market Price Tracker</h1>

      {/* Price Entry Form */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 20, padding: 10, border: "1px solid #ddd", borderRadius: 8 }}>
        <input
          placeholder="Crop"
          value={crop}
          onChange={e => setCrop(e.target.value)}
          style={{ flex: 1, padding: 8, borderRadius: 5, border: "1px solid #ccc" }}
        />
        <input
          placeholder="Market"
          value={market}
          onChange={e => setMarket(e.target.value)}
          style={{ flex: 1, padding: 8, borderRadius: 5, border: "1px solid #ccc" }}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          style={{ flex: 1, padding: 8, borderRadius: 5, border: "1px solid #ccc" }}
        />
        <input
          placeholder="Quantity (e.g., 10 kg)"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
          style={{ flex: 1, padding: 8, borderRadius: 5, border: "1px solid #ccc" }}
        />
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          style={{ flex: 1, padding: 8, borderRadius: 5, border: "1px solid #ccc" }}
        />
        <button
          onClick={addPrice}
          style={{ flex: "0 0 100px", padding: 10, borderRadius: 5, background: "#27ae60", color: "#fff", border: "none", cursor: "pointer" }}
        >
          Add
        </button>
      </div>

      {/* Price Table */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 20 }}>
        <thead>
          <tr style={{ background: "#34495e", color: "#fff" }}>
            <th style={{ padding: 10 }}>Date</th>
            <th style={{ padding: 10 }}>Crop</th>
            <th style={{ padding: 10 }}>Market</th>
            <th style={{ padding: 10 }}>Price</th>
            <th style={{ padding: 10 }}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {prices.map(p => (
            <tr key={p.id} style={{ textAlign: "center", borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: 8 }}>{p.date}</td>
              <td style={{ padding: 8 }}>{p.crop}</td>
              <td style={{ padding: 8 }}>{p.market}</td>
              <td style={{ padding: 8 }}>₹ {p.price}</td>
              <td style={{ padding: 8 }}>{p.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Placeholder for Charts */}
      <div style={{ padding: 20, border: "1px dashed #bbb", borderRadius: 8, textAlign: "center", color: "#888" }}>
        📊 Price Trends / Charts will appear here
      </div>
    </div>
  );
}
