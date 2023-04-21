import styles from "../Styles/card.module.css";

const Card = (props) => {
  let isArray = false;
  if (Array.isArray(props.card)) {
    isArray = true;
  }

  let cards = props.card;
  // console.log(cards);

  return (
    <>
      {isArray &&
        cards.map((card) => {
          return (
            <div key={card.recipe.uri} className={styles.card}>
              <div>
                <img
                  className={styles.img}
                  src={card.recipe.image}
                  alt={card.recipe.label}
                />
              </div>
              <div>
                <a href={card.recipe.uri}>
                  <h2>{card.recipe.label}</h2>
                </a>
                <a href={card.recipe.uri}>
                  <button className={styles.btn}>See More...</button>
                </a>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Card;
