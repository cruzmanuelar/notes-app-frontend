import React from 'react'
import { Modal, Form, Input } from 'antd'
import { 
    DeleteOutlined,
} from '@ant-design/icons';
import '../../styles/Components/Main/ModalEditCard.css'


const ModalEditCard = (props) => {

    const showModalEdit = props.showModalEdit
    const setShowModalEdit = props.setShowModalEdit

    const notes = [
        {
            title: 'Tarea 1',
            description: 'Description one',
            date: '2023-12-14',
            important : true,
            complete: true

        },
        {
            title: 'Tarea 1',
            description: 'Description one',
            date: '2023-12-14',
            important : true,
            complete: true
        },
        {
            title: 'Tarea 1',
            description: 'Description one',
            date: '2023-12-14',
            important : true,
            complete: true
        },

    ]

    return (
        <Modal
            title="Editar tarjeta" 
            open={showModalEdit}
            onCancel={()=> setShowModalEdit(false)}
            cancelText='Cancelar'
            okText='Guardar'
        >
            <div>
                <Form
                    layout='vertical'
                >
                    <Form.Item
                        label='Nombre:'
                    >
                        <Input/>
                    </Form.Item>
                </Form>
                <div>
                    <span>Notas:</span>
                    {
                        notes.map(not => (
                            <div 
                                className='Row-Task-Edit-Card'
                            >
                                <div>
                                    <span><b>{not.title}: </b></span>
                                    <span>{not.description}</span>
                                </div>
                                <DeleteOutlined 
                                    style={{color:'red', fontSize:'18px', marginRight:'5px', cursor:'pointer'}}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </Modal>
    )
}

export default ModalEditCard