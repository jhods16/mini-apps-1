
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			formnum: 0,
			id: '',
			name: '',
			email: '',
			password: '',
			line1: '',
			line2: '',
			city: '',
			state: '',
			zip: '',
			phone: '',
			cc: '',
			expdate: '',
			cvv: '',
			billzip: ''
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
		var formnum = this.state.formnum;
		this.setState({formnum: formnum+1})
		this.post(null, 'create', (id, err) => {
			this.setState({id: id});
		})
		console.log(this.state.formnum)
	}

	handleNext(event) {
		var formnum = this.state.formnum
		this.setState({formnum: formnum+1})
		var jsonState = JSON.stringify(this.state);
	  this.post(jsonState, 'update', (err, res) => {
			console.log(res);
		})
	}

	post(data, route, successcb) {
		console.log('post called')
		 $.ajax({
    		url: `http://localhost:3000/${route}`,
    		method: 'POST',
    		data: data,
    		contentType: 'application/json',
    		success: successcb,
    		errorcb: (err) => {return console.error(err)}

    	});
	}

	returnHome() {
		this.setState({formnum: 0})
	}

	handleChange(id, event) {
		var target = event.target
		var name = target.name
		var currName = this.state[name]
		this.setState({[name]: currName += event.target.value})
	}

	render() {
		var page;
		var formnum = this.state.formnum;

		if (formnum === 0) {
			page = <button onClick={this.handleCheckout}>Checkout</button>
		}

		if (formnum === 1) {
			page = <Login name={this.state.name} handleSubmit={this.handleSubmit} email={this.state.email} password={this.state.password} handleNext={this.handleNext} handleChange={this.handleChange}/>
		}

		if (formnum === 2) {
			page = <Address handleNext={this.handleNext} handleChange={this.handleChange}/>
		}

		if (formnum === 3) {
			page = <Payment handleNext={this.handleNext}/>
		}

		if (formnum === 4) {
			page = <Confirmation returnHome={this.returnHome} login={this.state.name} email={this.state.email} address={this.state.line1}/>
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

