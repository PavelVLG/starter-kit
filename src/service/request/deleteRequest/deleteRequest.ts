import axios from "axios";


let Content =  {
    
  title: "Front title",
  content: "Front content",
  progress: 1.1,
  user: 1

}
let testTime = {
  Name: 'PAnda',
  LastName: 'MVP'
}
export const deleteRequest = (url: string = 'http://127.0.0.1:8000/api/v1/books/book/detail/4/') => {
 return  axios.delete(url)
 .catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
};