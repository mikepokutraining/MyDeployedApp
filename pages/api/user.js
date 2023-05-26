/*

The site:
https://www.tutorialspoint.com/nextjs/nextjs_response_helpers.htm
May have a typo, as req maybe should be res

Response Helper methods:

res.status(code):
This methods set the status of response. Code passed must be a valid HTTP status.

req.json(json): (todo)
This method returns a JSON response. json passed must be a valid JSON object.

req.send(body): 
This methods sends an HTTP response. Response can be string, object or Buffer.

More details:

res.json(): 
This method is an extension provided by Express.js. It automatically serializes 
the response data to JSON and sets the appropriate content-type header ('application/json'). 
You can pass an object, an array, or any JSON-serializable data as an argument, and Express.js 
takes care of converting it to JSON and sending it in the response.

Earlier we used:

res.end(): 
This method is used to end the response process and send a response back to the 
client. It allows you to explicitly specify the response body as a string or a buffer. It 
does not perform any automatic serialization or content-type setting. You need to manually 
set the appropriate content-type header and serialize the response data if needed.

*/

export default (req, res) => {
    

  // using res.json
  //res.status(200).json({ name: 'Robert' });

  // using res.send
  res.send("hello");

}