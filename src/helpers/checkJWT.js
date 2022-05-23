import jwt_decode from 'jwt-decode';

function checkJWT(jwtToken) {
    const decodedToken = jwt_decode(jwtToken);
    const expirationUnix = decodedToken.exp

    const now = new Date().getTime();
    const nowInUnix = Math.round(now / 1000);

    if (expirationUnix - nowInUnix > 0) {
        return true;
    } else {
        return false;
    }
}

export default checkJWT;