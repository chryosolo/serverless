module.exports = function(ctx, cb) {
  console.log('Webhook invoked');
  cb(null, { hi: ctx.data.name || 'Anonymous',
  "foo": ctx.data.carl });
};