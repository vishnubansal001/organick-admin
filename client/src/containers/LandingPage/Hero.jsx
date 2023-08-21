import React, { useState } from "react";
import users from "../../assets/users.png";

const Hero = () => {
  const [number, setNumber] = useState(10);
  return (
    <section>
      <div>
        <div>
          <h1>Number of Users</h1>
          <p>{number}</p>
        </div>
        <div>
          <img src={users} alt="img/users" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
