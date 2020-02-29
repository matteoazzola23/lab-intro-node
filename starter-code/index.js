class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length++;
    
  }

  get(pos) {
    if (pos <= this.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }
 
  max() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    } // no need to add ELSE, right?
    return Math.max(...this.items);
  };

  min() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  };

  sum() {
    if (this.length === 0) {
      return 0;
    } return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");;
    } return this.sum () / this.length;
  }
}

module.exports = SortedList;
