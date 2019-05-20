import React from 'react'; 

function ContactUsPage() {
  return ( 
    <main>
      <h1>Contact Us</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="name" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <input type="textarea" name="message" id="message" />
        </div>
        <input type="submit" value="Send" />
      </form>
    </main>
  );
}
 
export default ContactUsPage;
