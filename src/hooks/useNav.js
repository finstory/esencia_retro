import { useNavigate } from 'react-router-dom';


export const useNav = () => {

  const navigate = useNavigate();
  const compiler = {};

  compiler.redirectHome = () => {
    navigate(`/home`);
  }

  compiler.goBack = () => {
    navigate(-1);
  }

  compiler.redirectDetails = (id) => {
    navigate(`/details/${id}`);
  }

  return { ...compiler };

}
