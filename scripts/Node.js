export default class Node {
  constructor(data) {
    this.data      = data;
    this.endOfWord = false;
    this.children  = {};
  }
}
