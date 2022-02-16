import React from "react";

// Styles
import styles from "../styles";

const Home = () => {
  return (
    <div>
      {" "}
      <h1 style={styles.text}>Pokeshop</h1>
      <h4 style={styles.text}>Gotta catch 'em all</h4>
      <img
        alt="pokeshop"
        src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/73de77fa-445d-4372-8dcb-55d5cc34ca66"
        style={styles.pokeshopImage}
      />
    </div>
  );
};

export default Home;
