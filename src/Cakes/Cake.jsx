const Cake = ({ cake }) => {
  return (
    <div className="cake">
      <h2 className="cake-name">{cake.cakeName}</h2>
      <p className="cake-price">
        <span>Price</span>: ${cake.price}
      </p>
      <p className="cake-rating">
        <span>Rating</span> ${cake.rating}
      </p>
      <p className="cake-ingredients">Ingredients:</p>
      <ul className="ingredient-list">
        {cake.ingredients.map((ingredient, index) => (
          <li className="ingredient-item" key={index}>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cake;
