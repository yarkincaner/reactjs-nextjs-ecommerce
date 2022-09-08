import Link from "next/link";
import { urlFor } from "../../lib/client";

type Props = {
  heroBanner: any;
};

const HeroBanner = ({ heroBanner }: Props) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
      </div>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largeText1}</h1>
      <img
        src={urlFor(heroBanner.image)}
        alt="headphones"
        className="hero-banner-image"
      />

      <div>
        <Link href="/product/ID">
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
        <div className="desc">
          <h5>Description</h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
