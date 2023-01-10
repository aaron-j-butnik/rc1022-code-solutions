/* exported get2ndFromTop */

function get2ndFromTop(stack) {

  if (stack.peek() !== undefined) {
    const topOfStack = stack.pop();
    const secondInStack = stack.peek();
    stack.push(topOfStack);

    return secondInStack;
  }
}
