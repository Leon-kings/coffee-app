/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField,
} from "@mui/material";


export const PaymentForm = ({ onPaymentSubmit }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPaymentSubmit(paymentDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white text-black dark:text-white dark:bg-black">
      <TextField
        fullWidth
        label="Card Number"
        name="cardNumber"
        value={paymentDetails.cardNumber}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        label="Expiry Date"
        name="expiryDate"
        value={paymentDetails.expiryDate}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        label="CVV"
        name="cvv"
        value={paymentDetails.cvv}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        label="Billing Address"
        name="billingAddress"
        value={paymentDetails.billingAddress}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit Payment
      </Button>
    </form>
  );
};