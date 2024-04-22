import React from 'react';
import './cadastro.css';

class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sobrenome: '',
      username: '',
      password: '',
      confirmaPassword: '',
      dataNascimento: '',
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
    const { nome, sobrenome, username, password, confirmaPassword, dataNascimento } = this.state;

    // Verificar se as senhas coincidem
    if (password !== confirmaPassword) {
      this.setState({ errorMessage: 'As senhas não coincidem.' });
      return;
    }

    // Verificar se a data de nascimento é válida (apenas para fins de demonstração)
    if (!this.isValidDate(dataNascimento)) {
      this.setState({ errorMessage: 'Por favor, insira uma data de nascimento válida.' });
      return;
    }

    try {
      // Lógica para enviar os dados do formulário para o backend ou qualquer outra ação necessária

      this.setState({
        nome: '',
        sobrenome: '',
        username: '',
        password: '',
        confirmaPassword: '',
        dataNascimento: '',
        errorMessage: ''
      });

    } catch (error) {
      this.setState({ errorMessage: 'Ocorreu um erro ao processar o cadastro. Por favor, tente novamente.' });
    }
  }

  isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  isValidDate = (date) => {
    // Verificar se a data possui o formato correto (DD/MM/AAAA)
    const datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!datePattern.test(date)) return false;

    // Verificar se a data é válida
    const [day, month, year] = date.split('/');
    const parsedDate = new Date(`${year}-${month}-${day}`);
    return parsedDate instanceof Date && !isNaN(parsedDate);
  }
  
  render() {
    return (
    
        <form onSubmit={this.handleSubmit}>
        <div className='realizecadastro'>
          <h2>REALIZE O SEU CADASTRO!</h2>
        </div>
        <input 
          type="text" 
          id="nome" 
          name="nome" 
          placeholder="Nome" 
          required 
          value={this.state.nome} 
          onChange={this.handleInputChange}
          className='formsss'
          
        />
        <br />
        <input 
          type="text" 
          id="sobrenome" 
          name="sobrenome" 
          placeholder="Sobrenome" 
          required 
          value={this.state.sobrenome} 
          onChange={this.handleInputChange}
          className='formsss'
          
        />
        <br />
        <input 
          type="text" 
          id="username" 
          name="username" 
          placeholder="Email" 
          required 
          value={this.state.username} 
          onChange={this.handleInputChange}
          className='formsss'
          
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
          className='formsss' 
        />
        <br />
        <input 
          type="password" 
          id="confirmaPassword" 
          name="confirmaPassword" 
          placeholder="Confirme a Senha" 
          required
          value={this.state.confirmaPassword} 
          onChange={this.handleInputChange} 
          className='formsss'
        />
        <br />
        <input 
          type="text" 
          id="dataNascimento" 
          name="dataNascimento" 
          placeholder="Data de Nascimento (DD/MM/AAAA)" 
          required 
          value={this.state.dataNascimento} 
          onChange={this.handleInputChange}
          className='formsss'
        />
        <br/>
        {this.state.errorMessage && <div className="error-message">{this.state.errorMessage}</div>}
        <br />
        <input type="submit" value="Cadastrar" />
      </form>
    );
  }
}

export default Cadastro;
