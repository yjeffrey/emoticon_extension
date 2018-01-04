class Emoticon {
  constructor(key, name, val) {
    this.key = key;
    this.name = name;
    this.val = val;
  }
}

const EMOTICONS = [
  new Emoticon('shrug', 'Shruggie', '\u00AF\\\\_(\u30C4)_/\u00AF'),
  new Emoticon('facepalm', 'Facepalm', '(\uFF0D\u2038\u10DA)'),
];
