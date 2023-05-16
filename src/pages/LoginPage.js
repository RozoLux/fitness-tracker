import athlete from '../Images/athlete.png';
import styles from '../styles.css';

const LoginPage = () => {
    return(        
        <div> 
            <header>
                Login
            </header>
            <img src={athlete} className="athlete" alt="logo"/>            
            <form>
                <label> 
                    <div>Username </div>
                    <input type="text" name="Username" value="Username"/>
                </label>                         
            </form>

            <form>
               <label> 
                    <div>Password</div> 
                    <input type="text" name="Password" value="Password"/>
                </label>               
            </form>


            <button> Log In</button>
            <button> Sign Up</button>

        </div>
        
    );

}


export default LoginPage;