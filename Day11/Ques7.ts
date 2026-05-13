// 7. The Union Manipulation Puzzle
// Scenario: You have a massive union of possible events but need to categorize them for specific handlers.
// Task: Given type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress'.
// Use Extract to create MouseEvents (only click and dbclick).
// Use Exclude to create NonFormEvents (everything except submit and reset).

type Allevent = | 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress' ;
type MouseEvents = Extract<Allevent ,  'click' | 'dbclick'> ;
type NonFormEvents = Exclude<Allevent , 'submit' | 'reset'>;
let mouseEvent1 : MouseEvents = 'click';
let mouseEvent2 : MouseEvents = 'dbclick';

console.log(mouseEvent1);
console.log(mouseEvent2);

let event1 : NonFormEvents = 'click';
let event2 : NonFormEvents = 'keypress';

console.log(event1);
console.log(event2);