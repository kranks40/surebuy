import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({
  heroBanner: { smallText, product, description, buttonText, largeText1, midText, image },
}) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <img src={urlFor(image)} className="hero-banner-image" />

        <div>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
