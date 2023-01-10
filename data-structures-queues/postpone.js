/* exported postpone */

function postpone(queue) {
  const front = queue.peek();
  if (front !== undefined) {
    queue.enqueue(front);
    queue.dequeue();
  }
}
