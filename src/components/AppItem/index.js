// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-image-name-con">
      <img className="app-icon-size" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
