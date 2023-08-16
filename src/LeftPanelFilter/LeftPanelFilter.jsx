import { Link } from "react-router-dom";
import { setStatusFilter } from "../Store/tableSlice";
import { useDispatch } from "react-redux";

const LeftPanelFilter = () => {
  const dispatch = useDispatch();
  const handleStatusChange = (event) => {
    const newStatus = event.target.dataset.value;
    dispatch(setStatusFilter(newStatus));
  };

  return (
    <div className="left-panel__navigation">
      <div className="left-panel__navigation-title">Заявки</div>
      <ul>
        <li>
          <Link
            onClick={handleStatusChange}
            data-value="all"
            data-role="left-status"
            to={""}
            className="active"
          >
            Все вместе
          </Link>
        </li>
        <li>
          <Link
            onClick={handleStatusChange}
            data-value="new"
            data-role="left-status"
            to={""}
          >
            Новые
          </Link>
        </li>
        <li>
          <Link
            onClick={handleStatusChange}
            data-value="inwork"
            data-role="left-status"
            to={""}
          >
            В работе
          </Link>
        </li>
        <li>
          <Link
            onClick={handleStatusChange}
            data-value="complete"
            data-role="left-status"
            to={""}
          >
            Завершенные
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftPanelFilter;
