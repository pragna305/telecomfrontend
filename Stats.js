import React from "react";

const Stats = ({ stats }) => {
  const { totalProducts, lowStockAlerts, pendingOrders, suppliers } = stats;

  return (
    <div className="stats">
      <div className="stat-box">
        <h2>Total Products</h2>
        <p>{totalProducts}</p>
      </div>
      <div className="stat-box">
        <h2>Low Stock Alerts</h2>
        <p>{lowStockAlerts}</p>
      </div>
      <div className="stat-box">
        <h2>Pending Orders</h2>
        <p>{pendingOrders}</p>
      </div>
      <div className="stat-box">
        <h2>Suppliers</h2>
        <p>{suppliers}</p>
      </div>
    </div>
  );
};

export default Stats;
