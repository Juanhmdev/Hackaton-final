

const Summary = ({ cartItems }) => {

    // total de la sumatoria del carrito
    const totalAmount = cartItems.reduce((acc, tem))

    return (
        <div className="cart-summary">
            <h3 className="summary-title">Summary</h3>
            <div className="summary-total">
                <span>Subtotal*</span>S/1000
            </div>
            <div className="summary-total-tax">
                <span>Tax charges (2%)</span> S/20
            </div>

            <div className="summary-total-quantity">
                <span>Total Quantity*</span> 5
            </div>

            <div className="summary-total-amount">
                <span>Total Price</span> S/4800
            </div>
            <buttom className="check-out-btn">Proceed to checkout</buttom>
        </div>
    );
};

export default Summary