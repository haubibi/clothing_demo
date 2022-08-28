require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  console.log(1111)
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'eur',
      payment_method_types: ['card'],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};

// require("dotenv").config();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// exports.handler = async (event) => {
//   console.log(22222)
//   try {
//     // const { amount,currency } = JSON.parse(event.body);
//     const { amount } = JSON.parse(event.body);

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency:'eur',
//       // payment_method_types: ["card"],
//       payment_method_types: ['card'],
//     });

//     console.log(paymentIntent)
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ paymentIntent }),
//     };
//   } catch (error) {
//     console.log({ error });

//     return {
//       statusCode: 400,
//       body: JSON.stringify({ error }),
//     };
//   }
// };