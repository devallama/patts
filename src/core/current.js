import store from './store';
import { pattSetCurrent, pattSetCurrentComponent, pattSetCurrentDoc } from '../actions/patt-actions';
import { normalisePath, getLastOfPath } from '../util/path';

export default location => {
    if (store.getState().patt.patts) {
        const patts = store.getState().patt.patts;
        const currentPattKey = patts.keys().find(key => normalisePath(location.pathname).toLowerCase() === normalisePath(key).toLowerCase());

        if (currentPattKey) {
            const currentPatt = patts(currentPattKey).default;
            const currentComponent = currentPatt.components.find(component => component.slug == getLastOfPath(location.pathname));
            let currentDoc = null;

            if (!currentComponent) {
                currentDoc = currentPatt.docs.find(doc => doc.slug == getLastOfPath(location.pathname));
            }

            store.dispatch(pattSetCurrent(currentPatt));
            store.dispatch(pattSetCurrentComponent(currentComponent));
            store.dispatch(pattSetCurrentDoc(currentDoc));
        }
    }
}