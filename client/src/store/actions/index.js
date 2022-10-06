import productsActions from './productsActions';
import cartActions from './cartActions';
import categoriesActions from './categoriesActions';

const actions = {
    ...productsActions,
    ...cartActions,
    ...categoriesActions,
}

export default actions;