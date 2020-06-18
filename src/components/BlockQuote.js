import React from "react";

const BlockQuote = ({ quote, author }) => {
  return (
    <div className='block-quote'>
      <p className='block-quote-sentence'>{`"${quote}"`}</p>
      {author && <p className='block-quote-author'>
        <span></span> {author}
      </p>}
    </div>
  );
};

export default BlockQuote;
