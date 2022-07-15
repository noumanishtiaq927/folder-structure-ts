import { Navigate } from 'react-router-dom';

const PrivateRoutes = (props:any) => {
  let auth = {'token':true}
return (
    auth.token ? <>{props.children}</> : <Navigate to='/authentication/signin'/>
  )
}

export default PrivateRoutes;