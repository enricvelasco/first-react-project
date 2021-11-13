import React from 'react'
import Button from "../button";

const Section = ({title, buttonName}) => (
  <section>
    <h2>{title}</h2>
    <input type={'text'} />
    <Button text={buttonName} />
  </section>
);

export default Section
