export const state = () => ({
  showMenu: false
})

export const mutations = {
  TOGGLE_MENU (state) {
    state.showMenu = !state.showMenu
  }
}
