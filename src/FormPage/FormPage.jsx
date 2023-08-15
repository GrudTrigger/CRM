import NavBar from "../NavBar/NavBar";
import AddForm from "../AddForm/AddForm";

const FormPage = () => {

    return ( 
        
        <section className="with-nav radial-bg flex-center body">
            <NavBar/>
            <div className="white-plate white-plate--payment">
                <div className="container-fluid">
                    <div className="white-plate__header text-center">
                        <p className="white-plate__logo">
                        <span>Форма</span> заявок
                        </p>
                    </div>
                <div className="white-plate__line-between white-plate__line-between--main"></div>
                    <AddForm/>
                </div>
            </div>
        </section>
    );
}


export default FormPage;