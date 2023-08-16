import { setCourseFilter, setStatusFilter } from "../Store/tableSlice";
import { useDispatch } from "react-redux";

const FilterForm = () => {
  const dispatch = useDispatch();
  const handleStatusChange = (event) => {
    const newStatus = event.target.dataset.value;
    dispatch(setStatusFilter(newStatus));
  };

  const handleCourseChange = (event) => {
    const newCourse = event.target.value;
    dispatch(setCourseFilter(newCourse));
  };
  return (
    <form action="">
      {/* <div className="form-row">  */}
      <div className="row mb-3 justify-content-start">
        <div className="col">
          <div
            id="topStatusBar"
            className="btn-group"
            role="group"
            aria-label="..."
          >
            <button
              onClick={handleStatusChange}
              className="btn btn-light"
              data-value="all"
            >
              Все
            </button>
            <button
              onClick={handleStatusChange}
              className="btn btn-light"
              data-value="new"
            >
              Новые
            </button>
            <button
              onClick={handleStatusChange}
              className="btn btn-light"
              data-value="inwork"
            >
              В работе
            </button>
            <button
              onClick={handleStatusChange}
              className="btn btn-light"
              data-value="complete"
            >
              Завершенные
            </button>
          </div>
        </div>
        <div className="col">
          <select
            onChange={handleCourseChange}
            className="custom-select"
            id="productSelect"
            defaultValue={"all"}
          >
            <option value="all">Все продукты</option>
            <option value="course-html">Курс по верстке</option>
            <option value="course-js">Курс по JavaScript</option>
            <option value="course-vue">Курс по VUE JS</option>
            <option value="course-php">Курс по PHP</option>
            <option value="course-wordpress">Курс по WordPress</option>
          </select>
        </div>
      </div>
    </form>
  );
};
export default FilterForm;
