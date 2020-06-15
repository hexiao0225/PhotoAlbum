import React from "react";

const BlockQuote = ({ quote, author }) => {
  return (
    <div className='block-quote'>
      <p className='block-quote-sentence'>
        "We believe our blog will have a strong influence."
      </p>
      <p className='block-quote-author'>
        <span></span> Amal Jodwani
      </p>
    </div>
  );
};

export default BlockQuote;
