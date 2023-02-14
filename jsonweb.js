const jwt = require("jsonwebtoken");

const appId = "281301";
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAwfeMaJUqMBnSnrCSzCWWipgYspWD/MEYclBTVZp67rPZoWtb
B1OOpxCvWiMHnU/hyYlEnFozVZEk8Let1cZ3fTqKYtqozEspV9p1a/o4Sw3qg3o9
KISAsUZ55vbY6yw9FgPk9utByogDOI8QsBFlrifMPBUwzAkSDO81nayp0+mLUHb9
4dYqiuwxpgBxgewqAWf7tKLGukef2OEvGijxCowl0zEmYOhqoKZOQSmG+Qt9HXN9
qU7TUOPELdDb1oCSsTwFfj0a4TCTaGxFbm9lmcLES2YHZz9tqTe/jfFBxXp4Bt3E
Cg/8kWQgHs4/kpg5OWlH4hKC05AeAyi9C9nxrQIDAQABAoIBACCcB6UFfuQ7UyeO
s/9SSm7ehzhu3pO9uuhtDLWVlRlQb0QuEk23BIKd0X0r6nnOFj2VsE1A9ORr1HQL
zVPlW+1XzDA2Zq6B7F9ywM74cEJeApE8GdAYBrLHEHN+CJXxCAwNd47zmkn8d94o
XzvakOeolTN8tIl49OnrxW3Ou3Z+wBmGyBJeFbhpYfbgyg8ZyoyFHV03SMEfZA9V
XkQRMC0gBR+Ui71TxCGb+7W4xO8myEC1gCecV9l0VmaH2EDiOIE+CHb8xagDGzX+
LG5PUotsCIqusMd24wAnOIE5gqXZ3eJa8pW2WTpx9/Qlj6IqFJ5TvsFsvAW7Ls84
9vsy9JkCgYEA4Fmb5DH5uFr7GETl4bxfJQdcz7ORrTyzjcfVQkeM3zoiX3Bd7tyo
GnZ0akOB2LhVxmtTpUZYdQoZYhwnQm/E3OKzuS+I7FMG0kxmiRu4VfjvpW8YHa3L
eRUFYjDcY/9jf5bxTra9n1ey3vdaSFEB4Oify1nCQvqqXOMVV944wB8CgYEA3VSo
OcVHpiDoE0knjSAfi68wcWv6VIswyNBf27BIDBdSKadr7mBvTmna9k6AKptU7oRz
YJAGsQsSsV9CvoNwuQaP4SAQ92C+qQ8qKGZUtkAP217O7LHi3fh4+6DJfvHONJwk
qhlyFLbyNaCEX+llHZ1/5nSfToVRRaWKib7w5LMCgYEAsYl3+e8qZJ9q0NvE5wwA
ZvcalSrO/z5oAKzAsICalBQXG1t6mgl35ekTWvwtBulox2oreUDfw07Io4EP+F0m
dn3YJ5XcTtetMEJRafLLvw0N5+awONxNhnYCGp/76A40GMXEE7w89pmZ7SPlCBFC
4U51FaDkP8jJhFQXkb9DPZUCgYBqmPdcu5NCg97CSx1tbudCk2G1ftfWGCOq1BEW
8dQBXsoHncbxzChPj9QRhMVdv+or5kbbXwKaCkc6fjLbJtsHgg2R06vYORQawF8B
jieGj1wTv5nRjetCFQXPyyTAqx0xYXKXKiIzr9j/0wtuVi6JEO4kxE5ltvfpn00W
Aoxq2QKBgQCPvPjqcd+iJXOYahvSFR2zXI+ekk9P04+4gJN89kFBrBYYnJzuSe9N
uLHDdTjpCod67s/ENe6aAfdgOJjYVTxZZKoU4xzioXfzLKGCuSGWYCFPNsKhD9Av
sh53gkp1Emx+ug0TZnb0zlqOoomzAC2+QkOtH89MwF5qqFRsDTbfQw==
-----END RSA PRIVATE KEY-----
`;

// Generate JWT
const header = { alg: "RS256", typ: "JWT" };
const payload = { iat: Math.floor(Date.now() / 1000), exp: Math.floor(Date.now() / 1000) + 600, iss: appId };
const secret = privateKey;
const jwtToken = jwt.sign(payload, secret, { algorithm: "RS256", header });

console.log(jwtToken);




