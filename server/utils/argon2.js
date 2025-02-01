const argon2 = require('argon2')


async function hashPassword(password) {
    try {
        const hash = await argon2.hash(password, {
            type: argon2.argon2id,
            memoryCost: 2 ** 14, // 16MB
            timeCost: 3, //number of iterations
            parallelism: 1,//number of threads that can be used for hashing
        });
        return hash;
    } catch (err) {
        console.error(err);
    }
}


async function verifyPassword(password, hash) {
    try {
        const valid = await argon2.verify(hash, password);
        return valid;
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    hashPassword,
    verifyPassword
};