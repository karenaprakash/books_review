/**
 *  actions : all actions which are used in this project
 */
import axios from 'axios';
import {reset} from 'redux-form';

/*-------- firebase -------------*/
import {storage } from '../firebase-config.js';

//getBooks : get all books
export function getBooks(
    limit = 10,
    start = 0,
    order = 'asc',
    list = ''

){
    const request = axios.get(`/api/getBooks?limit=${limit}&skip=${start}&order=${order}`)
                    .then( response => {
                        if(list){
                            return [...list,...response.data]
                        }else{
                            return response.data
                        }
                    })


    return{
        type : 'GET_BOOKS',
        payload : request 
    }
}
//getBookWithReviewer
export function getBookWithReviewer(id){
  
    const request = axios.get(`/api/getBook?id=${id}`)
  
    return (dispatch) => {
        request.then(({data})=>{
            let book = data;

            axios.get(`/api/getReviewer?id=${book.ownerId}`)
            .then(({data})=>{
                let response = {
                    book,
                    reviewer : data
                }
               // console.log(response)
                dispatch({
                    type : 'GET_BOOK_W_REVIEWER',
                    payload : response 
                })
            })

            
        })
    }

}
//clearBookWithReviewer : clear book used when we go inside perticuler book and come outside  
export function clearBookWithReviewer(){
        return{
            type : 'CLEAR_BOOK_W_REVIEWER',
            payload : {
                book : {},
                reviewer : {}
            } 
        }
}


/*
export function  addBook(book) {
    console.log(book.get('bookImage'))
    let currentImageName = "firebase-image-"+Date.now();
    let uploadImage = storage.ref(`images/${currentImageName}`).put(book.get('bookImage'));
    uploadImage.on('state_changed',
        (snapshot) => { console.log('image uploaded') },
        (error) => {
            alert(error);
        },
        () => {
            storage.ref('images').child(currentImageName).getDownloadURL().
            then(url => {
                const  bookImage = url;
                let formData = new FormData();
                formData = book;
                
                book.bookImage = bookImage;

                if(url){
                    const request = axios.post('/api/book',book)
                    .then(response => {
                        alert('Data uploaded Successfully.')
                        return response.data 
                    })
                    .catch((err) => {
                        alert('error while uploading image using firebase storage')
                    });
    
                    return{
                        type : 'ADD_BOOKIMAGE_IN_FB',
                        payload : request
                    }
                }
                
            })
        }
    )
}
*/

function addBookStart() {
    console.log('start')
	return {
		type: 'ADD_BOOK_START',
		payload: 'start'
	};
}

function addBookSuccess(response) {
    console.log('done')
	return {
		type: 'ADD_BOOK_SUCCESS',
		payload: 'done'
	};
}

function addBookError(error) {
    console.log(error);
	return {
		type: 'ADD_BOOK_ERROR',
		payload: 'error'
	};
}

//addBook : add book action
export const addBook = (book) => 
    (dispatch ) =>{
  
    let currentImageName = "firebase-image-"+Date.now();
    let uploadImage = storage.ref(`images/${currentImageName}`).put(book.bookImage[0]);
    uploadImage.on('state_changed',
        (snapshot) => { 
            dispatch(addBookStart());
         },
        (error) => {
            dispatch(addBookError(error));
        },
        () => {
            storage.ref('images').child(currentImageName).getDownloadURL()
            .then(url => {                
               book.bookImage = url
                console.log(book);
                if(url){
                    const request = axios.post('/api/book',book)
                    .then(response => {
                        console.log(response.data);
                        if(response.data.post){
                            alert('Data uploaded Successfully.')
                            dispatch(reset('AddBook'))
                            dispatch(addBookSuccess(response))
                        }else{
                            dispatch(addBookError('error'));
                            alert('Error while uploading data.Please try again later')
                        }
                        
                       
                        return response.data 
                    })
                    .catch((err) => {
                         dispatch(addBookError(err));
                        alert('error while uploading image using firebase storage')
                    });
                   /*
                    return{
                        type : 'ADD_BOOKIMAGE_IN_FB',
                        payload : request
                    }
                    */
                }
                
            });
        }
    )
}



//clearNewBook : clear new book in add review page 
export function clearNewBook(){
    return{
        type : 'CLEAR_NEWBOOK',
        payload : {}
    }
}

