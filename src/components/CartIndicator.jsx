import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";

// mapStateToProps is a function that returns an OBJECT
// mapStateToProps is going to decide which parts of the Redux Store we want to "read"
// it will make that portion of the state available to CartIndicator AS PROPS!

const mapStateToProps = state => {
  return {
    // every KEY we add in here, will become an ADDITIONAL PROP of CartIndicator
    cartLength: state.cart.content.length,
    somethingElse: "don't know",
  };
};

// with mapStateToProps we are now SUBSCRIBED to the Store changes,
// meaning: every time the Global State changes this component will undergo an update

const CartIndicator = ({ cartLength }) => {
  const navigate = useNavigate();

  return (
    <div className="ml-auto mt-3 mb-4">
      <Button color="primary" onClick={() => navigate("/cart")}>
        <FaShoppingCart />
        <span className="ml-2">{cartLength}</span>
      </Button>
    </div>
  );
};

// export default CartIndicator;
export default connect(mapStateToProps)(CartIndicator); // as if we have now CartIndicatorWithStateProps = <CartIndicator {...props} {...mapStateToProps} />

// now the CartIndicator component is connected to the Redux Store,
// for reading the length of the content array in any given moment in time.
// this is possible thanks to the connect() function

// connect is used for exporting the component, but how can it tell what data we want to read from the Store?

// mapStateToProps and mapDispatchToProps, they are two arguements you can invoke 'connect' function with!

// mapStateToProps decides which parts of the Redux Store you want to READ ("read" access to the Redux Store)
// mapDispatchToProps decides how this component is going to INTERACT or MODIFY the Redux Store ("write" access to the Redux Store)
