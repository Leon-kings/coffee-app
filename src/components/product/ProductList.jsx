/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import {
  Cancel,
  CurrencyBitcoin,
  CurrencyPound,
  Payment,
  ShoppingCart,
} from "@mui/icons-material";
import { products } from "../../assets/data/assets";
const ProductList = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-lg rounded-xl">
            <CardContent>
              <img
                src={product.image}
                alt=""
                className="w-full object-cover rounded-2xl h-[150px]"
              />
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                ${product.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ShoppingCart />}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </motion.div>
      ))}

      <motion.div
        className="mt-6 p-4 border rounded-lg shadow-md bg-black"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h6">Cart ({cart.length} items)</Typography>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {cart.map((item, index) => (
            <div className="w-full" key={index}>
              <img
                src={item.image}
                alt=""
                className="w-full h-[150px] rounded-2xl object-cover"
              />
              <Typography className="text-blue-300 bg-black" variant="body2">
                {item.name}
              </Typography>
              <Typography className="text-white bg-blue-300">
                - ${item.price}/Item
              </Typography>
            </div>
          ))}
        </div>
        <div className="flex w-full gap-4 py-5">
          <Button color="primary">
            <Cancel className="size-6" />
          </Button>
          <Button color="primary">
            <CurrencyBitcoin className="size-6 text-white" />
          </Button>
          <Button color="primary">
            <CurrencyPound className="size-6 text-white" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductList;
