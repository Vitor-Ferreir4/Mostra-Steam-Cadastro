import React from 'react';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
      errorMessage: ''
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    if (!this.isValidEmail(username)) {
      this.setState({ errorMessage: 'Por favor, insira um email válido.' });
      return;
    }

    try {

      this.setState({
        username: '',
        password: '',
        errorMessage: ''
      });

    } catch (error) {
      this.setState({ errorMessage: 'Credenciais inválidas. Por favor, tente novamente.' });
    }
  }

  isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  isValidPassword = (password) => {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return passwordPattern.test(password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>LOGIN</h2>
        <button type="button" className='Botao-Google'>
          <img className='Google-Imagem' src={require('../assets/Google.png')} alt=""/>  
          <div className='texto-google'>
            Continue com o Google
          </div>
        </button>
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
        {this.state.errorMessage && <div className="error-message">{this.state.errorMessage}</div>}
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
