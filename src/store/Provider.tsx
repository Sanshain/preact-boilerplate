import { createContext, useContext } from 'react';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { createAppStore } from './index';

const Context = createContext(null);

export const xProvider = observer(({ children, ...props }) => {
    const store = useLocalObservable(() => createAppStore(props));
    return <Context.Provider value={store}>{children}</Context.Provider>;
});

export const useAppStore = (): ReturnType<typeof createAppStore> => {
    const store = useContext(Context);
    if (!store) throw new Error('Use App store within provider!');
    return store;
};

