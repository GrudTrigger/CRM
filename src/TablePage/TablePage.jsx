import NavBar from "../NavBar/NavBar";
import FilterForm from "../FilterForm/FilterForm";
import Table from "../Table/Table";
import LeftPanelFilter from "../LeftPanelFilter/LeftPanelFilter";

import { useState, useEffect } from "react";
import { serverPath } from "../helpers/variables";



const TablePage = () => {

	const [data, setData] = useState(null)
	const [filterData, setFilterData] = useState(null)


	const [statusFilter, setStatusFilter] = useState('all');
	const [courseFilter, setCourseFilter] = useState('all');


	useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await fetch(`${serverPath}applications?${courseFilter === 'all' ? "" : `product=${courseFilter}`}${statusFilter === 'all' ? "" : `&status=${statusFilter}`}`);
			const data = await response.json();
			setData(data);
			setFilterData(data)
		  } catch (error) {
			console.error(error);
		  }
		};
	
		fetchData();
	  }, [courseFilter, statusFilter ]);

	const handleStatusChange = (event) => {
		console.log(event.target.dataset.value)
		setStatusFilter(event.target.dataset.value);
	};

	const handleCourseChange = (event) => {
		console.log(event.target.value)
		setCourseFilter(event.target.value);
	};
	
	console.log(data)

    return (  
        <section className="with-nav body--dashboard">
		<NavBar/>

		<div className="left-panel blue-skin">

			<div className="left-panel__logo">
				<div className="left-panel__logo-title">CRM заявки</div>
				<div className="left-panel__logo-subtitle">учебный проект webcademy</div>
			</div>

			<div className="left-panel__user clearfix">
				<div className="left-panel__user-photo">
					<img src="img/avatars/avatar-128.jpg" alt="Avatar" />
				</div>
				<div className="left-panel__user-name">Петр <br />Васильевич</div>
			</div>

			<LeftPanelFilter handleStatusChange={handleStatusChange} data={data}/>

		</div>

		<div className="main-wrapper">
			<div className="container-fluid">
				<div className="admin-heading-1">Все заявки</div>

				<FilterForm handleStatusChange={handleStatusChange} handleCourseChange={handleCourseChange}/>
				{data && <Table filterData={filterData}/>}

			</div>
		</div>
	</section>
    );
}
 
export default TablePage
;