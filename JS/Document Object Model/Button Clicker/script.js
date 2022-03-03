console.log('top of script')

function addDefinition(element) {
    element.remove();
}  
  
  function logIn(elem) {
    elem.innerText = "Logout";
  }
  
  function addLikes() {
    // var elem = document.querySelector( button);
    console.log('button was clicked')
    // elem.innerHTML = elem.innerHTML + "<div class='box'></div>"
  }
  
  function example(element) {
    console.log("element clicked", element);
}

  
function timesFive(numIn){
  // take the starting number and multiply by 5

  
  var result = numIn * 5

  return result
}

function addOne(num) {
  var result = num + 1
  return result;
}
var storeResult = addOne(1)
console.log(storeResult)