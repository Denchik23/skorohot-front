export default function ({ store }) {
  if (store.state.showMenu) {
    store.dispatch('toggleMenu')
  }
}
