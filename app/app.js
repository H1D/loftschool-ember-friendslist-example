import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import VK_API from 'vk-friends/utils/vk-api';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  ready() {
    if ( config.vk_app_id == null || config.vk_app_permissions == null) {
      alert('Укажите vk_app_permissions и vk_app_id в config/environment.js');
    }
    VK_API.login(config.vk_app_id, config.vk_app_permissions);
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
