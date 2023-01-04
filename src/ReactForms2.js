import React from 'react'

class AdvForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isPassed : false,
            marks : 0,
            errorMsg : '',
            user : 'Ram'
        };
        this.ChangeForm = this.ChangeForm.bind(this);
        this.FormSubmit = this.FormSubmit.bind(this);
    }

    ChangeForm(e){
        const value = e.target.name === "isPassed" ? e.target.checked : e.target.value;
        const inputChanged = e.target.name;

        if(inputChanged === 'marks'){
            if(!Number(value)){
               // alert("Not A Number cant be inserted..!!!! ");
                this.state.errorMsg = 'Not A Number cant be inserted..!!!!';
                this.setState({
                    [inputChanged] : ''
                })
            }
            else{
                this.setState({
                    [inputChanged] : value
                })
            }
        }

    }

    FormSubmit(e){
        alert("Form Submitted : " + this.state.isPassed + "  " + this.state.marks)
        e.preventDefault();
    }


    render(){
        var Welcome;
        if(this.state.user){
            Welcome = 'Hey ..!! ' + this.state.user;
        }
        else{
            Welcome = 'Please Login user';
        }

        return(
            <div>
                <h1>Login Form 2</h1>
                <h3>{Welcome}</h3>
                <h2>{this.state.errorMsg}</h2>
                <form onSubmit={this.FormSubmit}>
                    <input  name="isPassed" type="checkbox" onChange={this.ChangeForm} checked ={this.state.isPassed}></input>
                    <input name="marks" onChange={this.ChangeForm} value={this.state.marks}></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }

}

export default AdvForm;