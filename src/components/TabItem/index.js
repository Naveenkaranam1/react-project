import './index.css'

const TabItem = props => {
  const {tabDetails, filteredProjects, isActive} = props
  const {displayText} = tabDetails

  const specificTabClick = () => {
    filteredProjects(tabDetails.tabId)
  }

  const tabEffect = isActive ? 'tabBorder' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${tabEffect}`}
        onClick={specificTabClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
