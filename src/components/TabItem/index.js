import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, updateActiveTabId} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }
  return (
    <li className="list-tab-container">
      <button className="btn" onClick={onClickTabItem} type="button">
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
