import {FaEye, FaInfo, FaLink, FaStar, FaUtensils} from 'react-icons/fa';
import PropTypes from 'prop-types';

function RepoItem({repo}) {
    const {
        name, 
        description,
        htm_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo 
  return (
    <div>
      Item
    </div>
  )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired, 
}

export default RepoItem
