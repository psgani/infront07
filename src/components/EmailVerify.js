import { useState, useEffect, Fragment } from "react";
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
const EmailVerify = ()=>{ 
    const [validUrl, setValidUrl] = useState(false);
    const param = useParams();

    useEffect(()=>{
        const verifyEmailUrl = async()=>{
            try{
                const url=`http://18.220.155.174:5000/api/users/${param.id}/verify/${param.token}`;
                const {data} = await axios.get(url);
                console.log(data);
                setValidUrl(true)
            }catch(error){
                console.log(error);
                setValidUrl(false)
            }
        };
        verifyEmailUrl()
    },[param])
    return(
        <Fragment>
            {validUrl ? (
                <div className="container">
                    <h1>Success</h1>
                    <h2>Email verified</h2>
                    <Link to="/login">
                        <button className="btn-primary">Login</button>
                    </Link>
                </div>
            ):(
                <h1>404 Not Found</h1>
            )}
        </Fragment>
    )
}
 
export default EmailVerify;