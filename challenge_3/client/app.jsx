
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
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
		this.handleNext = this.handleNext.bind(this)
	}

	handleCheckout(event) {
		alert('you clicked checkout');
		this.setState({login:{name: 'Jess'}})
	}

	handleNext(event) {

	}

	render() {
		return (
			<div>
				<h2>{this.state.login.name}</h2>
				<button onClick={this.handleCheckout}>Checkout</button>
			</div>
		)
	}
	
}


var login = function(props) {
	<div>Log In
		<form>
			<input type="text" name="name"/>
			<input type="text" name="email"/>
			<input type="text" name="password"/>
		</form>
	</div>
}


ReactDOM.render(<App />, document.getElementById('app'))

