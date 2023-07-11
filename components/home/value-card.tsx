type InputProps = {
  number: string;
  title: string;
  description: string;
};

export default function ValueCard(value: InputProps) {
  return (
    <div className="home-value-card" key={value.number}>
      <div className="home-value-card-number relative bg-home-hero-number w-[50px] h-[50px]">
        <p className="absolute top-3 left-1/2 -translate-x-1/2">
          {value.number}
        </p>
      </div>
      <h5 className="my-3">{value.title}</h5>
      <p className="w-[303px] max-[1137px]:w-[250px] my-3">
        {value.description}
      </p>
    </div>
  );
}
