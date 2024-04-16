import React from 'react';
import './login.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>LOGIN</h2>
        <button type="button" className='Botao-Google'>Continue com Google</button>
        <input 
          type="text" 
          id="username" 
          name="username" 
          placeholder="Email" 
          required 
          value={this.state.username} 
          onChange={this.handleInputChange} 
        />
        <br />
        <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="Senha" 
          required
          value={this.state.password} 
          onChange={this.handleInputChange} 
        />
        <br />
        <br />
        <a href=''>
            <div className="esqueceu-senha">
                <p>Esqueceu sua senha?</p>
            </div>
        </a>    
        <br />
        <br />
        <input type="submit" value="Entrar" />
      </form>
    );
  }
}

export default Login;