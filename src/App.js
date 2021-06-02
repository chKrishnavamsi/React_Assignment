import "./App.css";
import React from 'react'
import Filter from "./components/filter/filter";
import Data from "./data";
import "./components/filter/filter.css";
import Infowrapper from "./components/infoWrapper/infoWrapper"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      visible: false,
    };
  }

  onChangeHandler = (event) => {
    this.setState({ search: event.target.value });
  };
  visibleRow = (e) => {
    e.preventDefault();
    this.setState({ visible: true})
    
  };

  render() {
    let filteredData = Data.filter((user) => {
      let name = `${user.firstName} ${user.lastName}`;
      return name.toUpperCase().indexOf(this.state.search.toUpperCase()) !== -1;
    });
    return (
      <div className="App">
        <div className="main">
          <div className="table-section">
            <form action="/">
              <input
                type="text"
                placeholder="Enter something"
                name="search-box"
                className="search-box"
                value={this.state.search}
                onChange={this.onChangeHandler}
              />
            </form>

            <div className="table-wrapper">
              <div className="table-headers">
                <table>
                  <thead>
                    <tr>
                      <th className="column1">Id</th>
                      <th className="column2">FirstName</th>
                      <th className="column3">LastName</th>
                      <th className="column4">Email</th>
                      <th className="column5">Phone</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="table-data">
                <table>
                  <tbody>
                    {filteredData.map(
                      (
                        {
                          id,
                          firstName,
                          lastName,
                          address,
                          email,
                          phone,
                          description,
                        },
                        index
                      ) => (
                        <Filter
                          key={id}
                          id={id}
                          firstName={firstName}
                          lastName={lastName}
                          address={address}
                          phone={phone}
                          email={email}
                          description={description}

                        />
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Infowrapper />
        </div>
      </div>
    );
  }
}

export default App;
