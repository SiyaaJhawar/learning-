
const axios = require('axios');

const appId = '281301';
const privateKey = '-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA039n8XG/A+Y4EQQ099YrFTnhNAi6PnUs68ZAtNrnlM3BvWSY
5sTyErXOUfKQRh5vZ/YkE82MgSsyWWOQRZeIZuT9OwmdsSbESi4smM6COGjszxGK
BuGPLiLYsnck8cvDfNpOWvwUTeOABVwmyPMx/HTAtSiQghb/NkFM2kr2gys03Ww/
4gbt0pu8SB1KFNhUtzUzckQfiPIeSPccmfMSr6r5pFeMHdUUeiqA5brZXLPvht0n
hGXcOaicidVEvY6IWLBK20VP6KwtK/5t56gOvRlUXuOP+2OHSZktYI7JoqKfHp+t
jX//Ypg/UxzqWa1wX0i1+kTIRDITOerFeSnfCwIDAQABAoIBAAft2d7Cbe/efLGe
n8G+5MSZ8+h4f0sCJ5n7R8fAATih8iaAk/7q2Ux8RmzqFCCc2X5jSvz3EtJw5SVW
xzzkrnd1FE1XUfMnSeqiCof8DgPBY0dsF+mkITMQmWEveFIcWorewFtG4hf9dHo+
9zFHdNNLKUJhb/GAnTbSgegZMV6/eXtrChOFbM3u6mVT/gwHBmefKcZONvZGSysm
DQ4FgyqEsjL7aIE39p0FlS5VQhPa7JNpzsAi0fIAzVN9+z/8socBYYj+tzDkT1mB
q7lQuPxYEBYRLyaTHcTSXZhIlm49hyDa1lmUCT9udQiG3UzIiaVcf51gjeZCZcNO
029daJkCgYEA7Z0bYaMOb5QeEMIzjW0heTYlDzI15Lle9Limoz0XCK6AU7diYX5/
h0ESf/7o4P8qYsQQLt2YCqhgmWBw9n9NpZB+pVfeUrNBNwBUSBuJg059rmf2xYrg
taL4C7Yy9ghBozt2tuhbKOYSg41ha1t5GbrGYnmooyMn9JMY5fBvlBUCgYEA49z3
a3jZaPObH0FQbmeg7putU4EtQEgz4nVo8CJZQikw0y2zruGNNS6ndHWfL5NM3XmD
f7C/OSciyA3aYdWma2ioyTZGJjJywDfaXVVLNjIr6NejoA71mlTTGa3h2O9Mu3Tt
qCUn4KYFh12NC2BezdlRxnBxSxML/iylM5jkzp8CgYBd22P4ci7+lfQ2TG+Omp/R
QDjtQrkVCr/eTJ3N9xCFJmCcMODUf+Ih6+tB0c/tJ/13G9kEmhU3iID3tKeKRojG
MEhGSWoRIqtM7X1dKjtsOXHdlUVdjFjshl4SSjrhAivjLVbcMvXnNtHzUsI7ZNt1
9Vfth/67yeQ7cGsyUIHSbQKBgQC3Qw+HU2HgJBT9tUUgFp57aZ+kSn9/dNKt7uog
QC/zozdOkTIzk9pDDKvHYZZO6DRo6AMX3qpdKBm0NlgOWYwIVNtzQQB4Vhiuef1Z
FXFxPDbOhShnYcCsiE5kF9JN7GCVX7yIgKGq7zwBG/+FR9PX0VIQvHyR+daqbXPM
pMpZVwKBgQDr3i490fzNV1lnQbgZ2kovpwepA59PfRt8A/n2/rXUR/XinBdsjyE4
epSifJ/GW5ZlOm5MStZNpU2yXZaAJL0He6+wINDHzhb5y17oASLJFdyYWz07+sS9
P/1Dq27wuXwIUjEiNZtBQoKMfSc3piC5TpgYJL0aOKMjVEAFeWZItg==
-----END RSA PRIVATE KEY-----';
const installationId = '1';

async function getInstallationToken() {
  const jwt = require('jsonwebtoken');
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iat: now,
    exp: now + (10 * 60),
    iss: appId
  };
  const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });

  const response = await axios({
    method: 'post',
    url: `https://api.github.com/app/installations/1/access_tokens`,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`
    }
  });

  return response.data.token;
}

getInstallationToken().then(token => {
  console.log(token);
});
