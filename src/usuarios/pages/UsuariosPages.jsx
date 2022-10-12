import { useMemo, useState } from 'react';
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
  } from "reactstrap";
import { getUsuarios } from '../helpers';



export const UsuariosPage = () => { 
    const [modalActualizar, setModalActualizar] = useState(false);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [avatar, setAvatar] = useState("");
    const [formulario, setFormulario] = useState([{'nombre': '', 
    'apellido': '', 
    'email': '', 
    'username': '', 
    'avatar':''}]);

    const usuariosData = useMemo( () => getUsuarios()); 

    function insertar(){
        usuariosData.push(formulario);
        setModalInsertar(false);
    }

    function eliminar(dato){

    }

    function handleChangeNombre (e) {
        setNombre(e.target.value);
        setFormulario({'nombre': nombre, 
        'apellido': apellido, 
        'email': email, 
        'username': username, 
        'avatar': avatar})
    };

    function handleChangeApellido (e) {
        setApellido(e.target.value);
        setFormulario({'nombre': nombre, 
        'apellido': apellido, 
        'email': email, 
        'username': username, 
        'avatar': avatar})
    };

    function handleChangeEmail (e) {
        setEmail(e.target.value);   
        setFormulario({'nombre': nombre, 
        'apellido': apellido, 
        'email': email, 
        'username': username, 
        'avatar': avatar})     
    };

    function handleChangeUsername (e) {
        setUsername(e.target.value);
        setFormulario({'nombre': nombre, 
        'apellido': apellido, 
        'email': email, 
        'username': username, 
        'avatar': avatar})        
    };

    function handleChangeAvatar (e) {
        setAvatar(e.target.value);
        setFormulario({'nombre': nombre, 
        'apellido': apellido, 
        'email': email, 
        'username': username, 
        'avatar': avatar})
    }
    
    function mostrarModalInsertar() {
        setModalInsertar(true);
    }

    function cerrarModalInsertar(){
        setModalInsertar(false);
    }

    function mostrarModalActualizar() {
        setModalActualizar(true);
    }

    function cerrarModalActualizar(){
        setModalActualizar(false);
    }

    function mostrarModalEliminar(){
        //console.log("Modal: ", dato.username);
        setModalEliminar(true);
    }

    function cerrarModalEliminar(){
        setModalEliminar(false);
    }

  return (
     <Container>
        <br></br>
        <Button color="success" onClick={mostrarModalInsertar}>Crear</Button>
        <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Username</th>
                <th>Avatar</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
            {Object.keys(usuariosData).map (usuario => {
                 return (
                <tr key={usuariosData[usuario].username}>
                  <td>{usuariosData[usuario].nombre}</td>
                  <td>{usuariosData[usuario].apellido}</td>
                  <td>{usuariosData[usuario].email}</td>
                  <td>{usuariosData[usuario].username}</td>
                  <td></td>
                  <td>
                    <Button
                      color="primary"
                      onClick={mostrarModalActualizar}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={mostrarModalEliminar}>Eliminar</Button>
                  </td>
                </tr>
                )})}
              
            </tbody>
          </Table>
          <Modal isOpen={modalInsertar}>
          <ModalHeader>
           <div><h3>Guardar Usuario</h3></div>
          </ModalHeader>

          <ModalBody>            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={handleChangeNombre}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Apellido: 
              </label>
              <input
                className="form-control"
                name="apellido"
                type="text"
                onChange={handleChangeApellido}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Email: 
              </label>
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={handleChangeEmail}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Username: 
              </label>
              <input
                className="form-control"
                name="username"
                type="text"
                onChange={handleChangeUsername}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Avatar: 
              </label>
              <input
                className="form-control"
                name="avatar"
                type="file"
                onChange={handleChangeAvatar}
              />
            </FormGroup>
                    
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={insertar}
            >
              Guardar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={cerrarModalInsertar}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modalActualizar}>
          <ModalHeader>
           <div><h3>Modificar Usuario</h3></div>
          </ModalHeader>

          <ModalBody>            
          <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={handleChangeNombre}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Apellido: 
              </label>
              <input
                className="form-control"
                name="apellido"
                type="text"
                onChange={handleChangeApellido}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Email: 
              </label>
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={handleChangeEmail}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Username: 
              </label>
              <input
                className="form-control"
                name="username"
                type="text"
                onChange={handleChangeUsername}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Avatar: 
              </label>
              <input
                className="form-control"
                name="avatar"
                type="text"
                onChange={handleChangeAvatar}
              />
            </FormGroup>
                    
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              
            >
              Actualizar información
            </Button>
            <Button
              className="btn btn-danger"
              onClick={cerrarModalActualizar}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modalEliminar}>
          <ModalHeader>
           <div><h3>Eliminar Usuario</h3></div>
          </ModalHeader>

          <ModalBody>            
          <FormGroup>
              <label>
                ¿Estás seguro que deseas eliminar el usuario? 
              </label>
            </FormGroup>                    
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              
            >
              Eliminar registro
            </Button>
            <Button
              className="btn btn-danger"
              onClick={cerrarModalEliminar}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
     </Container>
  )
}