import { IProducts } from "@/constants";
import { star } from "@public/icons";
import Image from "next/image";

const PopularProductCard = ({ imgURL, name, price }: IProducts) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <Image
        src={imgURL}
        alt={name}
        width={280}
        height={280}
        className="w-[280px] h-[280px]"
      />

      <div className="mt-8 flex justify-start gap-2.5">
        <Image
          src={star}
          alt="rating"
          width={24}
          height={24}
        />
      </div>
      <p className="font-montserrat text-axl leading-normal text-slate-gray">
        (4.5)
      </p>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
    </div>
  );
};

export default PopularProductCard;
