import React from "react";
import sponser1 from "../assets/sponser1.png";
import sponser2 from "../assets/sponser2.png";
import sponser3 from "../assets/sponser3.png";
import sponser4 from "../assets/sponser4.png";
import sponser5 from "../assets/sponser5.png";

function ListedItem() {
  return (
    <div className="d-flex">
      <div className="powerd-by-single-item">
        <a
          href="https://www.cointiger.com/en-us/#/trade_center?coin=ltrbt_usdt"
          target="blank"
        >
          <img src={sponser1} alt="" />
        </a>
      </div>
      <div className="powerd-by-single-item">
        <a
          href="https://www.coingecko.com/en/coins/little-rabbit-v2"
          target="blank"
        >
          <img src={sponser2} alt="" />
        </a>
      </div>
      <div className="powerd-by-single-item">
        <a
          href="https://pancakeswap.finance/swap?outputCurrency=0x6c46422a0f7dbbad9bec3bbbc1189bfaf9794b05"
          target="blank"
        >
          <img src={sponser5} alt="" />
        </a>
      </div>
      <div className="powerd-by-single-item">
        <a
          href="https://coinmarketcap.com/currencies/little-rabbit-v2/"
          target="blank"
        >
          <img src={sponser3} alt="" />
        </a>
      </div>
      <div className="powerd-by-single-item">
        <a
          href="https://www.bitmart.com/trade/en-US?symbol=LTRBT_USDT&layout=basic"
          target="blank"
        >
          <img src={sponser4} alt="" />
        </a>
      </div>
      
    </div>
  );
}

export default ListedItem;
