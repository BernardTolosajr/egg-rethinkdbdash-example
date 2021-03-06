'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1533978011266_5861';

  // add your config here
  config.middleware = [];

  config.rethinkdbdash = {
    client: {
      host: 'localhost',
    },
  };

  config.security =  {
    csrf: {
      enable: false,
    }
  };

  return config;
};
