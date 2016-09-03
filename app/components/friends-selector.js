import Ember from 'ember';

export default Ember.Component.extend({
  addSelected(friend) {
    const selected=this.get('selectedFriends');
    selected.pushObject(friend);
  },
  removeSelected(friend) {
    const selected=this.get('selectedFriends');
    selected.removeObject(friend);
  },
  saveSelected() {
    const selected=this.get('selectedFriends');
    const selelcted_str = JSON.stringify(selected);
    localStorage.setItem('selectedFriends', selelcted_str);
  },
  memoFriend(friend) {
    this.set('draggedFriend', friend);
  }
});
