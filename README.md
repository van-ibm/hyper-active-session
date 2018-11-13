Hyper Active Session
=========

Facilitates writing commands to the active terminal in [Hyper](https://hyper.is/).

## Install

To install, edit `~/.hyper.js` and add `"hyper-active-session"` to the `plugins` list.

```javascript
plugins: [
  "hyper-active-session",
],
```

## Usage

As new sessions are created or activated (i.e. the user switches to it), the UID is stored in `window.ACTIVE_SESSION`. Hyper plugin developers can also run commands in the current terminal using the following code in their plugins.

```javascript
window.rpc.emit('run command', {
  cmd: 'echo Hello World',
});
```

The object parameter accepts the following properties:

- `cmd` - the string command to run in the terminal
- `exec` - a boolean to execute the command automatically (defaults to true)
- `uid` - the UID of a known session (defaults to window.ACTIVE_SESSION)