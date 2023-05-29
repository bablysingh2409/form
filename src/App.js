import './styles.css';

export default function App() {
  let form = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    margin: 'auto',
    width: '250px',
    height: '225px',
    padding: '2rem',
  };

  let formInput = {
    width: '100%',
    paddingBlock: '0.5rem',
    border: '1px solid black',
    borderRadius: '5px',
  };

  let submitBtn = {
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    paddingBlock: '0.5rem',
    fontSize: '1.035rem',
  };
  return (
    <div className="App">
      <form style={form}>
        <h1>Register Form</h1>
        <input type="text" placeholder="Name" style={formInput} />
        <input type="email" placeholder="Email" style={formInput} />
        <input type="password" placeholder="Password" style={formInput} />
        <button style={submitBtn}>Submit</button>
      </form>
    </div>
  );
}
