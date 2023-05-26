
import {Helmet} from "react-helmet"
// eslint-disable-next-line react/prop-types
const PageTitle = ({title}) => {
    return (
      <>
        <Helmet> {<title>TurboCar | {title}</title>}</Helmet>
      </>
    );
};

export default PageTitle;