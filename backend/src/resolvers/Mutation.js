const mutations = {
  generateGod(parent, args, ctx, info) { 
    global.gods = global.gods || []
    const newGod = { power: args.power }
    global.gods.push(newGod)
    return newGod
  }
};

module.exports = mutations;
