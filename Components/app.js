class App extends React.Component {
    render() {
        return (
            <div className="titre">
                this is a simple component
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);