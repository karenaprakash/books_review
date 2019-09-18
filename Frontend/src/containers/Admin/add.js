import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/*-------- firebase -------------*/
import {storage , API_URL } from '../../firebase-config.js';

/*------- connect react with redux --------*/
import { connect } from 'react-redux';

/*------- action which all data to data base --------*/
import { addBook , clearNewBook } from '../../actions'
/*------- redux form --------*/
import { Field, reduxForm ,change } from 'redux-form';

class AddBook extends Component {

    state = {
        bookImage : null,
        bookName : '',
        imageUrl : '',
        isSubmited : false,
        bookData : null,
        loader : false
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
    console.log(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
        this.setState({
          imageUrl : URL.createObjectURL(event.target.files[0])
        });
      }

  //  console.log(this.state.bookImage)
     if(event.target.file){
        this.setState({
            bookImage : event.target.files[0],
            bookName : event.target.files[0].name
        })
     } 
     
}



renderFileInputField = (field) => {
    const fileInputKey = field.input.value ? field.input.value.name : +new Date();  // key = {fileInputKey}
    const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error':''}`;
    console.log(field.input.value);


    return (
        <div className={className}>
            <label>{field.myLabel}</label>
            <input 
            key={fileInputKey}
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







  
/*------- onSubmit() : runs on submit  --------*/
    onSubmit(values){       
          values.ownerId = this.props.user.login.id;
         // console.log(values)
          this.props.dispatch(addBook(values));
      
         this.setState({
             isSubmited : true
         })
    }

    componentWillUnmount() {
        this.props.dispatch(clearNewBook())
    }

    componentWillMount(){
        this.props.dispatch(clearNewBook())
    }
    
  
    render(){

       // console.log(this.props);

        return(
            <div className="Form">
                <div className="top">
                    <h3>Add a Review</h3>
                    <Link to="/">Back</Link>
                </div>
                  
                <form onSubmit={this.props.handleSubmit((event)=>this.onSubmit(event))} method="POST" encType="multipart/form-data">

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
                    type="file"
                    onChange={this.handleFileChange}
                    component={this.renderFileInputField}
                    />
                    {
                    this.state.imageUrl !== '' && this.props.data.bookImage !== null ?
                    <div className="br_image">
                        <img src={this.state.imageUrl} alt='product'/>
                    </div> 
                    : null
                    
                    }
                    {
                        this.props.data.bookImage !== null && this.props.data.bookImage === 'start' ?
                        <div className="loader"> Loading... </div>
                        : null
                    }
                
                    <button type="submit">Submit</button>

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
    

    if(!values.bookImage || values.bookImage.length == 0 ){
        errors.bookImage = "The bookImage is empty"
    }

    

    return errors;
}
    /*------- it returns messages when action is called and state going to change  --------*/
   
function mapStateToProps(state){
    console.log(state.books)
    const book = state.books.book
    let book_value = {}
    book_value =  {
        name : '',
        author : '',
        review : '',
        pages : '',
        rating : '',
        price : '',
        bookImage : ''
    }

    return {
        data: state.books,
        initialValues : book_value,
    }
}

    /*------- reduxForm : connects redux-form with react form   --------*/

 export default connect( mapStateToProps, {addBook,clearNewBook})(
    reduxForm({
        validate,
        form: 'AddBook',
        enableReinitialize : true,
    })(AddBook)
 );