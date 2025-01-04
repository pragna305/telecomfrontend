import React, { useEffect, useState } from "react";
import { Grid, Typography, Button, Card } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts"; 

const STOCK_COLORS = ["#8884d8", "#82ca9d", "#ff7300", "#ffbb00"]; // Custom colors for the bar chart
const ORDER_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]; // Custom colors for the pie chart

const Dashboard = () => {
  const [stockData, setStockData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [lowStockCount, setLowStockCount] = useState(0);
  const [pendingOrderCount, setPendingOrderCount] = useState(0);
  const [supplierCount, setSupplierCount] = useState(0);

  useEffect(() => {
    // Mock stock data for testing
    setStockData([
      { name: "Product A", stock: 120 },
      { name: "Product B", stock: 80 },
      { name: "Product C", stock: 50 },
      { name: "Product D", stock: 200 }
    ]);

    // Mock order data for testing
    setOrderData([
      { name: "Pending", value: 50 },
      { name: "Shipped", value: 30 },
      { name: "Delivered", value: 15 },
      { name: "Cancelled", value: 5 }
    ]);

    // Mock metric data
    setProductCount(200);
    setLowStockCount(50);
    setPendingOrderCount(50);
    setSupplierCount(20);
  }, []);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <Typography variant="h4">Telecom Inventory Dashboard</Typography>
      </header>
      <Grid container spacing={3} className="dashboard-content">
        <Grid item xs={12} sm={6} md={3}>
          <Card className="summary-card">
            <Typography variant="h6">Total Products</Typography>
            <Typography variant="h4">{productCount}</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="summary-card">
            <Typography variant="h6">Low Stock Alerts</Typography>
            <Typography variant="h4">{lowStockCount}</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="summary-card">
            <Typography variant="h6">Pending Orders</Typography>
            <Typography variant="h4">{pendingOrderCount}</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="summary-card">
            <Typography variant="h6">Suppliers</Typography>
            <Typography variant="h4">{supplierCount}</Typography>
          </Card>
        </Grid>

        {/* Stock Chart with Colors */}
        <Grid item xs={12} md={6}>
          <Card className="chart-card">
            <Typography variant="h6">Stock Levels</Typography>
            <BarChart width={300} height={200} data={stockData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="stock" fill={STOCK_COLORS[0]} />
            </BarChart>
          </Card>
        </Grid>

        {/* Order Status Chart with Colors */}
        <Grid item xs={12} md={6}>
          <Card className="chart-card">
            <Typography variant="h6">Order Status</Typography>
            <PieChart width={300} height={200}>
              <Pie
                data={orderData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={60}
              >
                {orderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={ORDER_COLORS[index % ORDER_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Card>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12}>
          <div className="quick-links">
            <Button variant="contained" color="primary" href="/products">
              Manage Products
            </Button>
            <Button variant="contained" color="secondary" href="/suppliers">
              Manage Suppliers
            </Button>
            <Button variant="contained" color="success" href="/reports">
              View Reports
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
