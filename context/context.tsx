import {createContext} from 'react';

interface ContextProps {
  loading: boolean;
  setLoading: Function;
  user: any;
  setUser: Function;
}

export const contextInitialValue = {
  loading: false,
  setLoading: () => null,
  user: {},
  setUser: () => null,
};

const AppContext = createContext<ContextProps>(contextInitialValue);

export default AppContext;
