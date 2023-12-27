const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);
function signJwt(username, password) {
  const userNameResponse = emailSchema.safeParse(username);
  const passWordResponse = passwordSchema.safeParse(password);
  if (!userNameResponse.success || !passWordResponse.success) {
    return null;
  }
  const signature = jwt.sign({}, jwtPassword);
  return signature;
}

const answ = signJwt("harilal@gmail.com", "asdfdfdfadfad");

function decodeJwt(token) {
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}
console.log(decodeJwt(answ));

function verifyJwt(token) {
  const decoded = jwt.verify(token, jwtPassword);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}
console.log(verifyJwt(answ));
