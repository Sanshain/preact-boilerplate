import { createContext, useContext } from 'react';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { createAppStore } from './index';

export const Context = createContext(null);

// export const MobxProvider = observer(({ children, ...props }) => {
//     const store = useLocalObservable(() => createAppStore(props));
//     console.log(999999999)
//     return <Context.Provider value={store}>{children}</Context.Provider>;
// });

export const useAppStore = (): ReturnType<typeof createAppStore> => {
    const store = useContext(Context);
    console.log(111)
    if (!store) throw new Error('Use App store within provider!');
    return store;
};

