import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: [ 'draggable' ],
  dragStart() {
    const friend = this.get('friend');
    this.get('friendDragStart')(friend);
  }
});
