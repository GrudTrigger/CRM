import NavBar from "../NavBar/NavBar";
import FilterForm from "../FilterForm/FilterForm";
import Table from "../Table/Table";
import LeftPanelFilter from "../LeftPanelFilter/LeftPanelFilter";
import ReactLoading from "react-loading";
import { useEffect } from "react";
import { serverPath } from "../helpers/variables";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Store/tableSlice";

const TablePage = () => {
  const dispatch = useDispatch();
  const { filterData, statusFilter, courseFilter } = useSelector(
    (state) => state.table,
  );
  const isLoading = useSelector((state) => state.table.isLoading);
  console.log(isLoading);

  useEffect(() => {
    dispatch(
      fetchData(
        `${serverPath}applications?${
          courseFilter === "all" ? "" : `product=${courseFilter}`
        }${statusFilter === "all" ? "" : `&status=${statusFilter}`}`,
      ),
    );
  }, [dispatch, courseFilter, statusFilter]);

  return (
    <section className="with-nav body--dashboard">
      <NavBar />

      <div className="left-panel blue-skin">
        <div className="left-panel__logo">
          <div className="left-panel__logo-title">CRM заявки</div>
        </div>

        <LeftPanelFilter />
      </div>

      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="admin-heading-1">Все заявки</div>

          <FilterForm />
          {/*{filterData && <Table />}*/}
          {isLoading === true ? (
            <ReactLoading
              type={"spinningBubbles"}
              color={"#9CD6FC"}
              height={"5%"}
              width={"5%"}
              className={"loading-ring"}
            />
          ) : (
            filterData && <Table />
          )}
        </div>
      </div>
    </section>
  );
};

export default TablePage;
