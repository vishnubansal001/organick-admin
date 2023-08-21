import React from "react";
import { Hero } from "../../containers/LandingPage";
import users from "../../assets/users.png";
import admins from "../../assets/admins.png";
import orders from "../../assets/orders.jpeg";
import products from "../../assets/products.jpeg";

const LandingPage = () => {
  return (
    <>
      <Hero img={users} number={10} title={"Number of Users"} isLeft={true} />
      <Hero
        img={admins}
        number={10}
        title={"Number of Admins"}
        isLeft={false}
      />
      <Hero
        img={products}
        number={10}
        title={"Number of Products Till Now"}
        isLeft={true}
      />
      <Hero
        img={orders}
        number={10}
        title={"Number of Orders Till Now"}
        isLeft={false}
      />
    </>
  );
};

export default LandingPage;
