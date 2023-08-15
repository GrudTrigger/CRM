import { useParams, useNavigate } from "react-router-dom";
// import useFetch from "../useFetch/useFetch";
import { useState, useEffect } from "react";
import { serverPath } from "../helpers/variables";
const EditForm = ({data, id, setData}) => {


    const navigate = useNavigate('/table');


    const editApplications= (event) => {
        event.preventDefault();
        setData(()=>{
            return {
                ...data,
                [event.target.email] : event.target.value,
                [event.target.name] : event.target.value,
                [event.target.phone] : event.target.value,
                [event.target.product] : event.target.value,
                [event.target.status] : event.target.value,
            }
        })
    }

    const submitForm = (event) => {
        event.preventDefault();
        console.log(data);
        fetch(serverPath + 'applications/' + id, {
            method: "PUT",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(data)   
        }).then(()=>{
            console.log('edit app')
            navigate('/table')
        })
    }

    const deleteApplications = (event) => {
        event.preventDefault()
        fetch(serverPath + 'applications/' + id, {
            method: "DELETE",   
        }).then(()=>{
            navigate('/table')
        })
    }
    return ( 
        <form  id="form" onSubmit={submitForm}>

        <div className="card mb-4">
            <div className="card-header">Данные о заявке</div>
            <div className="card-body">
                <div className="row mb-3">
                    <div className="col-md-2">
                        <strong>ID:</strong>
                    </div>
                    <div className="col">Заявка №<span id="number">{data.id}</span></div>
                    <input name="id" type="hidden" id="id"/>
                </div>

                <div className="row mb-3">
                    <div className="col-md-2">
                        <strong>Дата создания:</strong>
                    </div>
                    <div className="col" id="date">{data.date}</div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-2">
                        <strong>Продукт:</strong>
                    </div>
                    <div className="col">
                        <select id="product" onChange={editApplications} value={data.product} name="product" className="custom-select" >
                            <option value="course-html">Курс по верстке</option>
                            <option value="course-js">
                                Курс по JavaScript
                            </option>
                            <option value="course-vue">Курс по VUE JS</option>
                            <option value="course-php">Курс по PHP</option>
                            <option value="course-wordpress">
                                Курс по WordPress
                            </option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-2">
                        <strong>Имя:</strong>
                    </div>
                    <div className="col">
                        <input
                            onChange={editApplications}
                            type="text"
                            className="form-control"
                            value={data.name}
                            id="name"
                            name="name"
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-2">
                        <strong>Email:</strong>
                    </div>
                    <div className="col">
                        <input
                            onChange={editApplications}
                            type="text"
                            className="form-control"
                            value={data.email}
                            id="email"
                            name="email"
                            />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-2">
                        <strong>Телефон:</strong>
                    </div>
                    <div className="col">
                        <input
                            onChange={editApplications}
                            type="text"
                            className="form-control"
                            value={data.phone}
                            id="phone"
                            name="phone"
                            />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-2">
                        <strong>Статус заявки:</strong>
                    </div>
                    <div className="col">
                        <select onChange={editApplications} className="custom-select" id="status" name="status" value={data.status}>
                            {/* <option selected="">Статус</option> */}
                            <option value="new">Новая</option>
                            <option value="inwork">В работе</option>
                            <option value="complete">Завершена</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div className="row justify-content-between">
            <div className="col text-left">
                <button type="submit" className="btn btn-primary">Сохранить изменения</button>
            </div>
            <div className="col text-right">
                <button onClick={deleteApplications} type="button" className="btn btn-primary">Удалить заявку</button>
            </div>
        </div>
    </form>
     );
}
 
export default EditForm ;