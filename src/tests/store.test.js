// import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import thunk from 'redux-thunk';
// import rootReducer from '../redux/reducers';

// jest.mock('redux');
// jest.mock('@redux-devtools/extension');

// describe('store', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   test('meu Deus pra que testar redux', () => {
//     const mockStore = 'mocked store';
//     createStore.mockReturnValue(mockStore);

//     const mockComposeWithDevTools = jest.fn().mockReturnValue(middleware);
//     composeWithDevTools.mockReturnValue(mockComposeWithDevTools);

//     const result = require('./store').default;

//     expect(createStore).toHaveBeenCalledWith(rootReducer, mockComposeWithDevTools);
//     expect(result).toBe(mockStore);
//   });

//   test('Não estou suportando mais', () => {
//     require('./store');

//     expect(applyMiddleware).toHaveBeenCalledWith(thunk);
//   });
// });
