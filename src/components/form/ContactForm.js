
import React,{Component} from 'react'; 
import emailjs from '@emailjs/browser';
 const SERVICE_ID= process.env.REACT_APP_SERVICE_ID;
 const TEMPLATE_ID= process.env.REACT_APP_TEMPLATE_ID;
 const USER_ID= process.env.REACT_APP_USER_ID;

 const y= "service_hld4r8l";
 const x= "template_urbj0d2";
 const a= "user_eEhOJqTE4ean3M1Z7k1V5";

class ContactForm extends Component{

    constructor(){
        super();
        this.state={ email:'',name:'',subject:'',message:'',email_err:'',name_err:'',subject_err:'',message_err:'',return_msg:'',flag : false }

         this.handleChangeEmail = this.handleChangeEmail.bind(this);
         this.handleChangeName = this.handleChangeName.bind(this);
         this.handleChangeSubject = this.handleChangeSubject.bind(this);
         this.handleChangeMessage = this.handleChangeMessage.bind(this);
         this.handleSubmit1 = this.handleSubmit1.bind(this);
    }

    handleChangeEmail(e){
        this.setState({email:  e.target.value});
        var EmailReg =  /(\w+)\s(\w+)/;
        if(e.target.value === '') 
          this.setState({email_err: 'Required Field'});
        else if(EmailReg.test(e.target.value)) 
          this.setState({email_err: ''});
        else 
          this.setState({email_err: 'Enter Valid Email'});
      }

      handleChangeName(e){
        this.setState({name:  e.target.value});
          if(e.target.value === '') 
            this.setState({name_err: 'Required Field'});
          else 
            this.setState({name_err: ''});
      }
      handleChangeSubject(e){
        this.setState({subject:  e.target.value});
          if(e.target.value === '') 
            this.setState({subject_err: 'Required Field'});
          else 
            this.setState({subject_err: ''});
      }
      handleChangeMessage(e){
        this.setState({message:  e.target.value});
          if(e.target.message === '') 
            this.setState({message_err: 'Required Field'});
          else 
            this.setState({message_err: ''});
      }

      sendEmail(e){
        e.preventDefault();

    emailjs.sendForm(y, x, "#contactForm", a)
      .then((result) => {
          console.log("yesyy", result.text);
          window.location.reload()
      }, (error) => {
          console.log("noo", error.text);
          console.log(SERVICE_ID)
          console.log(TEMPLATE_ID)
          console.log(USER_ID)
          window.location.reload()
      });
     
      }



      handleSubmit1(e)
      {
          if(this.state.name === '') 
              this.setState({name_err: 'Required Field'});
             
      
          if(this.state.subject === '')
             this.setState({subject_err: 'Required Field'});
         if(this.state.message === '')
             this.setState({message_err: 'Required Field'});

             if(this.state.name === '' || this.state.subject === '' || this.state.message === '')
             {
                this.setState({return_msg: 'Fill All First', flag: true });
             }
             else
             {
                this.setState({return_msg: 'Success.', flag: true});
                this.sendEmail(e)
               
             }
      }
    render(){

    return(
  
            <div className="contact-form">
              <div id="message">
                  {this.state.flag ? 
                        <div className="alert alert-success">
                        <strong>{this.state.return_msg}</strong>
                        </div>
                    : null}
              </div> 
              <form method="post" id="contactForm" onSubmit={this.handleSubmit1} >
                  <div className="row">
                  <div className="col-md-6 col-sm-12" style={{fontFamily: "Oswald-Medium"}}>
                      <div className="input-group" > 
                          <input  type="text" id="name"  value={this.state.name} name="from_name" onChange={this.handleChangeName} className="form-control" placeholder="Full Name:" style={{borderColor: "#AB79AA"}} /> 
                          <span id="err">{this.state.name_err}</span>
                      </div>
                      {/* <div className="input-group"> 
                          <input type="text" className="form-control" value={this.state.email}name="from_email" onChange={this.handleChangeEmail} id="email" placeholder="Email:" />
                          <span id="err">{this.state.email_err}</span>
                      </div>                             */}
                      <div className="input-group"> 
                          <input type="text" id="tel" value={this.state.subject} name="from_phone"  onChange={this.handleChangeSubject} className="form-control" placeholder="Number:" style={{borderColor: "#AB79AA"}}/>
                          <span id="err">{this.state.subject_err}</span>
                      </div> 
                  </div> 
                  <div className="form-group col-md-6 col-sm-12">
                      <div className="input-group input_group_full_width" style={{fontFamily: "Oswald-Medium"}}> 
                          <textarea name="comments" id="message"  value={this.state.message} name= "message" onChange={this.handleChangeMessage} rows="6" className="form-control" placeholder="Message" style={{borderColor: "#AB79AA"}}></textarea>
                          <span id="err">{this.state.message_err}</span>
                      </div> 
                  </div> 
                  <div className="col-sm-12">
                    <button type="button" name="send" onClick={this.handleSubmit1} className="btn btn-outline-secondary text-uppercase" >Send Message</button>
                    <div id="simple-msg"></div>
                  </div>
   
              </div> 
              </form> 
            </div> 

        )

    }
}

 
export default ContactForm;



// import React, { Component } from 'react';
// import axios
//     from 'axios';

// class ContactForm extends Component {
//     constructor( props ) {
//         super( props );

