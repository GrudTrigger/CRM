import NavBar from "../NavBar/NavBar";
import FilterForm from "../FilterForm/FilterForm";
import Table from "../Table/Table";
import LeftPanelFilter from "../LeftPanelFilter/LeftPanelFilter";

import { useEffect } from "react";
import { serverPath } from "../helpers/variables";
import { useDispatch, useSelector } from "react-redux";
import {
  setCourseFilter,
  setFilterData,
  setStatusFilter,
} from "../Store/tableSlice";

const TablePage = () => {
  const dispatch = useDispatch();
  const { filterData, statusFilter, courseFilter } = useSelector(
    (state) => state.table,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${serverPath}applications?${
            courseFilter === "all" ? "" : `product=${courseFilter}`
          }${statusFilter === "all" ? "" : `&status=${statusFilter}`}`,
        );
        const data = await response.json();
        dispatch(setFilterData(data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [courseFilter, statusFilter]);

  const handleStatusChange = (event) => {
    const newStatus = event.target.dataset.value;
    dispatch(setStatusFilter(newStatus));
  };

  const handleCourseChange = (event) => {
    const newCourse = event.target.value;
    dispatch(setCourseFilter(newCourse));
  };

  return (
    <section className="with-nav body--dashboard">
      <NavBar />

      <div className="left-panel blue-skin">
        <div className="left-panel__logo">
          <div className="left-panel__logo-title">CRM заявки</div>
        </div>

        <div className="left-panel__user clearfix">
          <div className="left-panel__user-photo">
            <img src="img/avatars/avatar-128.jpg" alt="Avatar" />
          </div>
          <div className="left-panel__user-name">
            Петр <br />
            Васильевич
          </div>
        </div>

        <LeftPanelFilter />
      </div>

      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="admin-heading-1">Все заявки</div>

          <FilterForm
            handleStatusChange={handleStatusChange}
            handleCourseChange={handleCourseChange}
          />
          {filterData && <Table filterData={filterData} />}
        </div>
      </div>
    </section>
  );
};

export default TablePage;
