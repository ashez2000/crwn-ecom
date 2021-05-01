import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100
  const publicKey =
    'pk_test_51I318OC8PobMyIamP2QctX7GfelTsbYNOMZIWL6HPxExx7GrjUAA7ywhp0SPLP8C9yKGYmHnnUmwbZWFlhDFiJ3h0033Zc0JES'

  const onToken = token => {
    console.log(token)
    alert('payment successful')
  }

  return (
    <StripeCheckout
      label='Pay now'
      name='CRWN clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUS.svg'
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publicKey}
    />
  )
}

export default StripeCheckoutButton
