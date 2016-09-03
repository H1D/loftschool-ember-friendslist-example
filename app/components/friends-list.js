import Ember from 'ember';

export default Ember.Component.extend({
  list: Ember.computed( 'filterStr', 'include.[]', 'exclude.[]', function() {
    const include = this.get('include');
    const exclude = this.get('exclude') || [];
    const filterStr = this.get('filterStr');
    return include.filter( friend=> {
      const is_filtered = !filterStr || (friend.first_name + friend.last_name).includes(filterStr);
      return !exclude.findBy('uid', friend.uid) && is_filtered;
    });
  }),
  dragOver(e) {
    e.preventDefault();
  }
});
