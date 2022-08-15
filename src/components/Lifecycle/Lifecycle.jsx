import React, { Component, Fragment } from 'react';
import CounterView from '../CounterView';

class Counter extends Component {
  state = {
    color: '',
  };

  componentDidUpdate() {
    console.log('warnanya', this.state.color);
    if (this.state.color === 'red') {
      alert('Kamu memilih warna merah');
    }
  }

  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.setState((prevState) => ({ color: 'red' }));
            }}
          >
            Button Merah
          </button>
          <button
            onClick={() => {
              this.setState({ color: 'green' });
            }}
          >
            Button Hijau
          </button>

          <button
            onClick={() => {
              this.setState({ color: 'yellow' });
            }}
          >
            Button Kuning
          </button>
        </div>
      </div>
    );
  }
}

// class Header extends React.Component {
//   componentWillUnmount() {
//     alert('The component named Header is about to be unmounted.');
//   }
//   render() {
//     return <h1>Hello World!</h1>;
//   }
// }

// class Unmount extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { show: true };
//   }
//   delHeader = () => {
//     this.setState({ show: false });
//   };
//   render() {
//     let myheader;
//     if (this.state.show) {
//       myheader = <Header />;
//     }
//     return (
//       <div>
//         {myheader}
//         <button type='button' onClick={this.delHeader}>
//           Delete Header
//         </button>
//       </div>
//     );
//   }
// }

class Lifecycle extends Component {
  state = {
    posts: [],
    isDeleted: false,
  };

  componentDidMount() {
    console.log('mount');
  }

  render() {
    return (
      <Fragment>
        Lifecycle
        <Counter />
        {/* {!this.state.isDeleted && <UnmountingExample />}
        <button
          onClick={() => {
            this.setState({
              isDeleted: true,
            });
          }}
        >
          Delete Component
        </button> */}
      </Fragment>
    );
  }
}

class UnmountingExample extends Component {
  componentWillUnmount() {
    alert('Component ini berhasil di unmount');
  }
  render() {
    return <div>Contoh unmounting</div>;
  }
}

export default Lifecycle;
