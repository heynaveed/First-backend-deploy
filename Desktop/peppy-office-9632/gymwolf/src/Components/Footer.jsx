export default function Footer(){
    return (
        <div className="footers">
        <div className="footer">
           <div>
            <h1>ABOUT</h1>
            <p>About us</p>
            <p>Contact</p>
           </div>
           <div>
           <h1>LEGAL</h1>
            <p>Terms of Service</p>
            <p>Privacy</p>
            <p>Pricing</p>
           </div>
           <div>
            <h1>Get the app</h1>
            <img className="footerlogo" src="https://www.gymwolf.com/img/footer/android-button.png" alt="" />
            <img className="footerlogo" src="https://www.gymwolf.com/img/footer/ios-button.png" alt="" />
           </div>
           <div>
           <h1>SOCIAL</h1>
            <img src="https://www.gymwolf.com/img/footer/fb-button.png" alt="" />
           </div>
           <div>
            <h1>LANGUAGE</h1>
            <p>Eesti keeles</p>
           </div>
        </div>
        <div>
            <hr />
            <br />
            <p style={{color:"white"}}>Copyright © Mooncascade OÜ. All Rights Reserved. Tel: +372 5344 5686. E-mail: info@gymwolf.com</p>
            <br />
        </div>
         </div>
         )
}