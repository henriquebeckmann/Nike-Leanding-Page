import { IShoes } from "@/constants";
import Image, { StaticImageData } from "next/image";

interface ShoeCardProps {
  index: number;
  imgURL: IShoes;
  changeBigShoeImage: (shoe: StaticImageData) => void;
  bigShoeImg: StaticImageData;
 }

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }: ShoeCardProps) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-zinc-300 bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <Image
          src={imgURL.thumbnail}
          alt='shoe colletion'
          width={127}
          height={103.34}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCard;