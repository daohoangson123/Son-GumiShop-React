import { useEffect, useState } from 'react';
import './User.css';

const User = ({...props}) => {

    const [signIn, setSignIn] = useState(props.user);

    const [inputValue, setInputValue] = useState({
        UserName: "",
        Password: "",
        RegisEmail: "",
        RegisUser: "",
        RegisPass: "",
    })
    
    useEffect(() => {
        setSignIn(props.user);
    }, [props.user])

    return (
        <div className='User'>
            {signIn
            ?
            <div className='SignIn'>
                <form action="">
                        <div className='Input_Container'>
                            <div>
                                <i className="fa-solid fa-user"></i>
                                <input type="text" name="UserName" id="UserName" value={inputValue.UserName} required autoComplete='off' placeholder='User Name' onChange={(event) => setInputValue({...inputValue, 'UserName' : event.target.value })}/>
                            </div>
                            <div>
                                <i className="fa-solid fa-lock"></i>
                                <input type="password" name="UserPass" id="UserPass" value={inputValue.Password} required autoComplete='off' placeholder='Password' onChange={(event) => setInputValue({...inputValue, 'Password' : event.target.value })}/>
                            </div>
                        </div>
                        <div className='User_Submit'>
                            <button type="submit" value="Submit">
                                Sign In
                            </button>
                        </div>
                        <span className='Sign-Regis'
                        onClick={() => setSignIn(false)}
                        >Create Account</span>
                </form>
            </div>
            :
            <div className='Regis'>
                <form action="">
                        <div className='Input_Container'>
                            <div>
                                <i className="fa-solid fa-envelope"></i>
                                <input type="email" name="RegisEmail" id="RegisEmail" value={inputValue.RegisEmail} required autoComplete='off' placeholder='Email' onChange={(event) => setInputValue({...inputValue, 'RegisEmail' : event.target.value })}/>
                            </div>
                            <div>
                                <i className="fa-solid fa-user-plus"></i>
                                <input type="text" name="RegisUser" id="RegisUser" value={inputValue.RegisUser} required autoComplete='off' placeholder='User Name' onChange={(event) => setInputValue({...inputValue, 'RegisUser' : event.target.value })}/>
                            </div>
                            <div>
                                <i className="fa-solid fa-lock"></i>
                                <input type="password" name="RegisPass" id="RegisPass" value={inputValue.RegisPass} required autoComplete='off' placeholder='Password' onChange={(event) => setInputValue({...inputValue, 'RegisPass' : event.target.value })}/>
                            </div>
                        </div>
                        <div className='User_Submit'>
                            <button type="submit" value="Submit">
                                Register
                            </button>
                        </div>
                        <span className='Sign-Regis'
                        onClick={() => setSignIn(true)}
                        >Already have Account?</span>
                </form>
            </div>
            }
        </div>
    )
}

export default User;