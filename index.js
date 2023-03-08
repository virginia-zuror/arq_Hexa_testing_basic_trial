const config = require('config-yml');

const {
  LogDanger,
  LogInfo,
  LogSuccess,
  LogWarning,
} = require('./src/utils/magic');


const server = require('./src/server/index');

server.listen(config.port, () => {
  LogInfo(`Server running on http://localhost:${config.port}`);
});

server.on('error', (err) => {
  LogDanger(err);
});
