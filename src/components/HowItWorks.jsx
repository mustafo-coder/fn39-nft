import Icon1 from "../assets/HowItWorks-icon1.svg";
import Icon2 from "../assets/HowItWorks-icon2.svg";
import Icon3 from "../assets/HowItWorks-icon3.svg";

const HowItWorks = () => {
  return (
    <div className="bg-secondary font-[400] text-[16px] text-white py-[80px]">
      <div className="container">
        <h3 className="font-[600] text-[38px] mb-3">How it works</h3>
        <p className="font-[400] text-[22px] mb-12">
          Find out how to get started
        </p>
        <ul className="flex gap-8">
          <li className="bg-[#3B3B3B] flex flex-col justifiy-center items-center rounded-xl px-8 pt-3 pb-8 ">
            <img width={250} height={250} src={Icon1} alt="" />
            <p className="pt-5 pb-3 font-[600] text-[22px]">
              Setup Your wallet
            </p>
            <p className="text-center">
              Set up your wallet of choice. Connect it to the Animarket by
              clicking the wallet icon in the top right corner.
            </p>
          </li>
          <li className="bg-[#3B3B3B] flex flex-col justifiy-center items-center rounded-xl px-8 pt-3 pb-8 ">
            <img width={250} height={250} src={Icon2} alt="" />
            <p className="pt-5 pb-3 font-[600] text-[22px]">
              Create Collection
            </p>
            <p className="text-center">
              Upload your work and setup your collection. Add a description,
              social links and floor price.
            </p>
          </li>
          <li className="bg-[#3B3B3B] flex flex-col justifiy-center items-center rounded-xl px-8 pt-3 pb-8 ">
            <img width={250} height={250} src={Icon3} alt="" />
            <p className="pt-5 pb-3 font-[600] text-[22px]">Start Earning</p>
            <p className="text-center">
              Choose between auctions and fixed-price listings. Start earning by
              selling your NFTs or trading others.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HowItWorks;
