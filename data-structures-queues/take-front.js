/* exported takeFront */

function takeFront(queue) {

  if (queue.peek() === undefined) return;

  return queue.peek() && queue.dequeue();

}
