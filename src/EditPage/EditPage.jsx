import NavBar from "../NavBar/NavBar";
import EditForm from "../EditForm/EditForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { serverPath } from "../helpers/variables";


const EditPage = () => {

	const [data, setData] = useState(null);


    const {id} = useParams();
    useEffect(()=>{
        fetch(serverPath + 'applications/' + id).then((res)=>{
            return res.json()
        }).then((data)=>{
            setData(data)
        })
    }, [])

    return ( 
        <section className="with-nav">
		<NavBar/>

		<div className="form-wrapper">
			<div className="container-fluid">

				<div className="row justify-content-between align-items-center">
					<div className="col">
						<div className="admin-heading-1">Работа с заявкой</div>
					</div>
					<div className="col text-right">
						<a href="index.html" className="btn btn-link">Вернуться назад</a>
					</div>
				</div>

				<div className="row">

					<div className="col">
						{data && <EditForm data={data} setData={setData} id={id}/>}
					</div>

				</div>

			</div>
		</div>

	</section>
    );
}
 
export default EditPage;