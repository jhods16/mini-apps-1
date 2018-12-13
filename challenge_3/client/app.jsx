
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			formnum: 0,
			login: {
				name: 'Jess',
				email: 'email.com',
				password: '123'
			},
			address: {
				line1: '123 Maple St.',
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
	}

	handleCheckout(event) {
		this.setState({formnum: 1})
	}

	handleNext(event) {
		var formnum = this.state.formnum
		this.setState({formnum: formnum+1})
	}

	returnHome(event) {
		this.setState({formnum: 0})
	}

	render() {
		var page;
		var formnum = this.state.formnum;

		if (formnum === 0) {
			page = <button onClick={this.handleCheckout}>Checkout</button>
		}

		if (formnum === 1) {
			page = <Login handleNext={this.handleNext}/>
		}

		if (formnum === 2) {
			page = <Address handleNext={this.handleNext}/>
		}

		if (formnum === 3) {
			page = <Payment handleNext={this.handleNext}/>
		}

		if (formnum === 4) {
			page = <Confirmation returnHome={this.returnHome} login={this.state.login.name} address={this.state.address.line1}/>
		}

		return (
			<div formum = {this.state.formnum}>
				{page}
			</div>
		)
	}
	
}

var Login = function(props) {
 return (
	<div>Log In
		<form>
			<input type="text" name="name"/>
			<input type="text" name="email"/>
			<input type="text" name="password"/>
		</form>
		<button onClick={props.handleNext}>Next</button>
	</div>
	)
}

var Address = function(props) {
	return (
		<div>Address
			<form>
				<input type="text" name="line1"/>
				<input type="text" name="line2"/>
				<input type="text" name="city"/>
				<input type="text" name="state"/>
				<input type="text" name="zip"/>	
				<input type="text" name="phone"/>			
			</form>
			<button onClick={props.handleNext}>Next</button>
		</div>
	)
}

var Payment = function(props) {
	return (
		<div>Payment
			<form>
				<input type="text" name="cc"/>
				<input type="text" name="expdate"/>
				<input type="text" name="cvv"/>
				<input type="text" name="billzip"/>		
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
			<button onClick={props.returnHome}>Purchase</button>
		</div>
	)
}


ReactDOM.render(<App />, document.getElementById('app'))

