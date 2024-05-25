

const Summary = ({ cartItems }) => {

    // total de la sumatoria del carrito
    const totalAmount = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    // agregar el porcentaje de descuento

    const taxAmount = totalAmount * 0.02;

    // Monto total del carrito (suma del item + cantidad - el porcentaje de descuento)

    const totalQuantity = cartItems.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);

    // precio en total
    const totalAmountWithTax = totalAmount + taxAmount;

    return (
        <div className="cart-summary">
            <h3 className="summary-title">Total</h3>
            <div className="summary-total">
                <span>Subtotal*</span>S/{totalAmount.toFixed(2)}
            </div>
            <div className="summary-total-tax">
                <span> Descuento (2%)</span> S/{taxAmount.toFixed(2)}
            </div>

            <div className="summary-total-quantity">
                <span>Total Quantity*</span> {totalQuantity}
            </div>

            <div className="summary-total-amount">
                <span>Precio total</span> S/{totalAmountWithTax.toFixed(2)}
            </div>
            <buttom className="check-out-btn">Realizar pago</buttom>
        </div>
    );
};

export default Summary