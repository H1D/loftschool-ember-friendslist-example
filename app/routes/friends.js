import Ember from 'ember';
import VK_API from 'vk-friends/utils/vk-api';

export default Ember.Route.extend({
  model() {
    let selected = [];
    if(localStorage.key('selectedFriends')) {
      selected = JSON.parse( localStorage.getItem('selectedFriends') );
    }

    return Ember.RSVP.hash({
      all: VK_API.getFriends(),
      selected: selected
    });
  }
});
