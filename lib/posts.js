/*
The code is also here. Refer to it for a side compare:
https://www.tutorialspoint.com/nextjs/nextjs_dynamic_routes.htm

Inside this lib directory are just utility functions (i.e library functions).
These functions can be placed anywhere, but we chose lib as our special directory.

We have 2 custom functions that we wrote:
getAllPostIds 
getPostData

getAllPostIds:
In here, we are to return an array of every path that we conceive must be handled.

For posts/[id]: Perhaps we say only 2 must be handled: posts/one and posts/two
We represent each path with a matching json element.

If a second dynamic was there, like posts/[id]/[gender],
then we would need each json element to match both conditions

getPostData:
Once we determine what path we are on, what data should be served?
In this function, we specify what data we should serve based on matching id.
We hence pass in the id parameter.
If gender was included, we'd pass that in too.

*/

export function getPostData(id) {
    const postOne = {
       title: 'One',
       id: 1,
       date: '7/12/2020'
    }
 
    const postTwo = {
       title: 'Two',
       id: 2,
       date: '7/12/2020'
    }
    if(id == 'one'){
       return postOne;
    }else if(id == 'two'){
       return postTwo;
    }     
 }
 
 export function getAllPostIds() {
    return [{
       params: {
          id: 'one'
       }
    },
    {
       params: {
          id: 'two'
       }
    }
 ];
 }