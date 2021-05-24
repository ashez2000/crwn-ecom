import "./checkout.styles.scss";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const CheckoutPage = ({ cartItems, total, currentUser }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((i) => (
        <CheckoutItem key={i.id} cartItem={i} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        ***NO REAL PAYMENT IS MADE. THIS SPRIPE CHECKOUT IS ONLY FOR TESTING
        PURPOSE***
      </div>
      {currentUser ? (
        <>
          <StripeCheckoutButton price={total} />
        </>
      ) : (
        <Link to="/login">
          <CustomButton>Login to for Checkout</CustomButton>
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(CheckoutPage);
