/* Pseudo code:

1. Assign zero to variable $counter.
2. Assign the querySelector method of the document object, with one argument (string '.hot-button') to variable $hotButton.
3. Assign the querySelector method of the document object, with one arguemnt (string '.click-count') to variable $clickCount.
4. addEventListener of the $hotButton variable with two arguments, string 'click' and increaseCounter variable.
5. Function definition named increaseCounter with one parameter, event.
6. Increment $counter variable by one in increaseCounter function code block.
7. Assign string 'Click:' concatenated with $counter variable to the property textContent of the variable $clickCounter.
8. 'If' statment with condition variable $counter less than 4: then, string 'hot-button cold will be assinged to the property className of the $hotButton variable.
8. 'Else-If' statment with condition variable $counter less than 7: then, string 'hot-button cool will be assinged to the property className of the $hotButton variable.
8. 'Else-If' statment with condition variable $counter less than 10: then, string 'hot-button tepid will be assinged to the property className of the $hotButton variable.
8. 'Else-If' statment with condition variable $counter less than 13: then, string 'hot-button warm will be assinged to the property className of the $hotButton variable.
8. 'Else-If' statment with condition variable $counter less than 16: then, string 'hot-button hot will be assinged to the property className of the $hotButton variable.
8. 'Else' then, string 'hot-button nuclear will be assinged to the property className of the $hotButton variable.
*/

var $counter = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', increaseCounter);

function increaseCounter(event) {
  $counter++;
  $clickCount.textContent = 'Click:' + $counter;
  if ($counter < 4) {
    $hotButton.className = ('hot-button cold');
  } else if ($counter < 7) {
    $hotButton.className = ('hot-button cool');
  } else if ($counter < 10) {
    $hotButton.className = ('hot-button tepid');
  } else if ($counter < 13) {
    $hotButton.className = ('hot-button warm');
  } else if ($counter < 16) {
    $hotButton.className = ('hot-button hot');
  } else {
    $hotButton.className = ('hot-button nuclear');
  }
}
