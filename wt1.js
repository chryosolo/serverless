var util = require('util');
module.exports = function(ctx, cb) {
    console.log(util.inspect(ctx.body, { depth: 1 }));
    cb();
};
