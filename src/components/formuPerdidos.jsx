import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { v4 as uuidv4} from 'uuid'
import "../Style/formuPerdido.css"
const ForumularioPerdidos = ({crearPerdido}) => {
    const [perdido,setPerdido] = useState ({
        nombre:"", 
        id_tipo:"",
        id_raza:"", 
        edad:"",
        esteralizado:"",
        id_estado:"2",
        id_genero:"",
        id_tamano:"",
        id_ciudad:"",
        descripcion:"",
        precio:"",
    })
    const {nombre,id_tipo,id_raza,id_estado,edad,esteralizado,id_genero,id_tamano,id_ciudad,descripcion,precio} = perdido
    const [error,setError] = useState(false)
    const handleChange = e =>{
        setPerdido({
            ...perdido,
            [e.target.name]:e.target.value
        })
    }
    const submitPerdidos = e =>{
        e.preventDefault()
        
        if(nombre.trim()=="" || id_tipo.trim() == "" || id_raza.trim()=="" ||id_estado.trim()== "" || id_genero.trim()== "" || id_tamano.trim()== ""|| id_ciudad.trim()== "" || descripcion.trim()=="" ){
            setError(true)
            return;
        }
        setError(false)
        const insertarFour = async() => {
            try{
            const formu = new FormData()
            formu.append('nombre' ,perdido.nombre)
            formu.append('id_tipo' , Number(perdido.id_tipo))
            formu.append('id_raza' , Number(perdido.id_raza))
            formu.append('edad' , Number(perdido.edad ))
            formu.append('esteralizado' , perdido.esteralizado)
            formu.append('id_estado' ,Number(perdido.id_estado))
            formu.append('id_genero' , Number(perdido.id_genero))
            formu.append('id_tamano' , Number(perdido.id_tamano))
            formu.append('id_ciudad' , Number(perdido.id_ciudad))
            formu.append('descripcion' , perdido.descripcion)
            formu.append('precio' , Number(perdido.precio))
           
        const response = await axios.post('http://localhost:4001/crear-mascota',formu);  
        return response  
            }catch (e) {
                console.log(e)
            }
        }
     insertarFour()
        setPerdido({
            nombre:"", 
            id_tipo:"",
            id_raza:"", 
            edad:"",
            esteralizado:"",
            id_estado:"2",
            id_genero:"",
            id_tamano:"",
            id_ciudad:"",
            descripcion:"",
            precio:"",
        })
    }
     return (
        <div className='container-darAdop'>
            <h1>
            Formulario para publicar animales perdidos
            </h1>
            {error ?<p>Todos los campos son obligatorios</p> :null}
            <form  onSubmit={submitPerdidos}>
                <div className='Formulario'>
                    <label>Nombre De La Mascota</label>
                    <input
                        type="text"
                        placeholder="Nombre Mascota"
                        name='nombre'
                        onChange={handleChange}
                        value={nombre}
                    />
                     <label>Tipo</label>
                    <select name='id_tipo' onChange={handleChange} value={id_tipo}>
                        <option>tipo</option>
                        <option value={1}>Felino</option>
                        <option value={2}>Canino</option>
                    </select>
                    <label>Raza</label>
                    <select name='id_raza' onChange={handleChange} value={id_raza}>
                    <option>raza</option>
                        <option value={1}>pitbul</option>
                        <option value={1}>pastor aleman</option>
                    </select>
                    <label>Genero</label>
                    <select name='id_genero' onChange={handleChange}   value={id_genero}>
                        <option>Genero</option>
                        <option value={1}>Macho</option>
                        <option value={2}>Hembra</option>
                    </select>
                    <label>Tamaño</label>
                    <select name='id_tamano' onChange={handleChange} value={id_tamano} >
                        <option>Tamaño</option>
                        <option value={1}>Pequeño</option>
                        <option value={2}>Mediano</option>
                        <option value={3}>Grande</option>
                    </select>
                    <label>Ultima ves visto</label>
                    <select name='id_ciudad' onChange={handleChange}  value={id_ciudad}>
                        <option >Ciudad</option>
                        <option value={1}>Bogotá</option>
                        <option value={2}>Medellín</option>
                        <option>Calí</option>
                        <option>Barranquilla</option>
                        <option>Cartagena</option>
                        <option>Cúcuta</option>
                        <option>Soledad</option>
                        <option>Santa Marta</option>
                        <option>Villavicencio</option>
                        <option>Pereira</option>
                        <option>Bello</option>
                        <option>Valledupar</option>
                        <option>Montería</option>
                        <option>Pasto</option>
                        <option>Manizales</option>
                        <option>Buenaventura</option>
                        <option>Neiva</option>
                        <option>Barrancabermeja</option>
                        <option>Palmira</option>
                        <option>Armenia</option>
                        <option>Popayán</option>
                        <option>Sincelejo</option>
                        <option>Itagui</option>
                        <option>Floridablanca</option>
                        <option>Riohacha</option>
                        <option>Envigado</option>
                        <option>Tuluá</option>
                        <option>Dosquebradas</option>
                        <option>San Andrés de Tumaco</option>
                        <option>Tunja</option>
                        <option>Girón</option>
                        <option>Apartadó</option>
                        <option>Florencia</option>
                        <option>Uribia</option>
                        <option>Ipiales</option>
                        <option>Turbo</option>
                        <option>Maicao</option>
                        <option>Piedecuesta</option>
                        <option>Yopal</option>
                    </select>
                    <label>Descripcion</label>
                    <textarea
                    placeholder="Descripccion"
                    name='descripcion'
                    onChange={handleChange}
                    value={descripcion}
                    />
                </div>
                <button 
                type="submit"
                onChange={handleChange}
                >
                    Publicar Mascota
                </button>
            </form>
        </div>
      );
}
 
export default ForumularioPerdidos;