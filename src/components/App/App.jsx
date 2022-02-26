import Header from '../Header'
import SidePanel from '../SidePanel'
import Content from '../Content'

import classes from './App.module.scss'

const App = () => {
  return (
    <div className={classes.App}>
      <Header />
      <SidePanel />
      <Content />
    </div>
  )
}

export default App
