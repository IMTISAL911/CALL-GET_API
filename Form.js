// import React from "react";


// class Form extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             email: "",
//             password: "",
//             emailError: "",
//             paswrdError: ""


//         }
//     }
//     Valid() {
//         if (!this.state.email.includes("@") && this.state.password.length < 5) {
//             this.setState(
//                 { emailError: "invalid email", paswrdError: "pawrod should be at least more than 5" }
//             )
//         }

//        else if (!this.state.email.includes("@") ) {
//             this.setState(
//                 { emailError: "invalid email", }
//             )
//         }


//        else if ( this.state.password.length < 5) {
//             this.setState(
//                 { paswrdError: "pawrod should be at least more than 5" }
//             )
//         }
//         else{
//             return true
//         }
//     }

//     Submitform() {

//         this.setState(
//             { emailError: "", paswrdError: "" }
//         )

//         if( this.Valid() ){

//             alert("form submit")

//         }


       
//     }

//     render() {
//         return (
//             <>

//                 <input
//                     type="text"
//                     name="User"
//                     onChange={(e) => { this.setState({ email: e.target.value }) }}
//                 />

//                 <p style={{ color: "red", fontSize: "14px" }} >{this.state.emailError}</p>
//                 <br /><br />

//                 <input
//                     type="password"
//                     name="password"
//                     onChange={(e) => { this.setState({ papassword: e.target.value }) }}
//                 />

//                 <p style={{ color: "red", fontSize: "14px" }}>{this.state.paswrdError}</p>
//                 <br /><br />

//                 <button onClick={() => this.Submitform()}>SUBMIT</button>




//             </>
//         )
//     }
// }
// export default Form