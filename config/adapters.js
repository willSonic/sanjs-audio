module.exports.adapters = {
  'default': 'disk',
  memory: {
    module: 'sails-dirty',
    inMemory: true
  },

  
  disk: {
    module: 'sails-disk',
    filePath: './.tmp/dirty.db',
    inMemory: true
  }
};