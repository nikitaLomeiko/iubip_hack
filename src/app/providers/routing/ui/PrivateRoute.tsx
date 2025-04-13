import { authDataStore } from "entities/auth-data";
import { observer } from "mobx-react-lite";
import { SignInPageLazy } from "pages/signin";

interface IProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<IProps> = observer((props) => {
  const { children } = props;

  const {
    state: { isAuth },
  } = authDataStore;

  return !isAuth ? children : <SignInPageLazy />;
});
