/**
 * edit.js : edit review page
 * 
 */
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

/*------- connect react with redux --------*/
import { connect } from 'react-redux';

/*------- action which all data to data base --------*/
import { getBook , updateBook_with_image , updateBook_without_image , clearBook , deleteBook } from '../../actions';

/*------- redux form --------*/
import { Field, reduxForm } from 'redux-form';


class EditBook extends PureComponent {

    state = {
        formData : {
            bookImage : '',
            isBookSelected : false
        },
        isFormChanged : null
    }

    

    deletePost = () => {
        let book = this.props.book;
       
        const length = Object.entries(book).length;
        let image = ''
        if( length === 0 || book.book === null){
          return
        }else{
           // console.log(book.book.bookImage);
            image = book.book.bookImage;
        }
        this.props.dispatch(deleteBook(this.props.match.params.id,image))
        window.scrollTo(0, 0);
    }

    redirectUser = () => {
        setTimeout (()=>{
            this.props.history.push('/user/user-reviews')
        },1000)
    }

    componentWillMount(){
        //console.log(this.state.isFormChanged)
        this.props.dispatch(getBook(this.props.match.params.id))
    }

    componentWillUnmount(){
        this.props.dispatch(clearBook())
    }

    
    componentWillReciveProps(nextProps) {

        console.log(this.props);
        console.log(nextProps);

        /*
        let book = this.props.book;
        console.log(book);
        const length = Object.entries(book).length;
        let image = ''
        if( length == 0 || book.book == null){
          console.log('err');
        }else{
            console.log(book.book.bookImage);
            if(this.state.isBookSelected)
            image = book.book.bookImage;
            this.setState({
                formData : {
                    bookImage : image
                }
            })
        }
        */
    }
    
    
  
   

    //PRISTINE / DIRTY // TOUCHED / ERROR : events in redux-form 

/*------- renderInputField  --------*/
    renderInputField(field){
  
    //    console.log(field)
        const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error':''}`;
        return (
            <div className={className}>
                <label>{field.myLabel}</label>
                <input type="text" {...field.input}   onChange = {field.input.onChange}  />
                <div className="error">
                    {field.meta.touched? field.meta.error:''}
                </div>
            </div>
        )
    }


/*------- renderFileInputField  --------*/
handleFileChange = (event) => {
     if(event.target.files.length === 1){ 
        this.setState({
           formData : {
                bookImage : event.target.files[0].name,
                isBookSelected : true
            } 
        })
     } 
}

renderFileInputField(field){
    const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error':''}`;
    return (
        <div className={className}>
            <label>{field.myLabel}</label>
            <input 
            type="file"   
            onChange = {field.input.onChange} 
           
            />
            <div className="error">
                {field.meta.touched ? field.meta.error:''}
            </div>
        </div>
    )
}
/*------- renderTextareaField  --------*/
    renderTextareaField(field){
        const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error':''}`;
        return(
            <div className={className}>
                <label>{field.myLabel}</label>
                <textarea 
                    {...field.input}
                ></textarea>
                 <div className="error">
                    {field.meta.touched ? field.meta.error:''}
                </div>
            </div>
        )
    }

    /*------- renderTextareaField  --------*/
    renderNumberInputField(field){
        const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error':''}`;
        return(
            <div className={className}>
                <label>{field.myLabel}</label>
                <input 
                type="number" 
                {...field.input}   
                onChange = {field.input.onChange} 
                />
                 <div className="error">
                    {field.meta.touched ? field.meta.error:''}
                </div>
            </div>
        )
    }
    

    /*------- renderSelectField  --------*/

    handleSelectChange = (event) => {
        console.log(event.target.value)
    }

    renderSelectField(field){
        const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error':''}`;
        return(
            <div className={className}>
                <label>{field.myLabel}</label>

                
               <select  {...field.input}   onChange = {field.input.onChange}  >
                    {field.children}
               </select>

                 <div className="error">
                    {field.meta.touched ? field.meta.error:''}
                </div>
            </div>
        )
    }

    submitForm = (values) => {

        if(this.props.initialValues != null && values != null){
           if( JSON.stringify(this.props.initialValues) === JSON.stringify(values) ){
            this.setState({
                isFormChanged : false
             }) 
             window.scrollTo(0, 0);
             return           
             //console.log('f')
           }else{
             this.setState({
                isFormChanged : true
             })
             window.scrollTo(0, 0);
             //console.log('t')
           }
        }
        

       // console.log(values.bookImage)

    
        if(this.state.formData.isBookSelected && typeof values.bookImage !== 'string' && values.bookImage !== null ){
            this.props.dispatch(updateBook_with_image(values))  
        }else{
          //  console.log(values)
            this.props.dispatch(updateBook_without_image(values))              
        } 
      
    }

