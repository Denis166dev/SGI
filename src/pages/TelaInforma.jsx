import React from 'react';
import { Layout, Menu, Table, Button, Dropdown, Space, Image, Modal } from 'antd';
import editIcon from '../imagens/edit.png';
import removeIcon from '../imagens/remove.png';

const { Content } = Layout;

const VisitorLayout = () => {
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const [visibleEditModal, setVisibleEditModal] = React.useState(false);
  const [visibleRemoveModal, setVisibleRemoveModal] = React.useState(false);

  const visitorData = [
    {
      key: '1',
      name: 'Lucas',
      type: 'Novo convertido',
      location: 'Congregação X',
      church: 'Igreja Y',
      maritalStatus: 'Casado',
      gender: 'Masculino',
    },
    {
      key: '2',
      name: 'João Lucas',
      type: 'Novo convertido',
      location: 'Congregação X',
      church: 'Igreja Y',
      maritalStatus: 'Casado',
      gender: 'Masculino',
    },
  ];

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Tipo',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Local',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Igreja',
      dataIndex: 'church',
      key: 'church',
    },
    {
      title: 'Estado civil',
      dataIndex: 'maritalStatus',
      key: 'maritalStatus',
    },
    {
      title: 'Sexo',
      dataIndex: 'gender',
      key: 'gender',
    },
  ];

  const handleMenuClick = (e, record) => {
    if (e.key === 'editar') {
      console.log('Editar', record);
      setVisibleEditModal(true);
    } else if (e.key === 'remover') {
      console.log('Remover', record);
      setVisibleRemoveModal(true);
    }
  };

  const handleOkEditModal = () => {
    setVisibleEditModal(false);
  };

  const handleCancelEditModal = () => {
    setVisibleEditModal(false);
  };

  const handleOkRemoveModal = () => {
    setVisibleRemoveModal(false);
  };

  const handleCancelRemoveModal = () => {
    setVisibleRemoveModal(false);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys) => {
      setSelectedRowKeys(selectedKeys);
    },
  };

  const menu = (
    <Menu onClick={(e) => handleMenuClick(e, selectedRowKeys)}>
      <Menu.Item key="editar">
        <Space>
          <Image src={editIcon} preview={false} />
          Editar
        </Space>
      </Menu.Item>
      <Menu.Item key="remover">
        <Space>
          <Image src={removeIcon} preview={false} />
          Remover
        </Space>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content 
      style={{
        padding: '24px', 
        backgroundColor: '#B2D6EA', 
        display: 'flex', 
        flexDirection: 'column' 
        }}
        >
        <div 
        style={{
          display: 'flex', 
          justifyContent: 'flex-end', 
          marginBottom: '1%', 
          marginTop: '5%' 
          }}
          >
          <Button style={{ marginRight: 10}}>Filtrar</Button>
          <Dropdown overlay={menu}>
            <Button type="primary">Selecionar</Button>
          </Dropdown>
        </div>
        <Table dataSource={visitorData} columns={columns} bordered pagination={false} rowSelection={rowSelection} />
      </Content>
      <Modal
        title="Editar Visitante"
        visible={visibleEditModal}
        onOk={handleOkEditModal}
        onCancel={handleCancelEditModal}
      >
        <p>Edite o visitante...</p>
      </Modal>
      <Modal
        title="Remover Visitante"
        visible={visibleRemoveModal}
        onOk={handleOkRemoveModal}
        onCancel={handleCancelRemoveModal}
      >
        <p>Tem certeza de que deseja remover este visitante?</p>
      </Modal>
    </Layout>
  );
};

export default VisitorLayout;