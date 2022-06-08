const axios = require('axios');

function palindrome(text) {
    var re = /[^A-Za-z0-9]/g;
    str = `${text}`.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }

async function getText(req, res, next) {
    try {
        let { iecho } = req.query;

        if(iecho && iecho !== ''){
            if(palindrome(iecho)){
                res.status(200).json({
                    text: iecho,
                    palindrome: true
                });
            } else {
                res.status(200).json({text: iecho});
            }
        } else {
            res.status(400).json('error: no text')
        }

    } catch (error) {
        next(error);
    }
}

module.exports = {
    getText
};