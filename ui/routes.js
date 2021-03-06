// routes.js
const UserController = require('./controllers/userController');
const AcquisitorController = require('./controllers/acquisitorController');
const TpreparatorController = require('./controllers/tpreparatorController');
const TrainerController = require('./controllers/trainerController');
const EvaluatorController = require('./controllers/evaluatorController');
const PredictorController = require('./controllers/predictorController');


module.exports = [
  { // GET Login
    method: 'POST',
    path: '/api/login',
    handler: UserController.login,
  },
  { // GET Users
    method: 'GET',
    path: '/api/users',
    handler: UserController.getUsers,
  },
  {
    method: 'POST',
    path: '/api/acquisitor/status',
    handler: AcquisitorController.status
  },
  {
    method: 'POST',
    path: '/api/acquisitor',
    handler: AcquisitorController.action
  },
  {
    method: 'POST',
    path: '/api/tpreparator/reload',
    handler: TpreparatorController.reload
  },
  {
    method: 'POST',
    path: '/api/tpreparator',
    handler: TpreparatorController.action
  },
  {
    method: 'POST',
    path: '/api/trainer/status',
    handler: TrainerController.status
  },
  {
    method: 'POST',
    path: '/api/trainer/reload',
    handler: TrainerController.reload
  },
  {
    method: 'POST',
    path: '/api/trainer',
    handler: TrainerController.action
  },
  {
    method: 'POST',
    path: '/api/evaluator/reload',
    handler: EvaluatorController.reload
  },
  {
    method: 'POST',
    path: '/api/evaluator/metrics',
    handler: EvaluatorController.metrics
  },
  {
    method: 'POST',
    path: '/api/evaluator',
    handler: EvaluatorController.action
  },
  {
    method: 'POST',
    path: '/api/predictor',
    handler: PredictorController.action
  },
  { // GET Api Healthcheck
    method: 'GET',
    path: '/healthcheck',
    handler: (request, h) => h.response({ message: 'API HealthCheck' }).type('application/json').code(200),
  },
  { // Angular static Path
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true,
      },
    },
  },
];
