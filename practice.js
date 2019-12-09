
class Practice extends React.Component{
    render(){
        return <h1>Welcome, {this.props.name}!</h1>
    }
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
// Let’s recap what happens in this example:

//     We call ReactDOM.render() with the <Welcome name="Sara" /> element.
//     React calls the Welcome component with {name: 'Sara'} as the props.
//     Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
//     React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.

