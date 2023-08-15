import { Link } from "react-router-dom";

const LeftPanelFilter = ({handleStatusChange, data}) => {
    let lengthApplications
    if(data !== null) {
        let count = data.filter((item) => item.status === 'new')
        lengthApplications = count.length
    }else{
        lengthApplications = 0
    }
    
    console.log(lengthApplications)
    return ( 
        <div className="left-panel__navigation">
        <div className="left-panel__navigation-title">Заявки</div>
        <ul>
            <li><Link onClick={handleStatusChange} data-value="all" data-role="left-status" to={""} className="active">Все вместе</Link></li>
            <li><Link onClick={handleStatusChange} data-value="new" data-role="left-status" to={""} >Новые<div className="badge" id="badge-new">{lengthApplications}</div></Link></li>
            <li><Link onClick={handleStatusChange} data-value="inwork" data-role="left-status" to={""}>В работе</Link></li>
            <li><Link onClick={handleStatusChange} data-value="complete" data-role="left-status" to={""}>Завершенные</Link></li>
        </ul>
    </div>
     );
}
 
export default LeftPanelFilter;