
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe"


dotenv.config();
const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const PORT = 5000;

// Middleware to parse JSON request bodies
app.use(cors({origin:process.env.CLIENT_URL}));
app.use(express.json());

// Home route
app.post("/create-checkout-session", async (req, res) => {
  try{
    const {product}=req.body;
    const session = await stripe.checkout.sessions.create({
      
      line_items:[
        {
          price_data:{
            currency:"usd",
            product_data:{
              name:product.name,
              images:[product.image],

            },
            unit_amount : product.price * 100
          },
          quantity:1

        }
      ],
      mode:"payment",
      success_url:`${process.env.CLIENT_URL}/success`,
      cancel_url:`${process.env.CLIENT_URL}/cancel`,

    })

    res.json({url:session.url});
  }catch(error){
    console.error("Stripe error:", error.message);
  console.error("Error type:", error.type);
  console.error("Error code:", error.code);

  res.status(500).json({
    error: error.message,
    type: error.type,
    code: error.code,
  });
  }
  
});


app.listen(5000,()=>{
  console.log("server is running at 5000")
})