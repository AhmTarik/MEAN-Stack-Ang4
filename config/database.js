const crypto = require('crypto');


crypto.randomBytes(256, (err, buf) => {

  buf.toString('hex')
});

module.exports={
    uri:'mongodb://localhost:27017/mean-ang4',
    secret: crypto,
    db: 'mean-ang4'

  }
