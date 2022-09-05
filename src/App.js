import "./styles.css";

export default function App() {
  return (
    <div className="container">
        <div className='box1'>
          <div className='logo-shape'></div>
          <div className='logo-text1'>BASE</div>
          <div className='logo-text2'>APPAREL</div>
          <div className='heading1'>WE'RE</div>
          <h3 className='heading2'>COMING</h3>
          <h3 className='heading3'>SOON</h3>
          <p className='para'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem psum has been the industry’s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        <form action="#" name="getEmail_id" id="email_form" onsubmit="required()">
            <input type="email" id="email" name="email" className='input-email' placeholder='Email Address' />
            <span className="error"><p id="email_error"></p></span>
            <button className='btn' type='submit' name="submit" value="submit">
                <i className="arrow right"></i>
            </button>
        </form>

        </div>
        <div className='box2'>
          <img className='backImage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB0TgPlaLPqZfBAB8z_xKbARKQSzBwYxt-9A&usqp=CAU' alt='image' />
        </div>
      </div>
  );
}
