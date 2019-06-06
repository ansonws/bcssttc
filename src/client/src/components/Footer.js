import React from 'react';

function Footer() {
  return (
    <footer style={{backgroundColor: 'white'}}>
    <h1 style={{textAlign: 'center'}}>Thank You to Our Sponsors</h1>
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0'
        }}
        >
        <div 
          className="sponsorship"
          style={{ backgroundImage: `url("/images/sponsorships/sunrise.jpg")`}}
          >
        </div>
        <div 
          className="sponsorship"
          style={{ backgroundImage: `url("/images/sponsorships/bctta.png" )`}}
          >
        </div>
        <div 
          className="sponsorship"
          style={{ backgroundImage: `url("/images/sponsorships/pingpongdepot.jpg")`}}
          >
        </div>
        <div 
          className="sponsorship"
          style={{ backgroundImage: `url("/images/sponsorships/flameco.jpg")`}}
          >
        </div>
        <div 
          className="sponsorship"
          style={{ backgroundImage: `url("/images/sponsorships/paddle-palace.png")`}}
          >
        </div>
      </div>
      {/* <p>
        © 2019 BC Secondary School Table Tennis Championships
      </p> */}
    </div>
    </footer>
  )
}

export default Footer;
