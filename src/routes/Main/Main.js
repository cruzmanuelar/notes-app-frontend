import React, { useState } from 'react'
import { Row, Col, Card, Button, Popconfirm } from 'antd'
import { 
    EditOutlined, 
    DeleteOutlined,
    PlusOutlined,
    FileTextOutlined,
    ArrowLeftOutlined
} from '@ant-design/icons';
import '../../styles/routes/Main/Main.css'
import ModalEditCard from '../../components/Main/ModalEditCard';

const Main = () => {

    const [ showTask, setShowTask ] = useState(false)
    const [ showModalEditCard, setShowModalEditCard ] = useState(false)

    const cards = [
        {
            id: 1,
            title: 'School',
            color: true,
            description : 'Lorem lorem lorem lorem lorem',
            numberTask : 2,
            notes : [
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
        },
        {
            id: 2,
            title: 'Work',
            color: true,
            description : 'Lorem lorem lorem lorem lorem',
            numberTask : 6,
            notes : [
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
        },
        {
            id: 3,
            title: 'Market',
            color: true,
            description : 'Lorem lorem lorem lorem loremLorem lorem lorem lorem lorem',
            numberTask : 3,
            notes : [
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
        },
        {
            id: 4,
            title: 'Others',
            color: true,
            description : 'Lorem lorem lorem lorem lorem',
            numberTask : 9,
            notes : [
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
        }
    ]

    const [open, setOpen] = useState(null);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const showPopconfirm = (id) => {
      setOpen(id);
    };
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(null);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(null);
    };

    return (
        <div className='Container-Main'>
            <Row gutter={[16, 16]}>
                
                {
                    showTask
                    ? <Button onClick={()=> setShowTask(false)}><ArrowLeftOutlined />Volver</Button>
                    : cards.map(card => (
                        <Col span={6}>
                            <Card
                                title={card.title}
                                bordered={false}
                                hoverable={true}
                                extra={
                                    <Button
                                        type="primary"
                                        onClick={()=> setShowTask(true)}
                                    >
                                        Ver
                                    </Button>
                                }
                                actions={[
                                    <div>
                                        <FileTextOutlined style={{marginRight:'8px', fontSize:'20px', color:'blue'}}/>
                                        <span style={{color:'blue'}}>{card.numberTask}</span>
                                    </div>,
                                    <EditOutlined 
                                        style={{fontSize:'20px', color:'black'}} key="edit" title='Editar' 
                                        onClick={()=> setShowModalEditCard(true)}
                                    />,
                                    <Popconfirm
                                        title="Eliminar"
                                        description="Confirmar acción? Se eliminará todo el contenido de la tarjeta"
                                        open={open == card.id ? true : false}
                                        onConfirm={handleOk}
                                        cancelText='Cancelar'
                                        okText='Eliminar'
                                        okButtonProps={{
                                            loading: confirmLoading,
                                        }}
                                        onCancel={handleCancel}
                                        >
                                        <DeleteOutlined 
                                            title='Eliminar' 
                                            style={{color:'red', fontSize:'20px'}}
                                            onClick={()=> showPopconfirm(card.id)}
                                            key='delete'
                                        />
                                    </Popconfirm>
                                  ]}
                            >
                                <div style={{height:'80px'}}>{card.description}</div>
                            </Card>
                        </Col>
                    ))
                }
                {
                    showTask
                    ? ''
                    : <Col span={6}>
                        <Card
                            title='Crear'
                            bordered={false}
                            hoverable={true}
                        >
                            <div
                                style={{height:'80px', display:'flex', justifyContent:'center', alignItems:'center'}}
                            >
                                <PlusOutlined 
                                    style={{fontSize:'20px', color:'gray'}}
                                />
                            </div>
                        </Card>
                     </Col>
                }
            </Row>
            <ModalEditCard
                showModalEdit={showModalEditCard}
                setShowModalEdit={setShowModalEditCard}
            />
        </div>
    )
}

export default Main