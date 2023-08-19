import NavBar from "../NavBar/NavBar";
import EditForm from "../EditForm/EditForm";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getUrlId, serverPath } from "../helpers/variables";
import { useSelector, useDispatch } from "react-redux";
import { fetchApplication } from "../Store/editSlice";

const EditPage = () => {
  const { id } = useParams();

  const { application } = useSelector((state) => state.edit);
  const dispatch = useDispatch();
  const applicationURL = getUrlId(serverPath, id);
  useEffect(() => {
    dispatch(fetchApplication(applicationURL));
  }, []);
  console.log(application);

  return (
    <section className="with-nav">
      <NavBar />

      <div className="form-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col">
              <div className="admin-heading-1">Работа с заявкой</div>
            </div>
            <div className="col text-right">
              <Link to={"/table"} className="btn btn-link">
                Вернуться назад.
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col">
              {application && <EditForm application={application} id={id} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditPage;
