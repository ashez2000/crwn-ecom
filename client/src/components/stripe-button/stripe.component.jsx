import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { connect } from "react-redux";

const StripeCheckoutButton = ({ price, email, cartItems, user }) => {
  const stripePrice = price * 100;
  const publicKey =
    "pk_test_51I318OC8PobMyIamP2QctX7GfelTsbYNOMZIWL6HPxExx7GrjUAA7ywhp0SPLP8C9yKGYmHnnUmwbZWFlhDFiJ3h0033Zc0JES";

  const onToken = async (token) => {
    const itemList = cartItems.map((i) => i.id);
    try {
      await axios.post("/payment", {
        totalAmount: stripePrice,
        email,
        user,
        itemList,
      });
      alert("payment successful");
    } catch (err) {
      alert("There was a payment error.");
      console.error("payment error: ", err);
    }
    // console.log(token);
    // alert(token);
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUS.svg"
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(StripeCheckoutButton);
