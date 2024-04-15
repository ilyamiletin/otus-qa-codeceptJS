/// <reference types='codeceptjs' />

import BasketPage from './framework/pages/BasketPage.js';

type steps_file = typeof import('./steps_file.js');
type loginPage = typeof import('./framework/pages/LoginPage.js');
type homePage = typeof import('./framework/pages/HomePage.js');
type noutbukiPage = typeof import('./framework/pages/NoutbukiPage.js');
type basketPage = typeof import('./framework/pages/BasketPage.js');
type addNewTaskFormElement = typeof import('./framework/elements/AddNewTaskFormElement.js');
type taskListElement = typeof import('./framework/elements/TaskListElement.js');
type searchElement = typeof import('./framework/elements/SearchElement.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, homePage: homePage, noutbukiPage: noutbukiPage, basketPage: basketPage, addNewTaskFormElement: addNewTaskFormElement, taskListElement: taskListElement, searchElement: searchElement }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
