
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			formnum: 0,
			login: {
				name: '',
				email: '',
				password: ''
			},
			address: {
				line1: '',
				line2: '',
				city: '',
				state: '',
				zip: '',
				phone: ''
			},
			payment: {
				cc: '',
				expdate: '',
				cvv: '',
				billzip: ''
			}
		};
		this.handleCheckout = this.handleCheckout.bind(this);
		this.handleNext = this.handleNext.bind(this);
		this.returnHome = this.returnHome.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
    console.log("submit!")
    console.log(event.target)

	}

	handleCheckout(event) {
		this.setState({formnum: 1})
	}

	handleNext(event) {
		var formnum = this.state.formnum
		this.setState({formnum: formnum+1})
		console.log(this.state.login.name)
		console.log(this.state.login.email)
	}

	returnHome() {
		this.setState({formnum: 0})
	}

	handleChange(id, event) {
		console.log(this.state.login.name)
		var target = event.target
		var name = target.name

		this.setState({[id]: {[name]: event.target.value}})
	}

	render() {
		var page;
		var formnum = this.state.formnum;

		if (formnum === 0) {
			page = <button onClick={this.handleCheckout}>Checkout</button>
		}

		if (formnum === 1) {
			page = <Login name={this.state.login.name} handleSubmit={this.handleSubmit} email={this.state.login.email} password={this.state.login.password} handleNext={this.handleNext} handleChange={this.handleChange}/>
		}

		if (formnum === 2) {
			page = <Address handleNext={this.handleNext} handleChange={this.handleChange}/>
		}

		if (formnum === 3) {
			page = <Payment handleNext={this.handleNext}/>
		}

		if (formnum === 4) {
			page = <Confirmation returnHome={this.returnHome} login={this.state.login.name} email={this.state.login.email} address={this.state.address.line1}/>
		}

		return (
			<div formum = {this.state.formnum}>
				{page}
			</div>
		)
	}
	
}

var Login = function(props) {
	var id = "login"
 return (
	<div>Log In
		<form onSubmit={props.handleSubmit}>
			<input type="text" name="name" value={props.name} onChange={props.handleChange.bind(this, id)}/><br></br>
			<input type="text" name="email" value={props.email} onChange={props.handleChange.bind(this, id)}/><br></br>
			<input type="text" name="password" value={props.password} onChange={props.handleChange.bind(this, id)}/><br></br>
		</form>
		<button onClick={props.handleNext}>Next</button>
	</div>
	)
}

var Address = function(props) {
	var id = "address"
	return (
		<div>Address
			<form>
				<input type="text" name="line1" onChange={props.handleChange.bind(this, id)}/><br></br>
				<input type="text" name="line2"/><br></br>
				<input type="text" name="city"/><br></br>
				<input type="text" name="state"/><br></br>
				<input type="text" name="zip"/><br></br>
				<input type="text" name="phone"/><br></br>		
			</form>
			<button onClick={props.handleNext}>Next</button>
		</div>
	)
}

var Payment = function(props) {
	return (
		<div>Payment
			<form>
				<input type="text" name="cc"/><br></br>
				<input type="text" name="expdate"/><br></br>
				<input type="text" name="cvv"/><br></br>
				<input type="text" name="billzip"/><br></br>	
			</form>
			<button onClick={props.handleNext}>Next</button>
		</div>
	)
}

var Confirmation = function(props) {
	return (
		<div>Confirmation
			<div>Name: {props.login}</div>
			<div>Address: {props.address}</div>
			<div>Email: {props.email}</div>
			<button onClick={props.returnHome}>Purchase</button>
		</div>
	)
}


ReactDOM.render(<App />, document.getElementById('app'))

