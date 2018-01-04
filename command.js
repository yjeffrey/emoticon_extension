const COMMAND = {
  SET_CURRENT: 0,
  PASTE: 1,
  GET_CURRENT_SELECTED: 2
};

class Message {
  constructor(command, data) {
    this.command = command;
    this.data = data;
  }
}
