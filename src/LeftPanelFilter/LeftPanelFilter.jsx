import { Link } from "react-router-dom";
import { setStatusFilter } from "../Store/tableSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const LeftPanelFilter = () => {
  const [activeClass, setActiveClass] = useState("all");
  const dispatch = useDispatch();
  const handleStatusChange = (event, value) => {
    const newStatus = event.target.dataset.value;
    dispatch(setStatusFilter(newStatus));
    setActiveClass(value);
  };

  return (
    <div className="left-panel__navigation">
      <div className="left-panel__navigation-title">Заявки</div>
      <ul>
        <li>
          <Link
            onClick={(event) => handleStatusChange(event, "all")}
            data-value="all"
            data-role="left-status"
            to={""}
            className={activeClass === "all" ? "active" : ""}
          >
            Все вместе
          </Link>
        </li>
        <li>
          <Link
            onClick={(event) => handleStatusChange(event, "new")}
            data-value="new"
            data-role="left-status"
            to={""}
            className={activeClass === "new" ? "active" : ""}
          >
            Новые
          </Link>
        </li>
        <li>
          <Link
            onClick={(event) => handleStatusChange(event, "inwork")}
            data-value="inwork"
            data-role="left-status"
            to={""}
            className={activeClass === "inwork" ? "active" : ""}
          >
            В работе
          </Link>
        </li>
        <li>
          <Link
            onClick={(event) => handleStatusChange(event, "complete")}
            data-value="complete"
            data-role="left-status"
            to={""}
            className={activeClass === "complete" ? "active" : ""}
          >
            Завершенные
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftPanelFilter;
