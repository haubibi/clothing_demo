const fetchSecretClient = async ({
    payMethod,
    currency,
    amount
}) => {
    return await fetch('/.netlify/functions/create-payment-intent', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            amount: amount * 100,
            currency,
            payMethod
        }), //multiple
      }).then((res) => {
        return res.json();
      });
};

export default fetchSecretClient;



// const response = await fetch('/.netlify/functions/create-payment-intent', {
        //     method: 'post',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ amount: amount * 100}), //multiple
        //   }).then((res) => {
        //     return res.json();
        //   });