// import logo from "./ images/logo.svg"
// import desktop from "./images/bg-intro-desktop"
import './App.css';
function App() {
  return (
    <div className="container">
      <div className="left">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced devolopers solve problems in real time.
          Watching scripted tutorialsis great,
          but understanding how developers think is invaluable.
        </p> 
      </div>
      <div className="right">
        <div className="trial">
          <a href="/">
            <strong>Try it free 7 days</strong>then 20/mo. thereafter
          </a>
        </div>
        <div className="form-container" >
          <form className="info" action="" method="post">
            <input type="text" name="" placeholder="First Name" />
            <input type="text" name="" placeholder="Last Name" />
            <input type="email" name="" placeholder="Email Address" />
            <input type="password" name="" placeholder="Password" /> 
          
            <button className="form-btn" type="button" name="button">CLAIM YOUR FREE TRIAL</button>
          </form>

          <p className="terms">
            By clicking the button, you are agreeing to our 
            <a href="/" className="red">Terms and Services</a>
          </p>
        </div>
      </div>
    </div>
)
}

export default App;
