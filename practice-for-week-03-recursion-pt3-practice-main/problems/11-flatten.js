/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr, output = []) {
  if (arr.length === 0) return output;
  let head = arr[0];
  let rest = arr.slice(1);
  if (Array.isArray(head)) {
    return flatten(head.concat(rest), output)
  }
  output.push(head);
  return flatten(rest, output);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
