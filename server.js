import express from "express";
import cors from "cors";
import path from "path";
// import Stripe from "stripe";
import dotenv from "dotenv";

import connectDb from "./db.js";
import Order from "./models/order.model.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

connectDb();

app.use(cors());
app.use(express.json());

// payment route
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.post("/payment", async (req, res) => {
  // stripe.charges.create(body, (stripeErr, stripeResponse) => {
  //   if (stripeErr) {
  //     res.status(500).json({ error: stripeErr });
  //   } else {
  //     res.status(200).json({ success: stripeResponse });
  //   }
  // });
  try {
    const order = await Order.create(req.body);
    res.status(201).json({ order });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(
      express.static(path.join(__dirname, "/client/build", "index.html"))
    );
  });
}

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`CRWN ecom server, PORT: ${PORT}`);
});
