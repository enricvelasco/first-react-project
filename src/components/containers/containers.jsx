import './containers.css';
import SavedPeople from './saved-people';
import Table from './table';
import InformationAbout from './information-about';

function Containers() {
  return (
      <div className={'master-container'}>
        <div className={'first-container'}>
          <Table />
        </div>
        <div className={'second-container'}>
          <SavedPeople/>
        </div>
        <div className={'third-container'}>
          <InformationAbout/>
        </div>
      </div>
  )
}

export default Containers
