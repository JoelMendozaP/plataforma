import "./style/style.css";
import { Sidebar } from "../navigation";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./header";
import Main from "../../routes/Main";
import { Snackbar } from "../common";
import { Information } from "./aside";
const Template = () => {
  return (
    <BrowserRouter>
      <div className="containerGrid">
        <div className="itemnav">
          <Header />
        </div>
        <div className="itemSidebar">
          <Sidebar />
        </div>
        <div className="itemContent">
          <Main />
        </div>
        <div className="itemInformation">
          <Information />
        </div>
        <Snackbar />
      </div>
    </BrowserRouter>
  );
};

export default Template;
