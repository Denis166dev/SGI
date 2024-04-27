import React, {  } from 'react';
import { Button, Layout, theme } from 'antd';
import { Link } from 'react-router-dom';
import '../css/Botao.css';

import listIcon from '../imagens/lista.png'
import smsIcon from '../imagens/sms.png'
import aeIcon from '../imagens/ae.png'
import marcarIcon from '../imagens/marca.png'


const { Content } = Layout;

const TelaVisitantes = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <div className="demo-logo-vertical" />
      <Layout>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            backgroundColor: '#f0f8ff',
            borderRadius: borderRadiusLG,
            height: '100%',
          }}
        >
          <h1 className='texto-titulo'>O que deseja realizar?</h1>
          <div className="container">
            <div className="buttons-group">
              <Button type="primary" >
              <Link to="/informa">
                <span className="texto-botao">Informações dos <br/> visitantes</span>
                <br/>
                <br/>
                <img src={listIcon} alt="Lista de Visitantes" />
              </Link>
              </Button>
              <Button type="primary">
              <Link to="/informa"> {/*Tive que colocar pois estava ficando desproporcional com o outro botão*/}
                <span className="texto-botao">Mensagem <br/> Automática</span>
                <br/>
                <br/>
                <img src={smsIcon} alt="Mensagens"/>
                </Link>
              </Button>
              <div className="buttons-group">
                <Button type="primary">
                  <span className="texto-botao">Inserir <br/> Visitantes</span>
                  <br/>
                  <br/>
                  <img src={aeIcon} alt="Acompanhamento Especial"/>
                </Button>
                <Button type="primary">
                  <span className="texto-botao">Marcação de <br/> Visitantes</span>
                  <br/>
                  <br/>
                  <img src={marcarIcon} alt="Marcação de Visitantes"/>
                </Button>
              </div>  
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default TelaVisitantes;
