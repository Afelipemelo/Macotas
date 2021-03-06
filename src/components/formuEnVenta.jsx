import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "../Style/DarAdopccion.css"
const Venta = ({crearAdopcion}) => {
    const [venta,setVenta] = useState ({
        nombre:"", 
        id_tipo:"",
        id_raza:"", 
        edad:"",
        esteralizado:"",
        id_estado:"3",
        id_genero:"",
        id_tamano:"",
        id_ciudad:"",
        descripcion:"",
        precio:"",
    })
    const {nombre,id_tipo,id_raza,id_estado,edad,esteralizado,id_genero,id_tamano,id_ciudad,descripcion,precio} = venta
    const [error,setError] = useState(false)
    const handleChange = e =>{
        setVenta({
            ...venta,
            [e.target.name]:e.target.value
        })
    }
    const submitVenta = e =>{
        e.preventDefault()
        
        if(nombre.trim()=="" || id_tipo.trim() == "" || id_raza.trim()=="" ||edad.trim() == "" ||esteralizado.trim() == "" ||id_estado.trim()== "" || id_genero.trim()== "" || id_tamano.trim()== ""|| id_ciudad.trim()== "" || descripcion.trim()=="" ||precio.trim()==""){
            setError(true)
            return;
        }
        setError(false)

        const insertarFour = async() => {
            try{
            const formu = new FormData()
            formu.append('nombre' ,venta.nombre)
            formu.append('id_tipo' , Number(venta.id_tipo))
            formu.append('id_raza' , Number(venta.id_raza))
            formu.append('edad' , Number(venta.edad ))
            formu.append('esteralizado' , venta.esteralizado)
            formu.append('id_estado' ,Number(venta.id_estado))
            formu.append('id_genero' , Number(venta.id_genero))
            formu.append('id_tamano' , Number(venta.id_tamano))
            formu.append('id_ciudad' , Number(venta.id_ciudad))
            formu.append('descripcion' , venta.descripcion)
            formu.append('precio' , Number(venta.precio))
           
        const response = await axios.post('http://localhost:4001/crear-mascota',formu);  
        return response  
            }catch (e) {
                console.log(e)
            }
        }
     insertarFour()

     setVenta({
            nombre:"", 
            id_tipo:"",
            id_raza:"", 
            edad:"",
            esteralizado:"",
            id_estado:"3",
            id_genero:"",
            id_tamano:"",
            id_ciudad:"",
            descripcion:"",
            precio:"",
        })
    }
    return (
        <div className='container-darAdop'>
            <h1>Formulario para dar en venta </h1>
            {error ?<p>Todos los campos son obligatorios</p> :null}
            <form  onSubmit={submitVenta}>
                <div className='Formulario'>
                    <label>Nombre De La Mascota</label>
                    <input
                        type="text"
                        placeholder="Nombre Mascota"
                        name='nombre'
                        onChange={handleChange}
                        value={nombre}
                    />
                    <label>Edad</label>
                    <input type="text" name='edad' placeholder="Edad de La Mascota"  onChange={handleChange} / >
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
                    <label>Castrado/a</label>
                    <select name='esteralizado' onChange={handleChange} value={esteralizado}>
                        <option>Castrado</option>
                        <option>Si</option>
                        <option>No</option>
                    </select>
                    <label>Genero</label>
                    <select name='id_genero' onChange={handleChange}   value={id_genero}>
                        <option>Genero</option>
                        <option value={1}>Macho</option>
                        <option value={2}>Hembra</option>
                    </select>
                    <label>Tama??o</label>
                    <select name='id_tamano' onChange={handleChange} value={id_tamano} >
                        <option>Tama??o</option>
                        <option value={1}>Peque??o</option>
                        <option value={2}>Mediano</option>
                        <option value={3}>Grande</option>
                    </select>
                    <label>Ubicacion</label>
                    <select name='id_ciudad' onChange={handleChange}  value={id_ciudad}>
                        <option >Ciudad</option>
                        <option value={1}>Bogot??</option>
                        <option value={2}>Medell??n</option>
                        <option>Cal??</option>
                        <option>Barranquilla</option>
                        <option>Cartagena</option>
                        <option>C??cuta</option>
                        <option>Soledad</option>
                        <option>Santa Marta</option>
                        <option>Villavicencio</option>
                        <option>Pereira</option>
                        <option>Bello</option>
                        <option>Valledupar</option>
                        <option>Monter??a</option>
                        <option>Pasto</option>
                        <option>Manizales</option>
                        <option>Buenaventura</option>
                        <option>Neiva</option>
                        <option>Barrancabermeja</option>
                        <option>Palmira</option>
                        <option>Armenia</option>
                        <option>Popay??n</option>
                        <option>Sincelejo</option>
                        <option>Itagui</option>
                        <option>Floridablanca</option>
                        <option>Riohacha</option>
                        <option>Envigado</option>
                        <option>Tulu??</option>
                        <option>Dosquebradas</option>
                        <option>San Andr??s de Tumaco</option>
                        <option>Tunja</option>
                        <option>Gir??n</option>
                        <option>Apartad??</option>
                        <option>Florencia</option>
                        <option>Uribia</option>
                        <option>Ipiales</option>
                        <option>Turbo</option>
                        <option>Maicao</option>
                        <option>Piedecuesta</option>
                        <option>Yopal</option>
                    </select>
                    <label>Precio</label>
                    <input type="text" name='precio' placeholder="Precio de La Mascota"  onChange={handleChange} / >
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
                >
                    Agregar Mascota
                </button>
            </form>
        </div>  
        
     );
}
 
export default Venta;