import React from 'react';

function ConfirmationPage() {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
      }}
    >
      <div
        style={{
          width: '65%',
          textAlign: 'center',
          fontFamily: 'Montserrat',
          lineHeight: '1.5',
        }}
      >
        <h1>Thank you, your entry was received.</h1>
        <p style={{ marginTop: '50px'}}>
        All fees must be submitted to the Championship’s Administrator, Roger Willan, on or before Wednesday, February 13th.   Entry fees (cheques) will be sent to Roger Willan at Vancouver Technical, 2600 East Broadway, Vancouver, British Columbia, V5M 1Y5. Please make cheques payable to Vancouver Technical with the memo line “Prov. Table Tennis Finals”. Do not send cash by mail. Regular mail takes approximately three business days. 
        </p>
      </div>
    </div>
  )
}

export default ConfirmationPage;