//getUserPosts : get user's all post
export function getUserPosts(userId){
    const request = axios.get(`/api/user_posts?id=${userId}`)
                    .then(response => response.data)
    return{
        type : 'GET_USER_POSTS',
        payload : request
    }
}

//getBook 
export function getBook(id){
    const request = axios.get(`/api/getBook?id=${id}`)
                    .then(response => response.data)    
        return{
            type : 'GET_BOOK',
            payload : request
        }
}
/*
//updateBook_with_image
export function updateBook_with_image(data){
    const request = axios.post(`/api/book_with_img_update`,data)
                     .then(response => response.data)    
    return{
        type : 'UPDATE_BOOK_WITH_IMG',   
        payload : request
    }
}
*/

/*=================================================================*/


function EditBookStart() {
    console.log('start')
	return {
		type: 'ADD_BOOK_START',
		payload: 'start'
	};
}

function EditBookSuccess(response) {
    console.log('done')
	return {
		type: 'UPDATE_BOOK_WITH_IMG',
		payload: response
	};
}

function EditBookError(error) {
    console.log(error);
	return {
		type: 'ADD_BOOK_ERROR',
		payload: 'error'
	};
}

//addBook : add book action
export const updateBook_with_image = (book) => 
    (dispatch ) =>{
  
    let currentImageName = "firebase-image-"+Date.now();
    let uploadImage = storage.ref(`images/${currentImageName}`).put(book.bookImage[0]);
    uploadImage.on('state_changed',
        (snapshot) => { 
            dispatch(EditBookStart());
         },
        (error) => {
            dispatch(EditBookError(error));
        },
        () => {
            storage.ref('images').child(currentImageName).getDownloadURL().
            then(url => {
                
               book.bookImage = url
                console.log(book);
                if(url){

                    const request = axios.post(`/api/book_with_img_update`,book)
                     .then(response => response.data)
                     dispatch(EditBookSuccess(request))
                    /*
                    const request = axios.post('/api/book',book)
                    .then(response => {
                        console.log(response.data);
                        if(response.data.post){
                            alert('Data uploaded Successfully.')
                            dispatch(reset('AddBook'))
                            dispatch(EditBookSuccess(response))
                        }else{
                            dispatch(EditBookError('error'));
                            alert('Error while uploading data.Please try again later')
                        }                       
                        return response.data 
                    })
                    .catch((err) => {
                         dispatch(addBookError(err));
                        alert('error while uploading image using firebase storage')
                    });
                    */



                   /*
                    return{
                        type : 'ADD_BOOKIMAGE_IN_FB',
                        payload : request
                    }
                    */
                }
                
            })
        }
    )
}




/*=================================================================*/

//updateBook_without_image
export function updateBook_without_image(data){
    const request = axios.post(`/api/book_without_img_update`,data)
                     .then(response => response.data)    
    return{
        type : 'UPDATE_BOOK_WITHOUT_IMG',   
        payload : request
    }
}
//deleteBook
export function deleteBook(id,image){
   // console.log(image);
    let deleteImage = storage.refFromURL(image).delete();

    const request = axios.delete(`/api/delete_book?id=${id}`)
                    .then(response => response.data)

                    return{
                        type : 'DELETE_BOOK',   
                        payload : request
                    }

}
//clearBook
export function clearBook(){
    return {
        type : 'CLEAR_BOOK',
        payload : {
            book : null,
            updateBook : false,
            postDeleted : false
        }
    }
}



/*========== USER : actions related to user ============*/
//loginUser : for login
export function loginUser({email,password}){
    const request = axios.post("/api/login",{email,password})
                    .then(response => response.data )

    return{
        type : 'USER_LOGIN',
        payload : request
     }
}
//auth : for authentication
export function   auth(){
   const request = axios.get('/api/auth')
                    .then(response => response.data);

    return {
        type : 'USER_AUTH',
        payload : request
    }
}
//getUsers : get all users
export function getUsers(){
    const request = axios.get('/api/users')
                    .then(response => response.data)
    return {
        type : 'GET_USER',
        payload : request
    }

}
//userRegister : add new user
export function userRegister(user,userList){
    const request = axios.post('/api/register',user)
    

    return (dispatch) => {
        request.then(({data})=>{
            let users = data.success ? [...userList,data.user] : userList
            let response = {
                success : data.success,
                users 
            }

            dispatch({
                type : 'USER_REGISTER',
                payload : response
            })
        })
    }


}