import axios from "axios";
import React from "react";

const urlRegistrarUsuario = "";
const urlLogin = "";
const urlModificarUsuario = "";

export default function RegistrarUsuario() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(urlRegistrarUsuario).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
}

export default function login() {
    const [post, setPost] = React.useState(null);
  
    React.useEffect(() => {
      axios.get(urlLogin).then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;
  }

  export default function modificarUsuario() {
    const [post, setPost] = React.useState(null);
  
    React.useEffect(() => {
      axios.get(urlModificarUsuario).then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;
  }