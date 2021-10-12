import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JjnjEC6O9ecO5Rvc12WnUf2dddhWcd9webCGUCNa4YYUtszsCPFhdHEhraruLEXWWdHtcS8xN7NLLkwMls3lTLd00HMpLyY4Z';

  const onToken = token => {
    console.log('TOKEN IS', token);
    alert('Payment successful!');
  };

  return(
    <StripeCheckout 
      label='Pay Now'
      name='CWRN Clothing Ltd.'
      billingAddress
      image='https://svgshare.com/i/CUz.svg'
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;