//         this.state = {
//             values: {
//                 name: '',
//                 services: '',
//                 phone: '',
//                 email: '',
//                 message: '',
//                 date: ''
//             },
//             successMessage: "Sender's message was sent successfully",
//             warningMessage: 'Fill up the form, please!',
//             errorMessage: 'Something go wrong. Try again later!',
//             alertClass: '',
//             responseMessage: '',
//             alertTimeout: '',
//             delay: 5000
//         };
//     }

//     submitForm = async e => {
//         e.preventDefault();

//         if ( document.querySelector( '#alert' ) ) {
//             document.querySelector( '#alert' ).remove();
//         }

//         this.setState( { isSubmitting: true } );

//         axios.post( 'https://store.adveits.com/API/form.php', this.state.values, {
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//                 'Content-Type': 'application/json; charset=UTF-8'
//             },
//         }, ).then( response => {
//             if ( response.data.status === 'success' ) {
//                 this.setState( { responseMessage: this.state.successMessage } );
//             }

//             if ( response.data.status === 'warning' ) {
//                 this.setState( { responseMessage: this.state.warningMessage } );
//             }

//             if ( response.data.status === 'error' ) {
//                 this.setState( { responseMessage: this.state.errorMessage } );
//             }

//             this.callAlert( this.state.responseMessage, response.data.status )
//         } ).catch( error => {
//             this.callAlert( this.state.errorMessage, 'error' )
//         } );
//     };

//     removeAlert = () => {
//         clearTimeout( this.state.alertTimeout );
//         this.setState( {
//             alertTimeout: setTimeout( function() {
//                     var element = document.querySelector( '#alert' );
//                     element.classList.remove( 'fadeIn' );
//                     element.classList.add( 'fadeOut' );
//                     setTimeout( function() {
//                         element.remove()
//                     }, 900 )
//                 }, this.state.delay
//             )
//         } );
//     };

//     callAlert = ( message, type ) => {
//         if ( ! document.querySelector( '#alert' ) ) {
//             if ( type === 'success' ) {
//                 this.setState( { alertClass: 'success' } )
//             }

//             if ( type === 'error' ) {
//                 this.setState( { alertClass: 'danger' } )
//             }

//             if ( type === 'warning' ) {
//                 this.setState( { alertClass: 'warning' } )
//             }

//             var alert = '<div id="alert" class="animated fadeIn alert alert--shadow alert-' + this.state.alertClass + '">' + message + '</div>';

//             var element = document.querySelector( '#cf-1' );

//             element.insertAdjacentHTML( 'beforeend', alert );

//             this.removeAlert();
//         }
//     };

//     handleInputChange = e =>
//         this.setState( {
//             values: {
//                 ...this.state.values,
//                 [e.target.name]: e.target.value
//             }
//         } );

//     render() {
//         return (
//             <form method="post" onSubmit={ this.submitForm } id="cf-1" className="contact-form">
//                 <div className="form-group form-group-lg">
//                     <p className="input-group gutter-width-sm no-space">
//                         <span className="gutter-width">
//                             <label className="form-label-lg before after mb-0" htmlFor="cf-1-name-surename">Name and Surename *</label>

//                             <input name="name"
//                                    value={ this.state.values.name }
//                                    onChange={ this.handleInputChange }
//                                    type="text"
//                                    id="cf-1-name-surename"
//                                    placeholder="Your name here"
//                                    required="required"/>
//                         </span>

//                         <span className="gutter-width">
//                             <label className="form-label-lg before after mb-0" htmlFor="cf-1-services">Choose a service *</label>

//                             <select name="services"
//                                     htmlFor="cf-1-services"
//                                     id="cf-1-services"
//                                     value={ this.state.values.services }
//                                     onChange={ this.handleInputChange }>
//                                 <option value="hair-treatments">Haircut</option>
//                                 <option value="face-and-body">Shave</option>
//                                 <option value="hands-feets">Haircut & Shave</option>
//                                 <option
//                                     value="haircuts-for-men">Beard Trim</option>
//                             </select>
//                         </span>
//                     </p>
//                 </div>

//                 <div className="form-group form-group-lg">
//                     <p className="input-group gutter-width-sm no-space">
//                         <span className="gutter-width">
//                             <label className="form-label-lg before after mb-0" htmlFor="cf-1-phone">Your phone number *</label>

//                             <input name="phone"
//                                    value={ this.state.values.phone }
//                                    onChange={ this.handleInputChange }
//                                    type="text"
//                                    id="cf-1-phone"
//                                    placeholder="Your phone here"
//                                    required="required"/>
//                         </span>

//                         <span className="gutter-width">
//                             <label className="form-label-lg before after mb-0" htmlFor="cf-1-date">Choose an appointment date</label>
//                             <input name="date"
//                                    value={ this.state.values.date }
//                                    onChange={ this.handleInputChange }
//                                    type="text"
//                                    id="cf-1-date"
//                                    placeholder="dd/mm/yyyy"/>
//                         </span>
//                     </p>
//                 </div>

//                 <div className="form-group form-group-lg">
//                     <label className="form-label-lg before after mb-0" htmlFor="cf-1-message">Message</label>

//                     <textarea name="message"
//                               value={ this.state.values.message }
//                               onChange={ this.handleInputChange }
//                               id="cf-1-message"
//                               placeholder="Your message here"></textarea>
//                 </div>

//                 <div className="form-group form-group-lg mb-0">
//                     <button type="submit" className="btn btn-outline-secondary text-uppercase">Book Now</button>
//                 </div>
//             </form>
//         );
//     }
// }

// export default ContactForm;



