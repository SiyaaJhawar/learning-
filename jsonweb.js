const jwt = require("jsonwebtoken");

const appId = "281301";
const privateKey = `-----BEGIN RSA PRIVATE KEY-----

MIIEpAIBAAKCAQEAnRO/swLoBk3hW9mEqfZGtjhAvsVqDl2d6UiEpL3imElJqy21
KYSJUK+ITQ73XdLU4OuEJ5iExezQOOnwHWqpe6Q+4MNy+/MwdxFdk+zR04Enh9aD
ulsVLf5+BRlaxg6pWBEvZIyKst+Xi4XSLZS9HU3/rjRpsQtFqrRUOUBJ2kUXBBne
dZjcJdz4fexznMExJLViXamKPag6GjSzIC+C0cqXe8CsQef9Y4H6ZPHU7XpVMa8k
iT3CxDMayQACwJxoVZrCky1Zv5bSk5KxSgJZEarpGPcuRTPmN4OqvqGpmOitbTN4
N09ln5IokY62/rGXU3d2Ru69qvXEyfIuia1hIQIDAQABAoIBAChT+7HAG0YTFLr6
O79PRZRfGPBhyvrpOjO8tKF/RwAGQO28DHkeWArpJjtyjjv+dz1P+lwYIm6WgFc8
aLOEwQLHhoU6aPka1OSdBsOF19FPpZCQmL1tySBH6J7yhYW4Ge5MaziLhMir80KV
FwMw3uT5M53MQx57YGWVatJQGSX6lBHOWpXPdaiXKcW9IidSRoef8IvZlGE8OkjJ
n1aAgQR2l4oCAnEsM2PV1ssGwuZ/lzBT16QhqjtQsXYAHfrMk0moIgKcCrdW0WGL
Jpge/vbARAl5WzawWgXpCqd+UuazwVFZ34jmdEOn3uYbh21l1EmFmqH7BFqH9aUx
hx7l4AECgYEAzPJA6MeHluJ0MSOJP4a2C/KPbGLU3A8gGyhCyiPQrk7tRzpsSA1H
hwfLeSTI0w2OXE/Buk7dkMFZk64eArpMJcotbNASPG43kqe/pwIL8Phe+ggPiLCM
+b4O0K7H2kjvpQEBn/QswfjgNCBM7GHhrVSbspXfylaRI+HPPHAD14ECgYEAxDTN
2Nxw03UtxWwdKEXPiXYW3Yxm0+6PffWwbL3urP/fiOexQRKJU+GsbFzz8KnAIO2w
EgO0ig7a6mo/keNH+14Q7Umpn86n33xiiqwr+cwUTCcRBRjP7mr8hsy9Yg5rJEdj
R1ESbup1bEXEbj8CtHsKj+CQROLy2flnAsTXWaECgYEAh1XN0Sm5esStb6mEv2No
obkaRrt4zpxaWjSa7jr6WbCa9Xc5+9ZxDlTyY1wMFXqVMJYmWq4rl6RmT6QiAzEc
ibPZjUpVUHyDzB9j6pfqZMTOixN5loznex+rTtir9pRFU9O3S/YE/E4pV6KgyVPV
oA0IB8T6k/XYQDakD8f0cYECgYB7PmfmxmEgkkRT9BtEhsVcJQ8rzttwWDNN/Zv6
Ujuv83Gn/1E5/LjCNckmsCSSkS4cAPFN/4HSDo64HFEeBFPcszOSuWiQ9zA/k1Qa
oxdkayp8wzVPrExACHfi/IwhIclvGmBkFaqsfR2RCyndzjqWv4rc4UP94UiGXsCz
3o0ewQKBgQDJVJn3WTrNS9D2TSduwc+sPhgDyGv5Kj2qZqqB9TNo312VjIT2iGeG
oYXJPOmwz+qZk9iFtC3/9zJOgslIG7XWIZDg4XHItXdhkU0+EoG1bIK9AU0D4R72
kM3ciolsV2m8ladw+ADH1knuGOU9OpX7I3zk5xLWGjVaHbiwKNltBg==
-----END RSA PRIVATE KEY-----`;

// Generate JWT
const header = { alg: "RS256", typ: "JWT" };
const payload = { iat: Math.floor(Date.now() / 1000), exp: Math.floor(Date.now() / 1000) + 600, iss: appId };
const secret = privateKey;
const jwtToken = jwt.sign(payload, secret, { algorithm: "RS256", header });

console.log(jwtToken);




