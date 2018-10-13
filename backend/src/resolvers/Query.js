const Query = {
  gods(parent, args, ctx, info) {
    global.gods = global.gods || []
    return global.gods
  }
};

module.exports = Query;
