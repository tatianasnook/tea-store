
const ChangeQuantity = ({quantity, setQuantity}) => {

  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  }

const removeQuantity = () => {
  if(quantity <= 1) return;
  const newQuantity = quantity - 1;
  setQuantity(newQuantity);
}

  return (
    <div>
      <button className="change-quantity" onClick={removeQuantity}>-</button>
      {quantity}
      <button className="change-quantity" onClick={addQuantity}>+</button>
    </div>
  )
}

export default ChangeQuantity;