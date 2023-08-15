import { Link } from "react-router-dom";
const Table = ({filterData}) => {

	const test  = {
		"course-html" : "Курс по верстке",
		"course-js" : "Курс по JavaScript",
		"course-vue" : "Курс по VUE JS",
		"course-php" : "Курс по PHP",
		"course-wordpress" : "Курс по WordPress",

	}

	const badge = {
		"new" : "Новый",
		"inwork" : "В работе",
		"complete" : "Завершенные",
	}
	
	const badgeClasses = {
		new: 'badge badge-pill badge-danger',
		inwork: 'badge badge-pill badge-warning',
		complete: 'badge badge-pill badge-success'
	}

	let current

    return ( 
        <table className="table fs-14">
			<thead>
				<tr>
					<th>ID</th>
					<th>дата</th>
					<th>продукт</th>
					<th>имя</th>
					<th>email</th>
					<th>телефон</th>
					<th>статус</th>
					<th></th>
				</tr>
			</thead>

			<tbody id="tbody">
				{filterData.map((app) => (
				// {}
				<tr key={app.id}>
					<th scope="row">{app.id}</th>
					<td>{app.date}</td>
					<td>{current = test[app.product]}</td>
					<td>{app.name}</td>
					<td>{app.email}</td>
					<td>{app.phone}</td>
					<td>
					<div className={badgeClasses[app.status]}>{badge[app.status]}</div>
					</td>
					<td>
						<Link to={`/edit/${app.id}`}>Редактировать</Link>
					</td>	
				</tr>))}
			</tbody>
		</table>
     );
}
 
export default Table
	