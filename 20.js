/*
Написать функцию, которая принимает на вход URL, например https://www.google.com/doodles/rubiks-cube, и возвращает объект вида:
{
protocol: “http”, 
hostname: “www.google.com”,
  child: {
  path: “doodles”
  child: {
   rubiks-cube
  }
 }
}
URL может быть любой длины, но формат всегда будет {protocol}://{hostname}/path/path/…/path
*/

const my_url = "https://www.google.com/doodles/rubiks-cube/one/two/three/four";
const splitUrl = (url) => {
  const protocol = url.slice(0, url.indexOf(":", 0));
  const hostname = url.split('/')[2];
  const urlArray = url.split('/');
   
  let urlObject = {
    protocol,
    hostname
  };

  
const addChild = (object, array)  => {
  if (array.length > 0) {
    object.child = {
      path: array[0]
    }
    return addChild(object.child, array.splice(1)); 
  }
  return urlObject;  
}

return addChild(urlObject,urlArray.splice(3));
}

console.log('test');
console.log(splitUrl(my_url));

