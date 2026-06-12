import "./App.css";

function App() {
  return (
    <div className="container">
      {/* header */}
      <div className="header">
        <div>
          <span className="header-logo">Logo</span>
        </div>
        <div className="header-filters">
          <select className="dropdown-field">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <div>
            <input type="text" className="input-field" placeholder="search" />
          </div>
        </div>
        <div className="header-actions">
          <div>N</div>
          <div>P</div>
        </div>
      </div>

      <div className="content-and-sidebar">
        {/* sidebar */}
        <div className="sidebar">
          <div className="sidebar-item">A</div>
          <div className="sidebar-item">B</div>
          <div className="sidebar-item">C</div>
          <div className="sidebar-item">D</div>
          <div className="sidebar-item">E</div>
          <div className="sidebar-item">F</div>
        </div>

        {/* content */}
        <div className="content-and-breadcrumb">
          {/* breadcrumb */}
          <div>
            <span>{`Home > Admin > Acess Control`}</span>
          </div>
          {/* main section */}
          <div className="main-section">
            {/* header */}
            <div className="main-section-header">
              <span className="main-section-header-text">
                Maintain Role Level Access Control
              </span>
            </div>
            {/* filters */}
            <div className="filters">
              <div className="">
                <span className="filters-header">Search Criteria</span>
              </div>
              {/* filters inputs */}
              <div className="filter-grid">
                <div>
                  <div>Role</div>
                  <input type="text" className="input-field" />
                </div>
                <div>
                  <div>Access Control Type</div>
                  <select className="dropdown-field">
                    <option>Field Level</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div>
                  <div>Case Category</div>
                  <select className="dropdown-field">
                    <option>NRI</option>
                    <option>Corporate</option>
                  </select>
                </div>
                <div>
                  <div>Case Sub-category</div>
                  <select className="dropdown-field">
                    <option>Address Update</option>
                    <option>Stop Check</option>
                  </select>
                </div>
              </div>
              {/* action */}
              <div className="filter-actions">
                <div className="filter-action-items">
                  <button type="button" className="button-secondary">
                    Clear
                  </button>
                  <button type="button" className="button-primary">
                    Search
                  </button>
                </div>
              </div>
            </div>
            {/* empty state */}
            {/* <div>No result found</div> */}

            {/* table */}
            <div className="table-container">
              {/* header */}
              <div className="table-container-header">
                <div>
                  <span>Access Control</span>
                </div>
                <div>filter</div>
              </div>
              <div>
                <table className="main-table">
                  <thead>
                    <tr>
                      <th>Case Category</th>
                      <th>Case sub category</th>
                      <th>Field Name</th>
                      <th>Masking Preview</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>NRI</td>
                      <td>Address update</td>
                      <td>Address</td>
                      <td>No Access</td>
                      <td>xxxxx-xxxxx-xxxxx</td>
                      <td>
                        <div>
                          <div>view</div>
                          <div>edit</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>NRI</td>
                      <td>Address update</td>
                      <td>Address</td>
                      <td>No Access</td>
                      <td>xxxxx-xxxxx-xxxxx</td>
                      <td>
                        <div>
                          <div>view</div>
                          <div>edit</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>NRI</td>
                      <td>Address update</td>
                      <td>Address</td>
                      <td>No Access</td>
                      <td>xxxxx-xxxxx-xxxxx</td>
                      <td>
                        <div>
                          <div>view</div>
                          <div>edit</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
