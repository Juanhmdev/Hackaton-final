import { TbMinus, TbPlus, TbX } from "react-icons/tb"

const Item = ({ item, handleRemove, handleAdd, handleRemoveQuantity }) => {


    return (
        <div className="item-detail">
            <div className="item-info">
                <div className="item-image">
                    <img src="" alt="cart product image" />
                </div>
                <div className="item-title">{item.title}</div>
            </div>
            <div className="item-unit-price">{item.price}</div>
            <div className="item-quantity">
                <TbMinus onClick={() => handleRemoveQuantity(item.id)} /> {""}
                {item.quantity} <TbPlus onClick={() => handleAdd(item)} />
            </div>
            <div className="item-total-price">{item.price}</div>
            <div className="item-remove" onClick={() => handleRemove(item.id)}>
                <TbX />
            </div>
        </div>
    );
};

export default Item;