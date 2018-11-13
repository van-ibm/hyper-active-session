const RUN_COMMAND = 'run command';

export function onWindow(browserWindow) {
  browserWindow.rpc.on(RUN_COMMAND, ({cmd, exec = false, uid = window.ACTIVE_SESSION}) => {
    cmd = exec ? cmd += '\r' : cmd;
    browserWindow.sessions.get(uid).write(cmd);
  });
};

exports.middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'SESSION_ADD':
    case 'SESSION_SET_ACTIVE':
      if(window) {
        window.ACTIVE_SESSION = action.uid;
      }

      break;
  }

  next(action);
};
