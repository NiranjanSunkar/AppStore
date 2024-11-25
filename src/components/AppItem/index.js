import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl} = appDetails
  return (
    <li className="app-list-container">
      <div className="app-bg-container">
        <img src={imageUrl} className="image" alt={`app-name ${appId}`} />
        <p className="app-name">{appName}</p>
      </div>
    </li>
  )
}
export default AppItem
