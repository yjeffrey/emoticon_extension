class Emoticon {
  constructor(key, name, val) {
    this.key = key;
    this.name = name;
    this.val = val;
  }
}

const EMOTICONS = [
  new Emoticon('shrug', 'Shruggie', '¯\\_(ツ)_/¯'),
  new Emoticon('facepalm', 'Facepalm', '(－‸ლ)'),
];
