import checkwords from './checkwords'

export default (router) => {
  router.use(/\/checkWords/, checkwords);
};
