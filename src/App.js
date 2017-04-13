import Navbar from '@/components/Navbar'
import AppMain from '@/components/AppMain'
import FooterBar from '@/components/FooterBar'
/* 加载bulma */
import 'bulma'
/* 自定义基础属性 */
import 'scss/style.scss'
export default {
  name: 'app',
  components: {
    Navbar,
    AppMain,
    FooterBar
  },
  render (h) {
    console.log(Navbar)
    return (
      <div id="app">
        <Navbar></Navbar>
        <AppMain></AppMain>
        <FooterBar></FooterBar>
      </div>
    )
  }
}