    render() {

        let book = this.props.book;
       
        const length = Object.entries(book).length;
       // console.log(this.state.formData);
       // console.log(this.state.isFormChanged)
        return (
                    <div className="Form">
                        <div className="top">
                            <h3>Edit Review</h3>
                            <Link to="/">Back</Link>
                        </div>

                        {
                            book.updateBook ? 
                                <div className="edit_confirm">
                                    post updated, 
                                    <Link to={`/books/${book.book._id}`}>
                                        click here to see post 
                                    </Link>
                                </div>
                            : null
                        }
                        {
                            book.postDeleted ? 
                            <div className="red_tag">Post Deleted
                                {this.redirectUser()}
                            </div>
                            :null
                        }
                         {
                            !this.state.isFormChanged && this.state.isFormChanged !== null? 
                            <div className="edit_confirm">
                            Please Make Some Changes.
                            </div>
                            :
                            null
                        }
              
                        <form onSubmit={this.props.handleSubmit((event)=>this.submitForm(event))} method="POST" encType="multipart/form-data">

                            <Field
                                myLabel="Enter Name"
                                name="name"
                                component={this.renderInputField}
                            />

                            <Field
                                myLabel="Enter Author"
                                name="author"
                                component={this.renderInputField}
                            />

                            <Field
                                myLabel="Enter Review"
                                name="review"
                                component={this.renderTextareaField}
                            />

                            <Field
                                myLabel="Enter Pages"
                                name="pages"
                                component={this.renderNumberInputField}
                            />

                            <Field
                                myLabel="Enter Price"
                                name="price"
                                component={this.renderNumberInputField}
                            />

                            <Field
                                myLabel="Select Rating"                    
                                name="rating"
                                component={this.renderSelectField}>
                                <option></option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </Field>
                            <Field 
                            myLabel="Select Book Image"                                        
                            name="bookImage"
                            value={this.state.formData.bookImage}                      
                            type="file"
                            onChange={this.handleFileChange}
                            component={this.renderFileInputField}
                            />
                            {
                                length === 0 || book.book === null ? null :
                                <div className="br_image">
                                    <img src={`${book.book.bookImage}`} alt='product'/>
                                </div>
                            }
                          
                          <div className="delete_post">
                                <button type="submit">Edit  Review</button>
                        </div>
                            
                            <div className="delete_post">
                                        <div className="button"
                                            onClick={() => this.deletePost()}
                                        >
                                            Delete Review
                                        </div>
                            </div>

                        </form>
                    </div>
              )
    }
}


/*------- validate() : validates our form  --------*/


function validate(values){
    // console.log(values)
     const errors = {};
 
     if(!values.name){
         errors.name = "The name is empty"
     }
 
     if(!values.author){
         errors.author = "The author is empty"
     }
 
     if(!values.review){
         errors.review = "The review is empty"
     }
 
     if(!values.pages){
         errors.pages = "The pages is empty"
     }
 
     if(!values.price){
         errors.price = "The price is empty"
     }
 
     if(!values.rating){
         errors.rating = "The rating is empty"
     }
 /*
     if(values.bookImage){
 
         if(values.bookImage.length != 0){
             if(values.bookImage[0].size > 200000){
                 errors.bookImage = "The bookImage size must be less then 200kb"
             }
         }
     }
 */
     
 
     if(!values.bookImage || values.bookImage.length === 0 || values.bookImage === null){
         errors.bookImage = "The bookImage is empty"
     }
 
     return errors;
 }


  /*
    componentWillReceiveProps(nextProps){
        const length = Object.entries(nextProps.book).length;
        
        if(length != 0){
            const book = nextProps.book.book;
            console.log(book)
            this.setState({
                formData : {
                    bookImage : book.bookImage,
                    isBookSelected : false
                }
            })
        }
       
    }
    */
     /*------- it returns messages when action is called and state going to change  --------*/
 
 function mapStateToProps(state){
   

    const books = state.books
    let book_value = {}
    const length = Object.entries(books).length;
    if( length !== 0 && typeof(books.book) === "object" && books.book !== null ){
        const book = state.books.book
        book_value =  {
            _id : book._id,
            name : book.name,
            author : book.author,
            review : book.review,
            pages : book.pages,
            rating : book.rating,
            price : book.price,
            bookImage : book.bookImage
        }
    }
    
     return {
         book: state.books,
         initialValues : book_value,
     }
 }
 
     /*------- reduxForm : connects redux-form with react form   --------*/
 /*

 export default reduxForm({
     validate,
     form:'EditReview',
 })(
     connect(mapStateToProps,{ getBook , updateBook , clearBook , deleteBook  })(EditBook)
 )
*/

 export default connect( mapStateToProps, { getBook , updateBook_with_image , updateBook_without_image  , clearBook , deleteBook  })(
    reduxForm({
        validate,
        form: 'EditReview',
        enableReinitialize : true,
    })(EditBook)
 );