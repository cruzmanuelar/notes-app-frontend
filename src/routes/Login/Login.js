import React from 'react'
import { Typography, Button, Form, Input } from 'antd';
import '../../styles/routes/Login/Login.css'

const Login = () => {

    const { Title } = Typography

    return (
        <div className='Container-Login'>
            <div className='Navbar-Menu-Login'>
                <Title level={4}>Notes App</Title>

                <Button>Registro</Button>
            </div>


            <div className='Container-Main-Login'>
                <div>
                    <Title level={4}>Notes App</Title>
                    <div>
                        <Form
                            layout='vertical'
                        >
                            <Form.Item
                                label='Correo:'
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label='Contrasena'
                            >
                                <Input.Password/>
                            </Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Ingresar
                            </Button>

                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login